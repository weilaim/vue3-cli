<template>
  <div>
    <el-card>
      <el-row :gutter="20" mb-10>
        <el-col :span="7">
          <el-input v-model="querForm.query" :placeholder="$t(`table.placeholder`)" clearable></el-input>
        </el-col>
        <el-button type="primary" :icon="Search" @click="initGetUserList">{{ $t('table.search') }}</el-button>
        <el-button type="primary" @click="handleDialogValue">{{ $t('table.adduser') }}</el-button>
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
          <template v-else-if="item.prop === 'action'" #default>
            <el-button type="primary" size="small" :icon="Edit"></el-button>
            <el-button type="warning" size="small" :icon="Setting"></el-button>
            <el-button type="danger" size="small" :icon="Delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="demo-pagination-block" mt-8 flex justify-end>
        <el-pagination
          v-model:currentPage="querForm.pagenum"
          v-model:page-size="querForm.pagesize"
          :page-sizes="[10, 15, 20]"
          :small="small"
          :disabled="disabled"
          :background="background"
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
      @init-user-list="initGetUserList"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { getUsers, changeUserState } from '@/api/user'
import { options } from './options'
import { useI18n } from 'vue-i18n'
import DialogView from './components/DialogView.vue'
const i18n = useI18n()
const querForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 10,
})
const tatal = ref(0)
const tableData = ref([])
// 子组件
const dialogVisible = ref(false)
const dialogTitle = ref('')
const handleDialogValue = () => {
  dialogTitle.value = '添加用户'
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

initGetUserList()
</script>

<style lang="scss" scoped></style>
