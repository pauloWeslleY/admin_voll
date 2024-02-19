import { createListenerMiddleware } from '@reduxjs/toolkit'
import { loadUser } from '@/store/actions/actions'
import userService from '@/services/user-service'
import { getUserLogged } from '@/store/reducers'
import { RootState } from '@/store/types/types'
import { UserProps } from '@/components/types'
import { toasts } from '@/components/ui'

const listenerUser = createListenerMiddleware()

listenerUser.startListening({
  actionCreator: loadUser,
  effect: async (action, { dispatch, fork, getState, unsubscribe }) => {
    const userIdLogged = action.payload! as string
    const state = getState() as RootState
    const user = state.auth

    if (user.isLogged) return unsubscribe()

    const task = fork(async () => {
      return await userService.get(userIdLogged)
    })

    const response = await task.result

    if (response.status === 'ok') {
      const userAuth = {
        uid: userIdLogged,
        username: response.value.username,
        email: response.value.email,
        photoUrl: response.value.photoUrl,
        clinics: response.value.clinics,
        cpf: response.value.cpf,
        phone: response.value.phone,
        createdAt: response.value.createdAt,
        updatedAt: response.value.updatedAt,
      } satisfies UserProps

      dispatch(getUserLogged({ user: userAuth, isLogged: true }))
    }

    if (response.status === 'rejected') {
      toasts.error({ title: 'Não foi possível buscar dados do usuário' })
    }
  },
})

export { listenerUser }
