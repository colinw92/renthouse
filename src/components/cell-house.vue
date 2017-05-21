<template>
  <div class="houseBox">
    <div class="houseBox-left">
      <img :src="housePhoto">
    </div>
    <div class="houseBox-right" v-for="(item,index) in houseArr" :key="index">
      <div v-model="houseTitle" class="house-title">{{item.name}}</div>
      <div class="houseDetail">14.1|05|7层</div>
      <div class="housePrice">￥{{item.price}}元/月</div>
      <div class="houseAassess">
        <ul>
          <li>租房转租</li>
          <li>离地铁近</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type=text/ecmascript-6>
  import housePhoto from '../assets/images/banner/banner01.jpg'
  import { choiceness,full,share } from '../service/getData'
  import { getImgPath } from '../config/env'
  export default{
    data(){
      return{
        houseArr:[],
        housePhoto
      }
    },
    mixin:["getImgPath"],
    props:{
      houseTitle:{
        type:String,
        Default:''
      }
    },
    mounted(){
      choiceness().then(res => {
        this.houseArr=res;
      })
    },
    components: {
      housePhoto
    }
  }
</script>
<style lang="less" scoped>

</style>
