<template>
  <div class="register-form">
    <el-form :model="form" label-width="auto" :rules="rules" ref="ruleFormRef">
      <el-form-item label="用户名" size="default" prop="username">
        <el-input class="w-50" size="default" v-model="form.username">
        </el-input>
      </el-form-item>
      <el-form-item label="密码" size="default" prop="password">
        <el-input
          class="w-50"
          size="default"
          v-model="form.password"
          type="password"
          placeholder="不得低于6位"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="确认密码" size="default" prop="confirm">
        <el-input
          class="w-50"
          size="default"
          v-model="form.confirm"
          type="password"
          placeholder="再次输入密码"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="性别" size="default" prop="sex">
        <el-radio-group v-model="form.sex" size="default">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="真实姓名" size="default" prop="realname">
        <el-input class="w-50" size="default" v-model="form.realname">
        </el-input>
      </el-form-item>
      <el-form-item label="学号" size="default" prop="stuid">
        <el-input class="w-50" size="default" v-model="form.stuid"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-col :span="10">
          <el-button
            type="primary"
            size="default"
            auto-insert-space
            style="width: 100%"
            @click="submitForm(ruleFormRef)"
            :loading="form.loading"
            >注册</el-button
          >
        </el-col>
        <el-col :span="4"></el-col>
        <el-col :span="10">
          <el-button
            size="default"
            auto-insert-space
            style="width: 100%"
            @click="onCancel(ruleFormRef)"
            >清空</el-button
          >
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { ElMessage } from "element-plus";
import { ref, reactive } from "vue";
import { User } from "@/models/User";
import { register } from "@/api/user";

const form = reactive({
  username: "",
  password: "",
  confirm: "",
  realname: "",
  sex: "男",
  stuid: "",
  loading: false,
});
const ruleFormRef = ref();
const rules = reactive({
  username: [{ required: true, message: "用户名不能为空！", trigger: "blur" }],
  password: [
    { required: true, message: "密码不能为空！", trigger: "blur" },
    { min: 6, message: "密码不能少于6个字符！", trigger: "blur" },
  ],
  confirm: [
    { required: true, message: "密码不能为空！", trigger: "blur" },
    { min: 6, message: "密码不能少于6个字符！", trigger: "blur" },
  ],
  realname: [{ required: true, message: "姓名不能为空！", trigger: "blur" }],
  sex: [{ required: true, message: "请选择性别", trigger: "change" }],
  stuid: [
    { required: true, message: "学号不能为空！", trigger: "blur" },
    { min: 10, max: 10, message: "学号为10个字符！", trigger: "blur" },
  ],
});
const submitForm = async (formEl: any) => {
  form.loading = true;
  if (!formEl) return;
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      if (form.password === form.confirm) {
        // 提交表单
        let user = new User(
          form.username,
          form.password,
          form.realname,
          form.sex,
          form.stuid
        );
        // user.power = 2;
        console.log(JSON.stringify(user));
        register(JSON.stringify(user)).then((res: any) => {
          if (res.code) {
            form.username = "";
            form.password = "";
            form.confirm = "";
            form.realname = "";
            form.sex = "男";
            form.stuid = "";
          }
        });
      } else {
        ElMessage({
          type: "error",
          message: "两次密码输入不一致！",
          showClose: true,
        });
      }
      console.log("submit!");
      form.loading = false;
    } else {
      console.log("error submit!", fields);
      form.loading = false;
    }
  });
};

const onCancel = async (formEl: any) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="less" scoped>
.register-form {
  display: flex;
  margin-top: 20px;

  .button-box {
    display: flex;
    justify-content: space-between;
  }
}
</style>
