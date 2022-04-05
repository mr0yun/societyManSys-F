<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">折叠</el-radio-button>
        </el-radio-group>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-menu-item
            v-for="item in presidentMenu"
            :index="item.path"
            :key="item.name + item.path"
          >
            <el-icon><document /></el-icon>
            <template #title>{{ item.name }}</template>
          </el-menu-item>
          <el-sub-menu index="/manage/recruit/index">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>招新管理</span>
            </template>
            <el-menu-item index="/manage/recruit/index">职位管理</el-menu-item>
            <el-menu-item index="/manage/recruit/candidate"
              >候选人管理</el-menu-item
            >
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view name="manage" />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const activeIndex = ref("/manage/society");
const presidentMenu = reactive([
  { name: "社团信息管理", path: "/manage/society" },
  { name: "部门信息管理", path: "/manage/department" },
  { name: "成员信息管理", path: "/manage/member" },
  { name: "社团财务管理", path: "/manage/financial" },
  { name: "社团活动管理", path: "/manage/activity" },
  { name: "社团新闻管理", path: "/manage/news" },
  // { name: "考核评比管理", path: "/manage/" },
]);
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
