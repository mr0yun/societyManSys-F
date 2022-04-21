<template>
  <div class="page-wrapper">
    <el-row>
      <el-col :span="20">
        <el-row>
          <RecruitCard />
        </el-row>
        <el-row>
          <RecruitCard />
        </el-row>
        <el-row>
          <RecruitCard />
        </el-row>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import RecruitCard from "@/components/recruit/RecruitCard.vue";
</script>

<style lang="less" scoped></style>
