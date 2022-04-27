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
            disabled
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
            placeholder="旧密码"
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
            placeholder="新密码"
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
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
import { modifyPsd } from "@/api/user";
import { useRouter } from "vue-router";

const store = useStore(key);
const userName = computed(() => store.state.userInfo.user_name);

const router = useRouter();

const form = reactive({
  username: userName.value,
  password: "",
  twicePsd: "",
  loading: false,
});
const onSubmit = () => {
  console.log("submit!");
  form.loading = true;
  if (form.password == form.twicePsd) {
    ElMessage({
      type: "error",
      message: "新密码没有任何修改！",
      showClose: true,
    });
  }
  else if(form.twicePsd.length < 6){
    ElMessage({
      type: "error",
      message: "新密码小于6位！",
      showClose: true,
    });
  }
  else{
    modifyPsd(form.username, form.password, form.twicePsd).then((res: any) => {
      if(res.code){
        onCancel();
        router.push("/userinfo/index");
      }
    })
  }
  form.loading = false;
};
const onCancel = () => {
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
