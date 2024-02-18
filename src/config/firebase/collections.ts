import { collection } from 'firebase/firestore'
import { db } from './index'

const collectionUser = collection(db, 'users')
const collectionClinics = collection(db, 'clinics')

export { collectionUser, collectionClinics }
