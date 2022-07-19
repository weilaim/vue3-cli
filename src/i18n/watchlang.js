import { watch } from 'vue'
import useMenuStore from '../store/modules/menu'

const userStore = useMenuStore()
console.log('watchlang', userStore.lang)

export const watchLang = (...cbs) => {
  watch(
    () => userStore.lang,
    () => {
      cbs.forEach((cb) => cb(userStore.lang))
    },
    { deep: true }
  )
}
