<template>
  <el-dialog :model-value="dialogVisible" :title="dialogTitle" width="50%" :before-close="handleClose">
    <el-form ref="ruleFormRef" :model="formRole" label-width="150px" :rules="rules">
      <el-form-item :label="i18n.t('roles.roleName')" prop="roleName">
        <el-input v-model="formRole.roleName" />
      </el-form-item>
      <el-form-item :label="i18n.t('roles.roleDesc')" prop="roleDesc">
        <el-input v-model="formRole.roleDesc" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">{{ $t(`dialog.deleteCancel`) }}</el-button>
        <el-button type="primary" @click="handleConfirm">{{ $t(`dialog.deleteConfirm`) }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { addRole, editorRole } from '@/api/roles'
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
const dialogVisible = ref(false)
const ruleFormRef = ref(null)
const formRole = ref({
  roleName: '',
  roleDesc: '',
})
const prop = defineProps({
  dialogTitle: {
    type: String,
    require: true,
    default: '',
  },
  dialogTableValue: {
    type: Object,
    default: () => {},
  },
})
const emit = defineEmits(['update:modelValue', 'initRolesList'])
const handleConfirm = () => {
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      prop.dialogTitle === '添加用户' || prop.dialogTitle === 'addrole'
        ? await addRole(formRole.value)
        : await editorRole(formRole.value)
      emit('initRolesList')
      handleClose()
      $message.success('操作成功')
    } else {
      $message.error('请输入角色名称')
    }
  })
}
const handleClose = () => {
  emit('update:modelValue')
}

watch(
  () => prop.dialogTableValue,
  () => {
    formRole.value = prop.dialogTableValue
  },
  { deep: true, immediate: true }
)
const rules = ref({
  roleName: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
})
</script>
<style lang="scss" scoped></style>
