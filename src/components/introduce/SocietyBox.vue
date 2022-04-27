<template>
  <div class="society-box">
    <div v-if="odd">
        <el-col :span="18">
          <div class="society-introduction">
            {{item.introduction}}
          </div>
        </el-col>

        <el-col :span="6" :offset="2">
          <div class="society-title">
            <div class="society-name">{{item.name}}</div>
            <div class="devider"></div>
            <span class="society-type">{{item.classification}}</span>
          </div>
        </el-col>
    </div>
    <div v-else>
      <el-col :span="6">
        <div class="society-title">
          <div class="society-name">{{item.name}}</div>
          <div class="devider"></div>
          <span class="society-type">{{item.classification}}</span>
        </div>
      </el-col>
      <el-col :span="18" :offset="2">
        <div class="society-introduction">
          {{item.introduction}}
        </div>
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  odd: boolean;
  item: any;
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
