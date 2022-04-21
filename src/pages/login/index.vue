<template>
  <div id="login-page">
    <el-tabs type="border-card" class="main-card">
      <el-tab-pane label="登录" class="center-box">
        <LoginForm />
      </el-tab-pane>
      <el-tab-pane label="注册" class="center-box">
        <RegisterForm />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from "@/components/login/LoginForm.vue"
import RegisterForm from "@/components/login/RegisterForm.vue"
import { computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
const store = useStore(key);

const login = computed(() => store.state.user.isLogin);
setTimeout(() => {
  store.commit("user/setIsLogin", true);
}, 2000);

console.log(login.value);
</script>

<style lang="less">
#login-page {
  display: flex;
  width: 100%;
  height: auto;
  // margin-top: 10vh;
  justify-content: center;
  align-items: center;
  padding: 10vh 0;
  .main-card {
    background-color: white;
    z-index: 10;
    width: 30vw;
    height: 70%;

    .el-tabs__item {
      width: 15vw;
      text-align: center;
      padding: 0;
      margin: 0;
    }

    .center-box{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
