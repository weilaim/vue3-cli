import { defineStore } from 'pinia'

const useMenuStore = defineStore('menus', {
  state: () => {
    return {
      siderType: true,
      lang: localStorage.getItem('lang') || 'zh', //中英文切换
    }
  },
  actions: {
    changeSiderType() {
      this.siderType = !this.siderType
    },
    changeLang(val) {
      this.lang = val
    },
  },
})

export default useMenuStore
