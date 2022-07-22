<template>
  <el-card>
    <el-tree
      ref="treeRef"
      :data="data"
      show-checkbox
      default-expand-all
      node-key="id"
      highlight-current
      :props="defaultProps"
    />
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { rightsList } from '../../api/rights'
const defaultProps = {
  children: 'children',
  label: 'authName',
}
const data = ref([])
const initRightsList = async () => {
  const res = await rightsList('tree')
  data.value = res.data
  console.log('list', res)
}
initRightsList()
</script>
<style lang="scss" scoped></style>
