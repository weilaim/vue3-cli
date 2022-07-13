<template>
  <h1>main baranch 主分支</h1>
  <h1>我是dev baranch</h1>
  <h2>Hhahahahah我dev又来改动了哈哈</h2>
  <AppProvider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </AppProvider>
</template>

<script setup>
import AppProvider from '@/components/AppProvider/index.vue'
</script>

<style lang="scss">
#app {
  height: 100%;
  .n-config-provider {
    height: inherit;
  }
}
</style>
