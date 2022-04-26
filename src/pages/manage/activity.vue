<template>
  <div class="page-wrapper">
    <el-table :data="filterTableData" stripe style="width: 100%" size="default">
      <el-table-column type="index" />
      <el-table-column label="活动名称" prop="name" />
      <el-table-column label="社团" prop="founder" />
      <el-table-column label="活动内容" type="expand" width="100">
        <template #default="props">
          <p>{{ props.row.introduction }}</p>
        </template>
      </el-table-column>
      <el-table-column label="开始时间" prop="founding_date" />
      <el-table-column label="结束时间" prop="founding_date" />
      <el-table-column label="状态" prop="recruit_eligible">
        <template #default="scope">
          <el-tag
            size="default"
            :type="scope.row.recruit_eligible ? 'success' : 'info'"
            >{{ scope.row.recruit_eligible ? "签到" : "未开始" }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column fixed="right" width="240">
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
            >开放签到</el-button
          >
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

    <el-dialog v-model="dialogFormEditVisible" title="修改信息">
      <div class="form-container">
        <el-form :model="editForm" label-width="auto">
          <el-form-item label="活动名称" size="default">
            <el-input class="w-50" size="default" v-model="editForm.name">
            </el-input>
          </el-form-item>
          <el-form-item label="活动内容" size="default">
            <el-input
              class="w-50"
              size="default"
              :rows="6"
              type="textarea"
              v-model="editForm.content"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="活动地点" size="default">
            <el-input class="w-50" size="default" v-model="editForm.place">
            </el-input>
          </el-form-item>
          <el-form-item label="活动状态" size="default">
            <el-input class="w-50" size="default" v-model="editForm.state">
            </el-input>
          </el-form-item>
          <el-form-item label="开始时间" size="default">
            <el-input
              class="w-50"
              size="default"
              v-model="editForm.start_time"
              placeholder="YYYY-MM-DD HH:mm:ss"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="结束时间" size="default">
            <el-input
              class="w-50"
              size="default"
              v-model="editForm.end_time"
              placeholder="YYYY-MM-DD HH:mm:ss"
            >
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormEditVisible = false" size="default"
            >取消</el-button
          >
          <el-button type="primary" size="default" @click="modify"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>

    <el-dialog v-model="dialogFormAddVisible" title="添加信息">
      <div class="form-container">
        <el-form :model="editForm" label-width="auto">
          <el-form-item label="活动名称" size="default">
            <el-input class="w-50" size="default" v-model="editForm.name">
            </el-input>
          </el-form-item>
          <el-form-item label="活动内容" size="default">
            <el-input
              class="w-50"
              size="default"
              :rows="6"
              type="textarea"
              v-model="editForm.content"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="活动地点" size="default">
            <el-input class="w-50" size="default" v-model="editForm.place">
            </el-input>
          </el-form-item>
          <el-form-item label="开始时间" size="default">
            <el-input
              class="w-50"
              size="default"
              v-model="editForm.start_time"
              placeholder="YYYY-MM-DD HH:mm:ss"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="结束时间" size="default">
            <el-input
              class="w-50"
              size="default"
              v-model="editForm.end_time"
              placeholder="YYYY-MM-DD HH:mm:ss"
            >
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormAddVisible = false" size="default"
            >取消</el-button
          >
          <el-button type="primary" size="default" @click="add"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { ISociety, Society } from "@/models/Society";
import { ElMessage, ElMessageBox } from 'element-plus'

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
  dialogFormEditVisible.value = true;
  editIndex.value = index;
};
const handleDelete = (index: number, row: ISociety) => {
  console.log(index, row);
  ElMessageBox.confirm(
    '确认删除该条数据?',
    '警告',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      societyInfo.splice(index, 1);
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除',
      })
    })
  
};

// 表单验证
// const validatePass = (rule: any, value: any, callback: any) => {
//   if(value)
// }

const societyInfo: ISociety[] = reactive([
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
]);

// 编辑数据
const dialogFormEditVisible = ref(false);
const editIndex = ref(0);
const editForm = reactive({
  name: "",
  content: "",
  place: "",
  start_time: "",
  end_time: "",
  state: "",
});

const modify = () => {
  dialogFormEditVisible.value = false;
};

// 添加数据
const dialogFormAddVisible = ref(false);
const addForm = reactive({
  name: "",
  content: "",
  place: "",
  start_time: "",
  end_time: "",
  state: "",
});
const add = () => {
  // tableData.value.push();
  dialogFormAddVisible.value = false;
};
const onAddItem = () =>{
  dialogFormAddVisible.value = true;
}
</script>

<style lang="less" scoped>
.w-50 {
  width: 25vw;
}
.form-container {
  width: 100%;
  height: 100%;
  margin-left: 15%;
}
</style>
