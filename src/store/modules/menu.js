import { defineStore } from 'pinia'

const useMenuStore = defineStore('menus', {
  state: () => {
    return {
      siderType: true,
    }
  },
  actions: {
    changeSiderType() {
      this.siderType = !this.siderType
    },
  },
})

export default useMenuStore
