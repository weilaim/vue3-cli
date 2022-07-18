<template>
  <div m-8 flex justify-between>
    <div w-full flex items-center>
      <HanbView mt-4 />
      <div ml-15>
        <Breadcrumb />
      </div>
    </div>
    <div>
      <AvartarView />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import HanbView from './components/HanbView.vue'
import Breadcrumb from './components/breadcrumb.vue'
import AvartarView from './components/AvartarView.vue'
</script>
<style lang="scss" scoped></style>
