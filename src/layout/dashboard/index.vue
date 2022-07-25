<template>
  <el-card>
    <div flex justify-between>
      <div flex items-center width="300">
        <el-image style="width: 60px; height: 60px" src="https://arf-to.cn/upload/2022/07/dog.jpg" lazy />
        <div>
          <h1 ml-20>Hi~{{ user.userInfo.username }}</h1>
          <span text-gray-4 text-10 ml-20>今天又是元气满满的一天好鸭好鸭</span>
        </div>
      </div>
      <div flex>
        <n-statistic label="待办" :value="4">
          <template #suffix> / 10 </template>
        </n-statistic>
        <n-statistic label="Stars" w-100 ml-80>
          <a href="https://github.com/zclzone/vue-naive-admin">
            <img allt="stars" src="https://badgen.net/github/stars/zclzone/vue-naive-admin" />
          </a>
        </n-statistic>
        <n-statistic label="Forks" w-100 ml-80>
          <a href="https://github.com/zclzone/vue-naive-admin">
            <img allt="forks" src="https://badgen.net/github/forks/zclzone/vue-naive-admin" />
          </a>
        </n-statistic>
      </div>
    </div>
  </el-card>

  <el-card mt-10>
    <template #header>
      <div class="card-header">
        <span>项目</span>
      </div>
    </template>
    <div flex>
      <div id="main" style="height: 500px" w-full p-10></div>
      <div id="width" style="height: 500px" ml-50 w-full></div>
    </div>
  </el-card>
</template>

<script setup>
import { useUserStore } from '../../store/modules/user'
import * as echarts from 'echarts'
import { nextTick } from 'vue'
import { echart1, echart2 } from './option'

const user = useUserStore()
nextTick(() => {
  const myEcharts = echarts.init(document.getElementById('main'))
  myEcharts.setOption(echart1)
  const Echart = echarts.init(document.getElementById('width'))
  Echart.setOption(echart2)
})
</script>
<style lang="scss" scoped></style>
