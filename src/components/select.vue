<template>
  <div class="selectBox">
    <div>合租/整组</div>
    <div>位置</div>
    <div>租金</div>
    <div>筛选</div>
  </div>
</template>
<script>
  export default{
    props:{

    }
  }
</script>
<style lang="less" scoped>
  .selectBox{
    width: 100%;
    height: 50px;
    display: flex;
    font-family: "Helvetica Neue";
    justify-content: center;
    align-items: center;
    border-bottom:1px solid #eee;
    div{
      flex-grow: 1;
      text-align: center;
      padding: 15px 0px;
      border-left: 1px solid #eee;
    }
  }
</style>
