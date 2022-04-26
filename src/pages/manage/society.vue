<template>
  <div class="page-wrapper">
    <el-descriptions
      class="info-area"
      title="社团信息"
      :column="2"
      size="large"
      border
    >
      <template #extra>
        <el-button
          type="primary"
          size="default"
          @click="dialogFormVisible = true"
          >修改社团信息</el-button
        >
      </template>
      <el-descriptions-item align="center" width="100px">
        <template #label>
          <div class="cell-item">社团id</div>
        </template>
        {{ societyInfo.id }}
      </el-descriptions-item>
      <el-descriptions-item align="center" width="100px">
        <template #label>
          <div class="cell-item">社团名称</div>
        </template>
        {{ societyInfo.name }}
      </el-descriptions-item>
      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">类别</div>
        </template>
        {{ societyInfo.classification }}
      </el-descriptions-item>
      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">现任社长</div>
        </template>
        {{ societyInfo.president }}
      </el-descriptions-item>
      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">成立者</div>
        </template>
        {{ societyInfo.founder }}
      </el-descriptions-item>
      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">成立时间</div>
        </template>
        {{ societyInfo.founding_date }}
      </el-descriptions-item>
      <el-descriptions-item align="center" :span="2">
        <template #label>
          <div class="cell-item">社团介绍</div>
        </template>
        <div style="text-align: left; padding: 10px 0">
          {{ societyInfo.introduction }}
        </div>
      </el-descriptions-item>
      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">招新权限</div>
        </template>
        {{ societyInfo.recruit_eligible ? "有" : "无" }}
      </el-descriptions-item>
    </el-descriptions>

    <el-dialog v-model="dialogFormVisible" title="修改信息">
      <div class="form-container">
        <el-form
          :model="form"
          label-width="auto"
          :rules="rules"
          ref="ruleFormRef"
        >
          <el-form-item label="现任社长" size="default" prop="president">
            <el-input class="w-50" size="default" v-model="form.president">
            </el-input>
          </el-form-item>
          <el-form-item label="社团介绍" size="default" prop="introduction">
            <el-input
              class="w-50"
              size="default"
              :rows="6"
              type="textarea"
              v-model="form.introduction"
            >
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false" size="default"
            >取消</el-button
          >
          <el-button
            type="primary"
            size="default"
            @click="dialogFormVisible = false && modify()"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { ISociety } from "@/models/Society";

let dialogFormVisible = ref(false);

const societyInfo: ISociety = {
  id: 3,
  name: "武术社",
  u_id: 2,
  president: "朱桢",
  founder: "季亭",
  classification: "文艺爱好",
  founding_date: "2022-04-22",
  introduction:
    "本社团以弘扬民族武术艺术为宗旨，以提高社员的武术技巧，促进校园文化建设为目标。了解武术基本知识，提高社员武术水平。培养学生爱好武术的兴趣，初步感受武术的艺术美。",
  ratify: 0,
  recruit_eligible: 0,
};

const form = reactive({
  president: "",
  introduction: "",
});

const modify = () => {
  console.log("modify");
};

const rules = reactive({
  president: [{ required: true, message: "不能为空！", trigger: "blur" }],
  introduction: [{ required: true, message: "不能为！", trigger: "blur" }],
});
</script>

<style lang="less" scoped>
.page-wrapper {
  width: 70vw;
  margin: 40px auto;

  .form-container {
    width: 100%;
    height: 100%;
    margin-left: 15%;
  }
}
.w-50 {
  width: 25vw;
}
</style>
