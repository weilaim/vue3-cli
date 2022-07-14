import { lStorage } from './cache'

const USER_STORE = 'user_store'
const DURATION = 6 * 60 * 60

export function getLStorageUser() {
  return lStorage.get(USER_STORE)
}

export function setLStorageUser(user) {
  lStorage.set(USER_STORE, user, DURATION)
}

export function removeLStorageUser() {
  lStorage.remove(USER_STORE)
}
