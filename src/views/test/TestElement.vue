<template>
  <div>
    <div class="flex">
      <el-button color="#626aef" :dark="isDark">Default</el-button>
      <el-button color="#626aef" :dark="isDark" plain>Plain</el-button>

      <el-button color="#626aef" :dark="isDark" disabled>Disabled</el-button>
      <el-button color="#626aef" :dark="isDark" disabled plain>Disabled Plain</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
</script>
<style lang="scss" scoped></style>
