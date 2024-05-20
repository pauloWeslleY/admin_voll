import {
  UserCredential,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { collectionUser } from '@/config/firebase/collections'
import { saveUserInLocalStorage } from '@/utils/saved-storage/saved-storage'
import { auth } from '@/config/firebase'
import { storageKey } from '@/constants'
import { SignInProps, SignUpProps } from '@/pages/auth/components'

type SignUpType = {
  authResponse: UserCredential
  dataUser: SignUpProps
}

export const authService = {
  signUp: async (params: SignUpType) => {
    const { authResponse, dataUser } = params
    const uid = authResponse.user.uid
    const docRef = doc(collectionUser, uid)

    await updateProfile(authResponse.user, {
      displayName: dataUser.username,
      photoURL: dataUser.photoUrl,
    })

    const userData = {
      uid,
      username: dataUser.username,
      email: dataUser.email,
      cpf: dataUser.cpf,
      phone: dataUser.phone,
      photoUrl: dataUser.photoUrl,
      clinics: [],
      createdAt: format(new Date(), "d 'de' MMMM 'de' yyyy 'às' HH:mm:ss", {
        locale: ptBR,
      }),
      updatedAt: null,
    }

    await setDoc(docRef, userData)
    saveUserInLocalStorage(uid)
  },
  signIn: async ({ email, password }: SignInProps) => {
    const data = await signInWithEmailAndPassword(auth, email, password)
    saveUserInLocalStorage(data.user.uid)
    return data
  },
  logout: async () => {
    await signOut(auth)
      .then(() => {
        localStorage.removeItem(storageKey)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
