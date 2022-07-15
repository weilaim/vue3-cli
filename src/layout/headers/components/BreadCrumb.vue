<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      <span v-if="index === breadcrumbList.length - 1" class="no-redirect">{{ item.name }}</span>
      <span v-else class="redirect" @click="handleRedirect(item.path)">{{ item.name }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter
const breadcrumbList = ref([])
const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched
  console.log(route.matched)
}

const handleRedirect = (path) => {
  router.push(path)
}
watch(
  route,
  () => {
    initBreadcrumbList()
  },
  { deep: true, immediate: true }
)
</script>
<style lang="scss" scoped>
.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &hover {
    color: #97a8be;
  }
}
.no-redirect {
  color: #97a8be;
  cursor: text;
}
</style>
