import { collection } from 'firebase/firestore'
import { db } from './index'

const collectionUser = collection(db, 'users')
const collectionCarts = collection(db, 'carts')
const collectionProducts = collection(db, 'products')

export { collectionUser, collectionCarts, collectionProducts }
