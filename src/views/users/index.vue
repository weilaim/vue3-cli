<template>
  <div>
    <el-card>
      <el-row :gutter="20" mb-10>
        <el-col :span="7">
          <el-input v-model="querForm.query" :placeholder="$t(`table.placeholder`)" clearable></el-input>
        </el-col>
        <el-button type="primary" :icon="Search">{{ $t('table.search') }}</el-button>
        <el-button type="primary">{{ $t('table.adduser') }}</el-button>
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
            <el-switch v-model="row.mg_state" />
          </template>
          <template v-if="item.prop === 'action'">
            <el-button type="primary" size="small">a</el-button>
            <el-button type="warning" size="small">b</el-button>
            <el-button type="danger" size="small">c</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { getUsers } from '@/api/user'
import { options } from './options'
const querForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 2,
})

const tableData = ref([])
const initGetUserList = async () => {
  const res = await getUsers(querForm.value)
  tableData.value = res.data.users
  console.log('res', res)
}

initGetUserList()
</script>

<style lang="scss" scoped></style>
