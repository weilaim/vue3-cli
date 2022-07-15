<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    unique-opened
    h-full
    router
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu v-for="(item, index) in menusList" :key="item.id" :index="index">
      <template #title>
        <el-icon>
          <component :is="iconlist[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        v-for="(cmenu, cindex) in item.children"
        :key="cindex"
        :index="`/` + cmenu.path"
        @click="savePath(cmenu.path)"
      >
        <template #title>
          <el-icon>
            <component :is="icon"></component>
          </el-icon>
          <span>{{ cmenu.authName }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { menuList } from '../../api/menu'

const iconlist = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const icon = ref('menu')
const defaultActive = ref(sessionStorage.getItem('path') || '/users')
const menusList = ref([])
const initMenusList = async () => {
  const res = await menuList()
  menusList.value = res.data
}

const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
initMenusList()
</script>

<style lang="scss" scoped></style>
