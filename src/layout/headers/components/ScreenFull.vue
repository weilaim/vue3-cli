<template>
  <div id="screen">
    <i-off-screen
      v-if="isScreen"
      theme="two-tone"
      size="22"
      :fill="['#333', '#2F88FF']"
      :stroke-width="3"
      stroke-linejoin="miter"
      @click="handleScreenFull"
    />
    <i-full-screen-one
      v-else
      cursor-pointer
      theme="two-tone"
      size="22"
      :fill="['#333', '#2F88FF']"
      :stroke-width="3"
      stroke-linejoin="miter"
      @click="handleScreenFull"
    />
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, reactive, ref } from 'vue'
import screenfull from 'screenfull'
const isScreen = ref(screenfull.isFullscreen)
const handleScreenFull = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
const changeIcon = () => {
  isScreen.value = screenfull.isFullscreen
}

onBeforeMount(() => {
  screenfull.on('change', changeIcon)
})

onMounted(() => {
  screenfull.off('change')
})
</script>
<style lang="scss" scoped></style>
