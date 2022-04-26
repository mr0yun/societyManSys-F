<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :router="true"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="item in menuList"
      :index="item.path"
      :key="item.path"
      >{{ item.name }}</el-menu-item
    >
    <el-menu-item index="/manage/index" v-if="userPower == 1">社团管理</el-menu-item>
    <el-menu-item index="/system/index" v-if="userPower == 2">系统管理</el-menu-item>
    <el-menu-item index="/login/index" class="end-sub-menu" v-if="!userLogin">登录</el-menu-item>
    <el-sub-menu index="6" class="end-sub-menu" v-else>
      <template #title>个人中心</template>
      <el-menu-item
        v-for="item in subMenu"
        :index="item.path"
        :key="item.path"
        class="center-menu-item"
        @click="clickSubMenu(item.path)"
        >{{ item.name }}</el-menu-item
      >
    </el-sub-menu>
    
  </el-menu>
  <router-view name="index" />
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

import { removeToken } from "./utils/token";

const store = useStore(key);


const userLogin = computed(() => store.state.userLogin);
const userPower = computed(() => store.state.userInfo.power);

const activeIndex = ref("/activity/index");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
let menuList = reactive([
  { name: "社团活动", path: "/activity/index" },
  { name: "社团介绍", path: "/introduce/index" },
  { name: "社团招新", path: "/recruit/index" },
  { name: "关于", path: "/about/index" },
]);

const subMenu = reactive([
  { name: "我的活动", path: "/activity/mine" },
  { name: "我的招新", path: "/recruit/mine" },
  { name: "个人信息", path: "/userinfo/index" },
  { name: "修改密码", path: "/userinfo/psd" },
  { name: "退出登录", path: "/login/index" },
]);

const clickSubMenu = (path: string) => {
  if(path == "/login/index"){
    removeToken();
    store.commit('setUserInfo', {});
    store.commit('setUserLogin', false);
    console.log("退出登录");
  }
}
</script>

<style scoped lang="less">
.center-menu-item {
  justify-content: center;
}

.end-sub-menu {
  position: absolute;
  right: 0;
}
</style>
