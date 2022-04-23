<template>
  <div class="page-wrapper">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>修改密码</span>
        </div>
      </template>
      <el-form :model="form">
        <el-form-item>
          <el-input
            class="w-50 m-2"
            size="large"
            v-model="form.username"
            placeholder="用户名"
          >
            <template #prepend>
              <el-button :icon="User" size="large" />
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
              <el-button :icon="Lock" size="large" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            class="w-50 m-2"
            size="large"
            v-model="form.twicePsd"
            type="password"
            placeholder="确认密码"
          >
            <template #prepend>
              <el-button :icon="Lock" size="large" />
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
              >修改</el-button
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
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { User, Lock } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { reactive } from "vue";
const form = reactive({
  username: "",
  password: "",
  twicePsd: "",
  loading: false,
});
const onSubmit = () => {
  console.log("submit!");
  form.loading = true;
  if (form.password !== form.twicePsd) {
    ElMessage({
      type: "error",
      message: "两次密码输入不一致！",
      showClose: true,
    });
  }
  setTimeout(() => {
    form.loading = false;
  }, 1000);
};
const onCancel = () => {
  form.username = "";
  form.password = "";
  form.twicePsd = "";
};
</script>

<style lang="less" scoped>
.page-wrapper {
  display: flex;
  margin-top: 20px;
  width: 90vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-card{
    padding: 0 30px;
  }
}
</style>
