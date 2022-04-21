<template>
  <div class="page-wrapper">
    <div class="card-wrapper">
      <ActivityCard v-for="i in 3" :key="i" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import ActivityCard from '@/components/activity/ActivityCard.vue'
</script>
<style lang="less" scoped>
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
</style>
