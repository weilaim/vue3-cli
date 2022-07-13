<template>
  <div w-full h-full>
    <el-container h-full>
      <el-aside width="200px" h-full>
        <Menu />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from './Menu/index.vue'
</script>

<style lang="scss" scoped></style>
