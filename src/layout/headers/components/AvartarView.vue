<template>
  <el-dropdown cursor-pointer>
    <span class="el-dropdown-link">
      <el-avatar shop="square" :size="40" :src="squareUrl"></el-avatar>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '../../../store/modules/user'
const userStore = useUserStore()
const squareUrl = ref('https://arf-to.cn/upload/2022/07/dog.jpg')

const logout = () => {
  userStore.logout()
}
</script>
<style lang="scss" scoped></style>
