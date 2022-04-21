<template>
  <div class="society-box">
    <div v-if="props.odd">
        <el-col :span="18">
          <div class="society-introduction">
            本社团以弘扬民族武术艺术为宗旨，以提高社员的武术技巧，促进校园文化建设为目标。了解武术基本知识，提高社员武术水平。培养学生爱好武术的兴趣，初步感受武术的艺术美
          </div>
        </el-col>

        <el-col :span="6" :offset="2">
          <div class="society-title">
            <div class="society-name">舞蹈社</div>
            <div class="devider"></div>
            <span class="society-type">文艺爱好</span>
          </div>
        </el-col>
    </div>
    <div v-else>
      <el-col :span="6">
        <div class="society-title">
          <div class="society-name">舞蹈社</div>
          <div class="devider"></div>
          <span class="society-type">文艺爱好</span>
        </div>
      </el-col>
      <el-col :span="18" :offset="2">
        <div class="society-introduction">
          本社团以弘扬民族武术艺术为宗旨，以提高社员的武术技巧，促进校园文化建设为目标。了解武术基本知识，提高社员武术水平。培养学生爱好武术的兴趣，初步感受武术的艺术美
        </div>
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  odd: boolean;
}>();
</script>

<style scoped lang="less">
@blue: lighten(rgb(64, 158, 255), 10%);
.society-title {
  margin-bottom: 20px;
  .society-name {
    color: @blue;
    font-weight: bold;
  }
  .society-type {
    font-size: 14px;
    padding: 4px 6px;
    background-color: @blue;
    color: white;
    border-radius: 20px;
  }

  .devider {
    margin: 10px 0;
    width: 100px;
    height: 2px;
    background-color: @blue;
  }
}

.society-introduction {
  font-size: 14px;
  color: #666666;
}
</style>
