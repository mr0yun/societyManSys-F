<template>
  <div id="about-page">
    <el-card class="box-card">
      <el-table :data="tableData" size="default">
        <el-table-column prop="name" width="150" />
        <el-table-column prop="detail" />
      </el-table>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
const tableData = [
  {
    name: "姓名",
    detail: "朱青云",
  },
  {
    name: "班级",
    detail: "软件工程1814班",
  },
  {
    name: "学号",
    detail: "8002118362",
  },
  {
    name: "系统名称",
    detail: "学院社团管理系统",
  },
  {
    name: "开发工具",
    detail: "VS Code",
  },
];
</script>
<style lang="less" scoped>
#about-page{
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .box-card{
  width: 40%;
}
}

</style>
