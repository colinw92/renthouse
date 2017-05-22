<template>
  <div>
    <m-header title="推荐" :bg="true">
    </m-header>
    <m-select>
    </m-select>
    <div class="houseBox" v-for="(item,index) in houseArr" :key="index">
      <div class="houseBox-left">
        <img :src="getImgPath(item.imgUrl)">
      </div>
      <router-link :to="{path:'/HouseDetail',query:{name:item.name,image_path:item.imgUrl,price:item.price,excellence:item.excellence}}">
        <div class="houseBox-right">
          <div class="house-title">{{item.name.substr(0,14)}}</div>
          <div class="houseDetail">14.1|05|7层</div>
          <div class="housePrice">￥{{item.price}}元/月</div>
          <div class="houseAassess">
            <ul>
              <li v-for="(item2,index) in item.excellence" :key="index">{{item2}}</li>
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
  export default {
    data(){
      return{
        houseArr:[]
      }
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
