import { storageKey } from '@/constants'

export const saveUserInLocalStorage = (uid: string) => {
  localStorage.setItem(storageKey, JSON.stringify(uid))
}
