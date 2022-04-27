<template>
  <el-card class="box-card">
    <div class="card-head">
      <el-row>
        <el-col :span="8">{{item.sname}}</el-col>
        <el-col :span="8">
          <el-icon><Calendar /></el-icon>
          <span style="margin-left: 4px">{{formatDateTime(item.start_time)}} - {{formatDateTime(item.end_time)}}</span>
        </el-col>
        <el-col :span="2" :offset="6">
          <el-button type="primary" round>我要参加</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="card-title">{{item.name}}</div>
    <div class="card-summary">
      {{item.content}}
    </div>
    <el-row class="card-info">
      <el-col :span="4" :offset="16">
        <el-icon><Location /></el-icon>
        <span style="margin-left: 4px">{{item.place}}</span>
      </el-col>
      <el-col :span="4">
        <el-icon><Avatar /></el-icon>
        <span style="margin-left: 4px;">已有{{item.num}}人报名参加</span>
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
import { defineProps } from "vue";
import { formatDateTime } from "@/utils/format";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  }
});
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
