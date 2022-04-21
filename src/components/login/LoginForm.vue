<template>
  <div class="login-form">
    <el-form :model="form">
      <el-form-item>
        <el-input
          class="w-50 m-2"
          size="large"
          v-model="form.username"
          placeholder="用户名"
        >
          <template #prepend>
            <el-button :icon="User" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          class="w-50 m-2"
          size="large"
          v-model="form.password"
          type="password"
          placeholder="密码"
        >
          <template #prepend>
            <el-button :icon="Lock" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-col :span="10">
          <el-button
            type="primary"
            size="large"
            auto-insert-space
            style="width: 100%"
            @click="onSubmit"
            :loading="form.loading"
            >登录</el-button
          >
        </el-col>
        <el-col :span="4"></el-col>
        <el-col :span="10">
          <el-button
            size="large"
            auto-insert-space
            style="width: 100%"
            @click="onCancel"
            >清空</el-button
          >
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { User, Lock } from "@element-plus/icons-vue";
import { reactive } from "vue";
const form = reactive({
  username: "",
  password: "",
  loading: false,
});
const onSubmit = () => {
  console.log("submit!");
  form.loading = true;
  setTimeout(() => {
    form.loading = false;
  }, 1000);
};
const onCancel = () => {
  form.username = "";
  form.password = "";
};
</script>

<style lang="less" scoped>
.login-form {
  display: flex;
  margin-top: 20px;

  .button-box {
    display: flex;
    justify-content: space-between;
  }
}
</style>
