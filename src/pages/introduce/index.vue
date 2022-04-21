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
          <el-row v-for="i in 6" :key="i">
            <SocietyBox :odd="i % 2 == 0" />
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
                  title="关于本周末暂停服务的公告"
                  :name="i"
                  v-for="i in 6"
                  :key="i"
                >
                  <div>本周六10：00-22：00暂停服务，升级服务器，敬请理解。</div>
                  <el-row>
                    <el-col :span="4" :offset="10" class="news-text"
                      >管理员</el-col
                    >
                    <el-col :span="8" :offset="2" class="news-text"
                      >2022-04-20 21:34</el-col
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
import { ref } from "vue";
import SocietyBox from "@/components/introduce/SocietyBox.vue";
const activeName = ref("1");
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
