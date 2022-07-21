import { defineStore } from 'pinia'

const useMenuStore = defineStore('menus', {
  state: () => {
    return {
      siderType: Boolean(localStorage.getItem('siderType')) || true,
      lang: localStorage.getItem('lang') || 'zh', //中英文切换
    }
  },
  getters: {},
  actions: {
    changeSiderType() {
      this.siderType = !this.siderType
      localStorage.setItem('siderType', this.siderType)
    },
    changeLang(val) {
      this.lang = val
    },
  },
})

export default useMenuStore
