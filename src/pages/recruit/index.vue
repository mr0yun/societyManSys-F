<template>
  <div class="page-wrapper">
    <el-row>
      <el-col :span="20">
        <el-row v-for="(e, i) in recruitmentInfo" :key="i">
          <RecruitCard :item="e" />
        </el-row>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import RecruitCard from "@/components/recruit/RecruitCard.vue";
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

const store = useStore(key)
const recruitmentInfo = computed(() => {
  return store.state.recruitmentInfo;
})

</script>

<style lang="less" scoped></style>
