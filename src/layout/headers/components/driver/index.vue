<template>
  <div id="guide" @click.prevent.stop="handleGuide">
    <i-send-one
      cursor-pointer
      theme="two-tone"
      size="22"
      :fill="['#333', '#2F88FF']"
      :stroke-width="3"
      stroke-linejoin="miter"
    />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { steps } from './steps'
import i18n from '@/i18n'
import { watchLang } from '@/i18n/watchlang'
const t = i18n.global.t
const handleGuide = () => {
  driver.defineSteps(steps(t))
  driver.start()
}
var driver
onMounted(() => {
  initDriver()
})

const initDriver = () => {
  driver = new Driver({
    // className: 'scoped-class', // className to wrap driver.js popover
    animate: true, // Whether to animate or not
    opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
    padding: 10, // Distance of element from around the edges
    allowClose: true, // Whether the click on overlay should close or not
    overlayClickNext: false, // Whether the click on overlay should move next
    doneBtnText: t(`driver.doneBtnText`), // Text on the final button
    closeBtnText: t(`driver.closeBtnText`), // Text on the close button for this step
    stageBackground: '#ffffff', // Background color for the staged behind highlighted element
    nextBtnText: t(`driver.nextBtnText`), // Next button text for this step
    prevBtnText: t(`driver.prevBtnText`), // Previous button text for this step
  })
}

watchLang(initDriver)
</script>
<style lang="scss" scoped></style>
