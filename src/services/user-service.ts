import { doc, getDoc } from 'firebase/firestore'
import { UserProps } from '@/components/types/'
import { db } from '@/config/firebase'

const userService = {
  get: async (uid: string) => {
    const userDocRef = doc(db, 'users', uid)
    const responseDoc = await getDoc(userDocRef)
    const data = responseDoc.data() as UserProps

    return data
  },
}

export default userService
