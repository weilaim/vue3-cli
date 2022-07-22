<template>
  <el-card>
    <el-button type="primary" @click="handleRole()">{{ $t(`roles.addRole`) }}</el-button>
    <el-table :data="tableData" mt-16 border style="width: 100%">
      <el-table-column
        v-for="(item, index) in options"
        :key="index"
        :prop="item.prop"
        :label="i18n.t(`roles.${item.label}`)"
        :width="item.width"
      >
        <template v-if="item.label === 'action'" #default="{ row }">
          <el-button type="primary" :icon="Edit" @click="handleRole(row)" />
          <el-button type="info" :icon="Setting" @click="handleSetting(row)" />
          <el-button type="danger" :icon="Delete" @click="handleDeleteRole(row.id)" />
        </template>
      </el-table-column>
    </el-table>
    <DialogView
      v-if="dialogVisible"
      v-model="dialogVisible"
      :dialog-title="dialogTitle"
      :dialog-table-value="dialogTableValue"
      @init-roles-list="initRolesList"
    />
    <RoleTree v-model="roleVisible" :role-data="roleData" :role-title="roleTitle" />
  </el-card>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Edit, Delete, Setting } from '@element-plus/icons-vue'
import { options } from './options'
import { roleList, deleRole } from '@/api/roles'
import { useI18n } from 'vue-i18n'
import DialogView from './components/DialogView.vue'
import { isNulld } from '../../utils/filters'
import RoleTree from './components/RoleTree.vue'
const i18n = useI18n()
const tableData = ref([])
const dialogTitle = ref('')
const roleTitle = ref('')
const dialogTableValue = ref({})
const roleData = ref({})
//dialog
const dialogVisible = ref(false)

// tree
const roleVisible = ref(false)
const handleRole = (data) => {
  if (isNulld(data)) {
    dialogTitle.value = i18n.t('roles.addRole')
    dialogTableValue.value = {}
  } else {
    dialogTitle.value = i18n.t('roles.editorRole')
    dialogTableValue.value = JSON.parse(JSON.stringify(data))
  }
  dialogVisible.value = true
}

//setting
const handleSetting = (data) => {
  roleTitle.value = i18n.t('roles.settingRole')
  roleVisible.value = true
  roleData.value = JSON.parse(JSON.stringify(data))
  console.log('data', data)
}

const handleDeleteRole = (id) => {
  ElMessageBox.confirm(i18n.t(`dialog.deleteTitle`), i18n.t(`dialog.deleteWarning`), {
    confirmButtonText: i18n.t(`dialog.deleteConfirm`),
    cancelButtonText: i18n.t(`dialog.deleteCancel`),
    type: 'warning',
  })
    .then(async () => {
      const res = await deleRole(id)
      initRolesList()
      ElMessage({
        type: 'success',
        message: res.meta.msg,
      })
    })
    .catch(() => {})
}
const initRolesList = async () => {
  const res = await roleList()
  console.log('res', res)

  if (res.meta.status === 200) {
    tableData.value = res.data
  }
}
onMounted(() => {
  initRolesList()
})
</script>
<style lang="scss" scoped></style>
