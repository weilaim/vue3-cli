<template>
  <div flex h-full>
    <div m-auto bg-gray-100 w-350 flex flex-col items-center border border-gray-300 p-30 rounded-10>
      <h5 text-24 font-normal color="#6a6a6a">
        {{ $t('login.title') }}
      </h5>
      <el-form :model="loginInfo" w-full>
        <el-form-item w-full mt-30 prop="username">
          <el-input v-model="loginInfo.username" placeholder="Please input username" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginInfo.password" type="password" placeholder="Please input password" show-password />
        </el-form-item>
      </el-form>

      <div mt-20 w-full>
        <n-checkbox :checked="isRemember" label="记住我" :on-update:checked="(val) => (isRemember = val)" />
      </div>

      <div mt-20 w-full>
        <el-button w-full h-50 rounded-5 text-16 type="primary" @click="handleLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { lStorage } from '../../utils/cache'
import { setToken } from '../../utils/token'
import { login } from '../../api/auth'

const router = useRouter()
const title = import.meta.env.VITE_APP_TITLE
const isRemember = ref(false)
const loginInfo = ref({
  username: 'admin',
  password: '123456',
})

//初始话表单账号密码。如果在本地存储有的话。
initLoginInfo()

const handleLogin = async () => {
  const { username, password } = loginInfo.value
  if (!username || !password) {
    $message.warning('请输入账号或密码')
    return
  }

  //登录
  try {
    const res = await login({ username, password: password.toString() })
    if (res.code === -1) {
      $message.error(res.message)
    }
    if (res.meta.status === 200) {
      $message.success('登录成功啦')
      setToken(res.data.token)
      localStorage.setItem('uid', res.data.id)
      if (isRemember.value) {
        lStorage.set('loginInfo', { username, password })
      } else {
        lStorage.remove('loginInfo')
      }
      router.push('/')
    } else {
      $message.warning(res.meta.msg || 'info')
    }
  } catch (error) {
    $message.error(error || '未知错误')
  }
}

function initLoginInfo() {
  const localLoginInfo = lStorage.get('loginInfo')
  if (localLoginInfo) {
    loginInfo.value.username = localLoginInfo.username || ''
    loginInfo.value.password = localLoginInfo.password || ''
  }
}
</script>
<style lang="scss" scoped></style>
