<template>
  <div class="card-wrapper">
    <div class="card-top">
      <div class="card-title">围棋社 技术部</div>
      <div class="card-time">招<span style="color: #409EFF"> 6 </span>人</div>
      <div class="card-time">2022-04-21 20:37发布</div>
      <el-button type="primary" plain size="default">我要参加</el-button>
    </div>
    <div class="card-bottom">
      <div class="require">策划能力强，平时做事习惯做计划，考虑问题较全面，责任感强。策划能力强，平时做事习惯做计划，考虑问题较全面，责任感强。策划能力强，平时做事习惯做计划，考虑问题较全面，责任感强。策划能力强，平时做事习惯做计划，考虑问题较全面，责任感强。策划能力强，平时做事习惯做计划，考虑问题较全面，责任感强。策划能力强，平时做事习惯做计划，考虑问题较全面，责任感强。策划能力强，平时做事习惯做计划，考虑问题较全面，责任感强。策划能力强，平时做事习惯做计划，考虑问题较全面，责任感强。</div>
      <div class="end-time">2022-04-25 20:37截止</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.card-wrapper{
  width: 900px;;
  // min-height: 150px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  margin-top: 20px;

  .card-top{
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    letter-spacing: 0.2em;


    .card-title{
      height: 30px;
      line-height: 30px;
      margin-left: 30px;
      color: #409EFF;
      font-size: 18px;
    }
    .card-time{
      color: #999999;
      font-size: 14px;
    }
  }
  .card-bottom{
    // height: ;
    padding: 20px 0;
    width: 100%;
    background-color: rgb(250, 250, 250);
    border-radius: 0 0 10px 10px;
    color: #909399;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .require{
      margin: 0 30px;
      line-height: 1.8em;
      font-size: 14px;
    }
    .end-time{
      align-self: flex-end;
      margin-right: 30px;
      font-size: 14px;
      letter-spacing: 0.2em;
      margin-top: 10px;
    }
  }
}

.card-wrapper:hover{
  box-shadow: 0px 0px 8px rgb(230, 230, 230) ;
  transform: translateX(200px);
  transition: all 1s;
}
</style>