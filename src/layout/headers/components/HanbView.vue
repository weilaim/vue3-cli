<template>
  <div id="hanbrger" cursor-pointer hover:text-green-700>
    <i-menu-fold v-if="!menuStore.siderType" theme="two-tone" size="28" @click="toggleClick" />
    <i-menu-unfold v-else theme="two-tone" size="30" @click="toggleClick" />
  </div>
</template>

<script setup>
import useMenuStore from '@/store/modules/menu'
const menuStore = useMenuStore()
const toggleClick = () => {
  menuStore.changeSiderType()
}
</script>
<style lang="scss" scoped></style>
