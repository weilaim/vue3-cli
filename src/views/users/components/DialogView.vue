<template>
  <el-dialog :model-value="dialogVisible" :title="dialogTitle" width="40%" :before-close="handleClose">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="70px">
      <el-form-item v-if="dialogTitle === '添加用户'" label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item v-if="dialogTitle === '添加用户'" label="密码" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="form.mobile" />
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
import { ref, watch } from 'vue'
import { addUser, editorUser } from '@/api/user'
const emit = defineEmits(['update:modelValue', 'initUserList'])
const handleClose = () => {
  emit('update:modelValue', false)
}
const dialogVisible = ref(false)
const handleConfirm = () => {
  formRef.value.validate(async (volid) => {
    if (volid) {
      props.dialogTitle === '添加用户' ? await addUser(form.value) : await editorUser(form.value)
      $message.success('修改成功')
      emit('initUserList')
      handleClose()
    } else {
      console.log('volid')
    }
  })
}

const props = defineProps({
  dialogTitle: {
    type: String,
    default: '',
    required: true,
  },
  dialogTableValue: {
    type: Object,
    default: () => {},
  },
})

const formRef = ref(null)
const form = ref({
  username: '',
  password: '',
  email: '',
  mobile: '',
})

const rules = ref({
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
  email: [
    {
      required: true,
      message: '请输入邮箱',
      trigger: 'blur',
    },

    {
      type: 'email',
      message: '请输入正确邮箱',
      trigger: ['blur', 'change'],
    },
  ],
  mobile: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur',
    },
  ],
})
watch(
  () => props.dialogTableValue,
  () => {
    form.value = props.dialogTableValue
  },
  { deep: true, immediate: true }
)
</script>
<style lang="scss" scoped></style>
