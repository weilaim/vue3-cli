<template>
  <div m-8 flex items-center>
    <HanbView mt-4 />
    <div ml-15>
      <Breadcrumb />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import HanbView from './components/HanbView.vue'
import Breadcrumb from './components/breadcrumb.vue'
</script>
<style lang="scss" scoped></style>
