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
            v-for="item in adminMenu"
            :index="item.path"
            :key="item.name + item.path"
          >
            <el-icon><document /></el-icon>
            <template #title>{{ item.name }}</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view name="system" />
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

const activeIndex = ref("/system/apply");

const adminMenu = reactive([
  { name: "审批管理", path: "/system/apply" },
  { name: "社团管理", path: "/system/society" },
  { name: "用户管理", path: "/system/user" },
]);
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
