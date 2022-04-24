<template>
  <div class="page-wrapper">
    <el-table :data="filterTableData" stripe style="width: 100%" size="default">
      <el-table-column type="index" />
      <el-table-column label="职位id" prop="id" />
      <el-table-column label="部门" prop="name" />
      <el-table-column label="招募人数" prop="u_id" />
      <el-table-column
        label="要求"
        type="expand"
        width="100"
      >
        <template #default="props">
          <p>{{ props.row.introduction }}</p>
        </template>
      </el-table-column>
      <el-table-column label="发布时间" prop="founding_date" />
      <el-table-column label="截止时间" prop="founding_date" />
      <!-- <el-table-column label="状态" prop="recruit_eligible" >
        <template #default="scope">
          <el-tag
            size="default"
            :type="scope.row.recruit_eligible ? 'success' : 'info'"
            >{{ scope.row.recruit_eligible ? "签到" : "未开始" }}</el-tag
          >
        </template>
      </el-table-column> -->
      <el-table-column fixed="right" width="160">
        <template #header>
          <el-input
            v-model="search"
            size="default"
            placeholder="Type to search"
          />
        </template>
        <template #default="scope">
          <el-button
            round
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            round
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button
      class="mt-4"
      style="width: 100%; margin-top: 20px"
      @click="onAddItem"
      size="large"
      >添加记录</el-button
    >
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { ISociety, Society } from "@/models/Society";

const search = ref("");
const filterTableData = computed(() =>
  societyInfo.filter(
    (data) =>
      !search.value ||
      data.name.includes(search.value) ||
      data.president.includes(search.value) ||
      data.founder.includes(search.value)
  )
);
const handleEdit = (index: number, row: ISociety) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: ISociety) => {
  console.log(index, row);
};

const societyInfo: ISociety[] = [
  {
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
  },
  {
    id: 5,
    name: "舞蹈社",
    u_id: 2,
    president: "林散",
    founder: "李弥",
    classification: "文艺爱好",
    founding_date: "2022-04-22",
    introduction:
      "本社团以弘扬民族武术艺术为宗旨，以提高社员的武术技巧，促进校园文化建设为目标。了解武术基本知识，提高社员武术水平。培养学生爱好武术的兴趣，初步感受武术的艺术美。",
    ratify: 0,
    recruit_eligible: 1,
  },
  {
    id: 6,
    name: "围棋社",
    u_id: 2,
    president: "盛贰",
    founder: "李弥",
    classification: "文艺爱好",
    founding_date: "2022-04-22",
    introduction:
      "本社团以弘扬民族武术艺术为宗旨，以提高社员的武术技巧，促进校园文化建设为目标。了解武术基本知识，提高社员武术水平。培养学生爱好武术的兴趣，初步感受武术的艺术美。",
    ratify: 0,
    recruit_eligible: 0,
  },
  {
    id: 7,
    name: "酒社",
    u_id: 2,
    president: "李享",
    founder: "季亭",
    classification: "文艺爱好",
    founding_date: "2022-04-22",
    introduction:
      "本社团以弘扬民族武术艺术为宗旨，以提高社员的武术技巧，促进校园文化建设为目标。了解武术基本知识，提高社员武术水平。培养学生爱好武术的兴趣，初步感受武术的艺术美。",
    ratify: 0,
    recruit_eligible: 0,
  },
];

const onAddItem = () => {
  // tableData.value.push();
};
</script>

<style lang="less" scoped></style>
