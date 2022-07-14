<template>
  <el-menu
    active-text-color="#ffffff"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    h-full
    router
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu v-for="(item, index) in menusList" :key="item.id" :index="index">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item v-for="(cmenu, cindex) in item.children" :key="cindex" :index="`/` + cmenu.path">{{
        cmenu.authName
      }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { menuList } from '../../api/menu'

const menusList = ref([])
const initMenusList = async () => {
  const res = await menuList()
  menusList.value = res.data
}

initMenusList()
</script>

<style lang="scss" scoped></style>
