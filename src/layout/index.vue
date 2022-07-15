<template>
  <div w-full h-full>
    <el-container h-full w-full>
      <el-aside :width="siderWith" h-full>
        <Menu />
      </el-aside>
      <el-container class="container" w-full>
        <el-header class="imo-header" shadow-inset>
          <Headers />
        </el-header>
        <el-main bg-gray-2>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from './Menu/index.vue'
import Headers from './headers/index.vue'
import useMenuStore from '@/store/modules/menu'
import { computed } from 'vue'
const menuStore = useMenuStore()

const siderWith = computed(() => {
  return menuStore.siderType ? '67' : ''
})
</script>

<style lang="scss" scoped>
.imo-header {
  padding: 0px;
}
.container {
  max-width: 100%;
  &.hidderContainer {
    width: 100%;
  }
}
</style>
