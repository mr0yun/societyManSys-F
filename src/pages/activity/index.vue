<template>
  <div id="activity-page">
    <!-- 有图片后再对高度进行调整 -->
    <el-carousel :interval="4000" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="card-wrapper">
      <ActivityCard v-for="i in 3" :key="i" />
    </div>
    <div class="center-box">
      <el-pagination background layout="prev, pager, next, jumper" :total="1000" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import ActivityCard from '@/components/activity/ActivityCard.vue'
</script>
<style lang="less" scoped>
#activity-page {
  height: calc(100vh-60px);
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.card-wrapper {
  width: 80vw;
  height: auto;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  // border: 1px solid black;
  margin: 0 auto;
  flex-direction: column;
}

.center-box{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

</style>
