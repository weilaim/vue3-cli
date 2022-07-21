<template>
  <div>
    <el-card>
      <el-row :gutter="20" mb-10>
        <el-col :span="7">
          <el-input v-model="querForm.query" :placeholder="$t('table.placeholder')" clearable></el-input>
        </el-col>
        <el-button type="primary" :icon="Search" @click="initGetUserList">{{ $t('table.search') }}</el-button>
        <el-button type="primary" @click="handleDialogValue()">{{ $t('table.adduser') }}</el-button>
      </el-row>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column
          v-for="(item, index) in options"
          :key="index"
          :prop="item.prop"
          :label="$t(`table.${item.label}`)"
          :width="item.label"
        >
          <template v-if="item.prop === 'mg_state'" #default="{ row }">
            <el-switch v-model="row.mg_state" @change="changeState(row.id, row.mg_state)" />
          </template>
          <template v-else-if="item.prop === 'create_time'" #default="{ row }">
            {{ $filters.filterTime(row.create_time) }}
          </template>
          <template v-else-if="item.prop === 'action'" #default="{ row }">
            <el-button type="primary" size="small" :icon="Edit" @click="handleDialogValue(row)"></el-button>
            <el-button type="warning" size="small" :icon="Setting"></el-button>
            <el-button type="danger" size="small" :icon="Delete" @click="handleDelet(row.id)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="demo-pagination-block" mt-8 flex justify-end>
        <el-pagination
          v-model:currentPage="querForm.pagenum"
          v-model:page-size="querForm.pagesize"
          :page-sizes="[10, 15, 20]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tatal"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
    <DialogView
      v-if="dialogVisible"
      v-model="dialogVisible"
      :dialog-title="dialogTitle"
      :dialog-table-value="dialogTableValue"
      @init-user-list="initGetUserList"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { getUsers, changeUserState, deleteUser } from '@/api/user'
import { options } from './options'
import { useI18n } from 'vue-i18n'
import DialogView from './components/DialogView.vue'
import { isNulld } from '../../utils/filters'
const i18n = useI18n()
const querForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 10,
})
const tatal = ref(0)
const tableData = ref([])
const dialogTableValue = ref({})
// 子组件
const dialogVisible = ref(false)
const dialogTitle = ref('')
const handleDialogValue = (row) => {
  if (isNulld(row)) {
    dialogTitle.value = '添加用户'
    dialogTableValue.value = {}
  } else {
    dialogTitle.value = '编辑用户'
    dialogTableValue.value = JSON.parse(JSON.stringify(row))
  }
  dialogVisible.value = true
}
const initGetUserList = async () => {
  const res = await getUsers(querForm.value)
  tatal.value = res.data.total
  tableData.value = res.data.users
}
const handleSizeChange = (val) => {
  querForm.value.pagenum = 1
  querForm.value.pagesize = val
  initGetUserList()
}
const handleCurrentChange = (val) => {
  querForm.value.pagenum = val
  initGetUserList()
}

const changeState = async (uid, type) => {
  const res = await changeUserState(uid, type)
  $message.success(res.meta.msg)
}

const handleDelet = (id) => {
  ElMessageBox.confirm(i18n.t(`dialog.deleteTitle`), i18n.t(`dialog.deleteWarning`), {
    confirmButtonText: i18n.t(`dialog.deleteConfirm`),
    cancelButtonText: i18n.t(`dialog.deleteCancel`),
    type: 'warning',
  })
    .then(async () => {
      const res = await deleteUser(id)
      initGetUserList()
      ElMessage({
        type: 'success',
        message: res.meta.msg,
      })
    })
    .catch(() => {})
}

initGetUserList()
</script>

<style lang="scss" scoped></style>
