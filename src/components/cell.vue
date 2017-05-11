<template>
  <div class="cell-container">
    <div class="cell-top">
      <span>{{title}}</span>
      <slot name="cell-top-right"></slot>
    </div>
    <div class="cell-bottom">
      <div class="cell-border"></div>
      <span class="details">{{details}}</span>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      title:{
        type:String,
        default:''
      },
      details:{
        type:String,
        default:''
      }
    }
  }
</script>
<style lang="less">
  .cell-container{
    margin-top: 15px;
    height: 50px;
    line-height: 25px;
    background: #fff;
    display: flex;
    flex-direction:column;
    padding-left:20px;
    .cell-top{
      flex: 1;
      span{
        float: left;
        font-size: 18px;
        color:#000;
        font-weight: 700;
      }
      .top-right{
        float: right;
        color: #bebebe;
        text-decoration: none;
        font-size: 14px;
        margin-right: 20px;
      }
    }
    .cell-bottom{
      flex: 1;
      position: relative;
      .cell-border{
        position: absolute;
        height: 15px;
        width: 3px;
        background: #bebebe;
        left: 0px;
        bottom: 5px;
      }
      .details{
        display: inline-block;
        margin-left: 15px;
        font-size: 13px;
        /*font-family: 黑体;*/
        color: #bebebe;
      }
    }
  }
</style>
