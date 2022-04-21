<template>
  <div class="progress-card">
    <el-card class="box-card">
      <div class="card-left-tag">围棋社 技术部</div>
      <div class="card-main">
        <el-steps :active="active" finish-status="success">
          <el-step title="报名" />
          <el-step title="笔试" />
          <el-step title="面试" />
          <el-step title="offer审批" />
          <el-step title="加入社团" />
        </el-steps>
        <div class="card-button">
          <el-button @click="next" size="default" type="primary" plain>Next step</el-button>
        </div>
        
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(0);
const next = () => {
  if (active.value++ > 4) active.value = 0
}
</script>

<style scoped lang="less">
.box-card {
  display: flex;
  flex-wrap: nowrap;
  height: 150px;
  width: 80vw;
  margin-left: 10vw;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  position: relative;

  .card-left-tag {
    position: absolute;
    left: 0;
    top: 20px;
    border-left: 10px solid #409EFF;
    width: auto;
    height: 30px;
    color: #409EFF;
    font-size: 14px;
    padding-left: 10px;
    line-height: 30px;
  }
  .card-main{
    width: 60vw;
    height: 80px;
    margin-top: 30px;
  }
  .card-button{
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
