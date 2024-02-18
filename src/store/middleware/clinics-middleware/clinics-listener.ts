import { createListenerMiddleware } from '@reduxjs/toolkit'
import clinicServices from '@/services/clinics-services'
import { loadClinics } from '@/store/actions/actions'
import { getClinics } from '@/store/reducers/clinics/clinics'

const listenerClinics = createListenerMiddleware()

listenerClinics.startListening({
  actionCreator: loadClinics,
  effect: async (action, { dispatch, fork }) => {
    const userOnId = action.payload! as string

    const task = fork(async () => {
      return await clinicServices.get(userOnId)
    })

    const response = await task.result

    if (response.status === 'ok') {
      if (response.value) {
        dispatch(getClinics(response.value))
      }
    }
  },
})

export { listenerClinics }
