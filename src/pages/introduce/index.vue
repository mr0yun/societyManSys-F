<template>
  <div class="introduce">
    <el-container>
      <el-main>
        <el-card>
          <template #header>
            <div class="card-header">
              <span>社团介绍</span>
            </div>
          </template>
          <el-row v-for="(e, i) in societyInfo" :key="i">
            <SocietyBox :odd="i % 2 == 0" :item="e" />
            <el-divider/>
          </el-row>
        </el-card>
      </el-main>
      <el-aside width="32vw">
        <div class="news-box">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>社团新闻</span>
              </div>
            </template>
            <div>
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item
                  :title="e.theme"
                  :name="i"
                  v-for="(e, i) in newsInfo"
                  :key="i">
                  <template #title>
                    {{e.theme}}
                    <el-tag effect="light" round style="margin-left: 10px">{{e.name}}</el-tag>
                  </template>
                  <div>{{e.content}}</div>
                  <el-row>
                    <el-col :span="4" :offset="10" class="news-text"
                      >{{e.contributor}}</el-col
                    >
                    <el-col :span="8" :offset="2" class="news-text"
                      >{{formatDateTime(e.published_time)}}</el-col
                    >
                  </el-row>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-card>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

import SocietyBox from "@/components/introduce/SocietyBox.vue";
import { formatDateTime } from "@/utils/format";

const store = useStore(key);
const activeName = ref("0");

const societyInfo = computed(()=>{
  return store.state.societyInfo;
})
const newsInfo = computed(() => {
  return store.state.newsInfo;
})


</script>

<style lang="less">
@blue: rgb(64, 158, 255);
.border {
  border: 1px solid black;
}
.introduce {
  background-color: rgb(247, 248, 249);
}
.news-text {
  color: #999999;
  font-size: 12px;
}
</style>
