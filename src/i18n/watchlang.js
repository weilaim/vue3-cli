import { watch } from 'vue'
import useMenuStore from '../store/modules/menu'

const userStore = useMenuStore()
export const watchLang = (...cbs) => {
  watch(
    () => userStore.lang,
    () => {
      cbs.forEach((cb) => cb(userStore.lang))
    },
    { deep: true }
  )
}
