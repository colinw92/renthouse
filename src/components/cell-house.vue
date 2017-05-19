<template>
  <div class="houseBox">
    <div class="houseBox-left">
      <img :src="housePhoto">
    </div>
    <div class="houseBox-right">
      <div v-model="houseTitle" class="house-title">{{houseTitle}}</div>
      <div class="houseDetail">14.1|05|7层</div>
      <div class="housePrice">￥2490元/月</div>
      <div class="houseAassess">
        <ul>
          <li>租房转租</li>
          <li>离地铁近</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import housePhoto from '../assets/images/banner/banner01.jpg'
  export default{
    data(){
      return{
        housePhoto
      }
    },
    props:{
      houseTitle:{
        type:String,
        Default:''
      }
    },
    components: {
      housePhoto
    }
  }
</script>
<style lang="less" scoped>
  .houseBox{
    height: 100px;
    padding: 10px;
    display: flex;
    .houseBox-left{
      margin-right:10px;
      img{
        width: 150px;
        height: 100%;
      }
    }
    .houseBox-right{
      display: flex;
      flex-direction: column;
      div{
        padding: 6px 0px;
        font-size: 12px;
      }
      .house-title{
        padding-top: 0px;
        font-size: 14px;
      }
      .houseDetail{
        color: #808080;
      }
      .housePrice{
        color: #ff9a25;
        font-size: 16px;
      }
      .houseAassess{
        float: left;
        color:skyblue;
        padding-bottom:0px;
        padding-top:0px;
        ul{
          list-style: none;
          margin:0px;
          padding:0px;
          li{
            font-size: 12px;
            padding: 3px 5px;
            float: left;
            margin-left: 5px;
            border: 1px solid skyblue;
          }
        }
      }
    }
  }
</style>
