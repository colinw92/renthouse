<template>
  <div class="collect-box">
    <m-header title="我的收藏" :bg="true">
      <router-link to="/MineDetails" slot="left">
        <i></i>
      </router-link>
    </m-header>
    <div v-if="!house.houseName" style="margin: 20px auto;width: 255px;" class="swing animated">
      <img src="../../assets/images/panda_success.png" alt="" style="margin: 0px auto;">
      <span class="prompt">还没收藏，快去收藏吧</span>
    </div>
    <div class="houseBox" v-if="house.houseName">
      <div class="houseBox-left">
        <img :src="getImgPath(house.img)">
      </div>
      <router-link :to="{path:'/HouseDetail',query:{name:house.houseName,image_path:house.img,price:house.price,excellence:house.excellence}}">
        <div class="houseBox-right">
          <div class="house-title">{{house.houseName}}</div>
          <div class="houseDetail">14.1|05|7层</div>
          <div class="housePrice">￥{{house.price}}元/月</div>
          <div class="houseAassess">
            <ul>
              <li v-for="(item,index) in house.excellence" :key="index">{{item}}</li>
            </ul>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script type=text/ecmascript-6>
  import '../../assets/css/base.css'
  import mHeader from '../../components/header.vue'
  import mSelect from '../../components/select.vue'
  import { choiceness,full,share } from '../../service/getData'
  import { getImgPath } from "../../config/mixin"
  import { USER_COLLECT } from "../../store/user"
  import { mapState } from 'vuex'
  export default {
    data(){
      return{
        houseArr:[]
      }
    },
    computed:{
      ...mapState(['house'])
    },
    props:{
      msg:{
        type:String,
        default:"推荐hahhahhahaha"
      }
    },
    mixins: [getImgPath],
    name:'recommend',
    mounted(){
      choiceness().then(res => {
        this.houseArr=res;
      })
    },
    components:{
      mHeader,
      mSelect
    }
  }
</script>
<style lang="less" scoped>
  @import "../../assets/css/base.css";
  .collect-box{
    position: relative;
    i{
      position: absolute;
      width: 30px;
      height: 30px;
      z-index: 1000;
      background: url("../../assets/images/back.png") no-repeat;
      -webkit-background-size:30px;
      background-size:30px;
      top: 7px;
      left: 10px;
    }
    .prompt{
      display: block;
      margin: 30px auto;
      font-family: 黑体;
      font-size: 25px;
      color: skyblue;
    }
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
  }
</style>
