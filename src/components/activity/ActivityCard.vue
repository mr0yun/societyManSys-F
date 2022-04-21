<template>
  <el-card class="box-card">
    <div class="card-head">
      <el-row>
        <el-col :span="8">五子棋社</el-col>
        <el-col :span="8">
          <el-icon><Calendar /></el-icon>
          <span style="margin-left: 4px">2022/04/17 - 2022/04/27</span>
        </el-col>
        <el-col :span="2" :offset="6">
          <el-button type="primary" round>了解详情</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="card-title">院内五子棋比赛开始啦</div>
    <div class="card-summary">
      在4月份我们将迎来软院第一场五子棋对抗赛，报名流程简便，奖励丰厚，更有众多同学朋友与你切磋！
    </div>
    <el-row class="card-info">
      <el-col :span="4" :offset="16">
        <el-icon><Location /></el-icon>
        <span style="margin-left: 4px">软件楼301</span>
      </el-col>
      <el-col :span="4">
        <el-icon><Avatar /></el-icon>
        <span style="margin-left: 4px;">已有40人报名参加</span>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
import {
  Calendar,
  Location,
  Avatar,
} from "@element-plus/icons-vue";
</script>

<style lang="less" scoped>
@blue: rgb(64, 158, 255);
.box-card {
  width: 100%;
  margin-top: 30px;

  .card-head {
    border-left: 6px solid lighten(@blue, 10%);
    border-radius: 3px;
    padding: 2px 4px;
    color: @blue;
    font-size: 14px;
  }
  .card-title {
    margin-top: 8px;
    font-size: 18px;
    font-weight: bold;
  }
  .card-summary {
    margin-top: 8px;
    font-size: 14px;
    color: #909399;
  }

  .card-info{
    margin-top: 8px;
    font-size: 14px;
    color: #909399;
  }
}
</style>
