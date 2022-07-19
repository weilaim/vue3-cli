<template>
  <div>
    <el-card>
      <el-row :gutter="20" mb-10>
        <el-col :span="7">
          <el-input v-model="querForm.query" :placeholder="$t(`table.placeholder`)" clearable></el-input>
        </el-col>
        <el-button type="primary" :icon="Search" @click="initGetUserList">{{ $t('table.search') }}</el-button>
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
          :page-sizes="[2, 5, 15, 20]"
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { getUsers } from '@/api/user'
import { options } from './options'
const querForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 2,
})
const tatal = ref(0)
const tableData = ref([])
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

initGetUserList()
</script>

<style lang="scss" scoped></style>
