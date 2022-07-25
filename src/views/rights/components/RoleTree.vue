<template>
  <el-dialog :model-value="roleVisible" :title="prop.roleTitle" width="50%" :before-close="handleClose">
    <el-tree
      ref="treeRef"
      :data="prop.roleData.children"
      show-checkbox
      default-expand-all
      node-key="id"
      highlight-current
      :props="defaultProps"
    />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">{{ $t(`dialog.deleteCancel`) }}</el-button>
        <el-button type="primary" @click="dialogVisible = false">{{ $t(`dialog.deleteConfirm`) }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'

const prop = defineProps({
  roleTitle: {
    type: String,
    default: '',
    required: true,
  },
  roleData: {
    type: Object,
    default: () => {},
  },
})
const defaultProps = {
  children: 'children',
  label: 'authName',
}
const roleVisible = ref(false)
const emit = defineEmits(['update:modelValue'])
const handleClose = () => {
  emit('update:modelValue', false)
}
</script>
<style lang="scss" scoped></style>
