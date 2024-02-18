import { useNavigate } from 'react-router-dom'
import { FirebaseError } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { SignUpProps } from '../modules/sign-up/sign-up-props'
import { collectionUser } from '@/config/firebase/collections'
import { auth } from '@/config/firebase'
import { useAppDispatch } from '@/store/hook'
import { logout, setAuth } from '@/store/reducers'
import { toasts } from '@/components/ui'
import { saveUserInLocalStorage } from '@/utils/saved-storage/saved-storage'
import { storageKey } from '@/constants'
import { SignInProps } from '../modules/sign-in/sign-in-props'

export const useAuthentication = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignUp = async ({
    username,
    email,
    password,
    photoUrl,
    cpf,
    phone,
  }: SignUpProps) => {
    try {
      const authResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      dispatch(setAuth(authResponse))

      const uid = authResponse.user.uid
      const docRef = doc(collectionUser, uid)

      await updateProfile(authResponse.user, {
        displayName: username,
        photoURL: photoUrl,
      })

      const userData = {
        uid,
        username,
        email: authResponse.user.email!,
        cpf,
        phone,
        photoUrl,
        clinics: [],
        createdAt: format(new Date(), "d 'de' MMMM 'de' yyyy 'às' HH:mm:ss", {
          locale: ptBR,
        }),
        updatedAt: null,
      }

      await setDoc(docRef, userData)
      saveUserInLocalStorage(uid)
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
      const data = await signInWithEmailAndPassword(auth, email, password)

      saveUserInLocalStorage(data.user.uid)

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
    await signOut(auth)
      .then(() => {
        localStorage.removeItem(storageKey)
      })
      .catch((err) => {
        console.log(err)
      })

    dispatch(logout())
  }

  return {
    handleSignIn,
    handleSignUp,
    handleLogout,
  }
}
