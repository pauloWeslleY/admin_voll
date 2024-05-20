import { useNavigate } from 'react-router-dom'
import { FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/config/firebase'
import { logout, setAuth } from '@/store/reducers'
import { toasts } from '@/components/ui'
import { useAppDispatch } from '@/store/hook'
import { authService } from '@/services/auth-services'
import { SignInProps, SignUpProps } from '@/pages/auth/components'

const useAuthentication = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignUp = async (params: SignUpProps) => {
    const { email, password } = params
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password)

      dispatch(setAuth(data))
      await authService.signUp({ authResponse: data, dataUser: params })
      navigate('/dashboard')
      toasts.success({ title: 'Usuário cadastrado' })
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/email-already-in-use') {
          toasts.error({ title: 'Email já cadastrado' })
          return
        }
      }
      toasts.error({ title: 'Ops! Aconteceu um erro inesperado' })
    }
  }

  const handleSignIn = async ({ email, password }: SignInProps) => {
    try {
      const data = await authService.signIn({ email, password })
      dispatch(setAuth(data))
      navigate('/dashboard/home')
      toasts.success({ title: 'Usuário logado' })
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/invalid-credential') {
          toasts.error({ title: 'Usuário inválido' })
          return
        }
      }
      toasts.error({ title: 'Ops! Aconteceu um erro inesperado' })
    }
  }

  const handleLogout = async () => {
    await authService.logout()
    dispatch(logout())
  }

  return { handleSignUp, handleSignIn, handleLogout }
}

export { useAuthentication }
