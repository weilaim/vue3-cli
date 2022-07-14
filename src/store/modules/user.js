import { defineStore } from 'pinia'
import { getUser } from '@/api/user'
import { login } from '@/api/auth'
import { removeToken, setToken } from '@/utils/token'
import { toLogin } from '@/utils/auth'
import { getLStorageUser, removeLStorageUser, setLStorageUser } from '../../utils/user'

export const useUserStore = defineStore('user', {
  state() {
    return {
      userInfo: {},
    }
  },
  getters: {
    userId() {
      return this.userInfo?.id
    },
    name() {
      return this.userInfo?.username
    },
    avatar() {
      return this.userInfo?.avatar
    },
    role() {
      var rule
      if (this.userInfo.rid === 0) {
        rule = ['admin']
      }
      return rule || []
    },
  },
  actions: {
    init() {
      this.userInfo = getLStorageUser() ?? {}
    },
    // async getUserInfo() {
    //   try {
    //     const res = await getUser(this.userInfo.id)
    //     if (res.code === 0) {
    //       // const { id, name, av } = res.data
    //       // this.userInfo = { id, name, avatar, role }
    //       return Promise.resolve(res.data)
    //     } else {
    //       return Promise.reject(res)
    //     }
    //   } catch (error) {
    //     return Promise.reject(error)
    //   }
    // },

    async userLogin(data) {
      try {
        const res = await login(data)
        console.log('login', res)
        if (!res.data) {
          return Promise.reject(res)
        }
        const { token } = res.data
        //设置token
        setToken(token)
        //把用户信息存储localStorage
        setLStorageUser(res.data)
        // console.log('res', res.data)

        this.userInfo = res.data

        return Promise.resolve(res)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async logout() {
      removeToken()
      removeLStorageUser()
      this.userInfo = {}
      toLogin()
    },
    setUserInfo(userInfo = {}) {
      this.userInfo = { ...this.userInfo, ...userInfo }
    },
  },
})
