<template>
  <div flex h-full>
    <div m-auto bg-gray-100 w-350 flex flex-col items-center border border-gray-300 p-30 rounded-10>
      <h5 text-24 font-normal color="#6a6a6a">
        {{ title }}
      </h5>
      <el-form :model="loginInfo" w-full >
        <el-form-item w-full mt-30 prop="name">
          <el-input v-model="loginInfo.name" placeholder="Please input name" />
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
import { reactive, ref } from 'vue'
import { login } from '../../api/auth'
import { useRouter } from 'vue-router'
import { lStorage } from '../../utils/cache'
import { setToken } from '../../utils/token'

const router = useRouter()
const title = import.meta.env.VITE_APP_TITLE
const isRemember = ref(false)
const loginInfo = ref({
  name: '',
  password: '',
})

//初始话表单账号密码。如果在本地存储有的话。
initLoginInfo()

const handleLogin = async () => {
  const { name, password } = loginInfo.value
  if (!name || !password) {
    $message.warning('请输入账号或密码')
    return
  }

  //登录
  try {
    const res = await login({ name, password: password.toString() })
    if (res.code === 0) {
      $message.success('登录成功啦')
      setToken(res.data.token)
      if (isRemember.value) {
        lStorage.set('loginInfo', { name, password })
      } else {
        lStorage.remove('loginInfo')
      }
      router.push('/')
    } else {
      $message.warning(res.message)
    }
  } catch (error) {
    $message.error(error.message)
  }
}

function initLoginInfo() {
  const localLoginInfo = lStorage.get('loginInfo')
  if (localLoginInfo) {
    loginInfo.value.name = localLoginInfo.name || ''
    loginInfo.value.password = localLoginInfo.password || ''
  }
}
</script>
<style lang="scss" scoped></style>
