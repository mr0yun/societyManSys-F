<template>
  <div class="page-wrapper">
    <el-descriptions
      class="info-area"
      title="个人信息"
      :column="2"
      size="large"
      border
    >
      <template #extra>
        <el-button type="primary" size="default" @click="dialogFormVisible = true"
          >修改个人信息</el-button
        >
      </template>
      <el-descriptions-item label-align="center" align="center">
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 6px">
              <user />
            </el-icon>
            用户名
          </div>
        </template>
        {{userInfo.user_name}}
      </el-descriptions-item>
      <el-descriptions-item label-align="center" align="center">
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 6px">
              <user-filled />
            </el-icon>
            真实姓名
          </div>
        </template>
        {{userInfo.real_name}}
      </el-descriptions-item>
      <el-descriptions-item label-align="center" align="center">
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 6px">
              <male />
            </el-icon>
            性别
          </div>
        </template>
        {{userInfo.gender}}
      </el-descriptions-item>
      <el-descriptions-item label-align="center" align="center">
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 6px">
              <management />
            </el-icon>
            专业
          </div>
        </template>
        {{userInfo.major ? userInfo.major : "暂无"}}
      </el-descriptions-item>
      <el-descriptions-item label-align="center" align="center">
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 6px">
              <briefcase />
            </el-icon>
            年级
          </div>
        </template>
        {{userInfo.grade ? userInfo.grade : "暂无"}}
      </el-descriptions-item>
      <el-descriptions-item label-align="center" align="center">
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 6px">
              <school />
            </el-icon>
            班级
          </div>
        </template>
        {{userInfo.class ? userInfo.class : "暂无"}}
      </el-descriptions-item>
      <el-descriptions-item label-align="center" align="center">
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 6px">
              <credit-card />
            </el-icon>
            学号
          </div>
        </template>
        {{userInfo.stu_id}}
      </el-descriptions-item>
      <el-descriptions-item label-align="center" align="center">
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 6px">
              <iphone />
            </el-icon>
            手机号
          </div>
        </template>
        {{userInfo.phone ? userInfo.phone : "暂无"}}
      </el-descriptions-item>
      <el-descriptions-item label-align="center" align="center">
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 6px">
              <position />
            </el-icon>
            邮箱
          </div>
        </template>
        {{userInfo.email ? userInfo.email : "暂无"}}
      </el-descriptions-item>
    </el-descriptions>

    <el-dialog v-model="dialogFormVisible" title="修改信息">
    <div class="form-container">
      <el-form :model="form" label-width="auto" :rules="rules" ref="ruleFormRef">
      <el-form-item label="用户名" size="default" prop="user_name">
        <el-input class="w-50" size="default" v-model="form.user_name" disabled>
        </el-input>
      </el-form-item>
      <el-form-item label="专业" size="default">
        <el-input
          class="w-50"
          size="default"
          v-model="form.major"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="年级" size="default">
        <el-input
          class="w-50"
          size="default"
          v-model="form.grade"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="班级" size="default">
        <el-input class="w-50" size="default" v-model="form.class">
        </el-input>
      </el-form-item>
      <el-form-item label="邮箱" size="default">
        <el-input class="w-50" size="default" v-model="form.email"> </el-input>
      </el-form-item>
      <el-form-item label="手机号" size="default" prop="phone">
        <el-input class="w-50" size="default" v-model="form.phone"> </el-input>
      </el-form-item>
    </el-form>
    </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false"  size="default">取消</el-button>
          <el-button type="primary" size="default" @click="modify"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {
  Iphone,
  Management,
  User,
  UserFilled,
  Male,
  School,
  CreditCard,
  Position,
  Briefcase,
} from "@element-plus/icons-vue";

import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
import { modifyUser } from "@/api/user";

let dialogFormVisible = ref(false);

const store = useStore(key);

const userInfo = computed(() => store.state.userInfo);

const form = reactive({
  ...userInfo.value
})

const modify = () => {
  console.log(form, JSON.stringify(form));
  
  modifyUser(JSON.stringify(form)).then((res: any) => {
    if(res.code){
      // 更新VUEX
      store.commit("setUserInfo", form);
      dialogFormVisible.value = false;
    }
  })
};

const rules = reactive({
  user_name: [{ required: true, message: "用户名不能为空！", trigger: "blur" }],
  phone: [{ min: 11, max: 11, message: "手机号位数不对！", trigger: "blur" }]
});
</script>

<style lang="less" scoped>
.page-wrapper {
  width: 70vw;
  margin: 40px auto;

  .form-container{
    width: 100%;
    height: 100%;
    margin-left: 25%;
  }
}
.w-50{
  width: 20vw;
}
</style>
