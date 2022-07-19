<template>
  <div m-8 flex justify-between>
    <div w-full flex items-center>
      <HanbView mt-4 />
      <div ml-15>
        <Breadcrumb />
      </div>
    </div>
    <div flex items-center>
      <Driver mr-15 />
      <ScreenFull mr-15 />
      <LangView mr-15 />
      <AvartarView />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import HanbView from './components/HanbView.vue'
import Breadcrumb from './components/breadcrumb.vue'
import AvartarView from './components/AvartarView.vue'
import LangView from './components/LangView.vue'
import ScreenFull from './components/ScreenFull.vue'
import Driver from './components/driver/index.vue'
</script>
<style lang="scss" scoped></style>
