<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      <i-translate theme="two-tone" size="29" :fill="['#333', '#2F88FF']" :stroke-width="3" stroke-linejoin="miter" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="currenLanguage == 'zh'">中文</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="currenLanguage == 'en'">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import useMenuStore from '../../../store/modules/menu'

const menuStore = useMenuStore()
const i18n = useI18n()
const currenLanguage = computed(() => {
  return i18n.locale.value
})

const handleCommand = (val) => {
  menuStore.changeLang(val)
  i18n.locale.value = val
  localStorage.setItem('lang', val)
}
</script>
<style lang="scss" scoped></style>
