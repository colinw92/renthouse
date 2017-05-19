<template>
  <div id="app">
    <div class="slide" v-if="isIndex" v-on:click="toggle">
      <ul style="">
        <li class="bj">北京</li>
        <li class="sh">上海</li>
        <li class="gz">广州</li>
      </ul>
    </div>
    <router-view :class="{'tranformX':user.isA}"></router-view>
    <m-tabbar v-model="select" v-on:on="change">
      <m-tabbar-item id="Index" isRouter>
        <img src="./assets/images/home.png" alt="" slot="icon-normal">
        <img src="./assets/images/home-active.png" alt="" slot="icon-active">
        首页
      </m-tabbar-item>
      <m-tabbar-item id="Recommend" isRouter>
        <img src="./assets/images/recommend.png" alt="" slot="icon-normal">
        <img src="./assets/images/recommend-active.png" alt="" slot="icon-active">
        推荐
      </m-tabbar-item>
      <m-tabbar-item id="MineDetails" isRouter>
        <img src="./assets/images/mine.png" alt="" slot="icon-normal">
        <img src="./assets/images/mine-active.png" alt="" slot="icon-active">
        我的
      </m-tabbar-item>
      <!--<m-tabbar-item id="Mine" isRouter v-if="user.username">-->
        <!--<img src="./assets/images/mine.png" alt="" slot="icon-normal">-->
        <!--<img src="./assets/images/mine-active.png" alt="" slot="icon-active">-->
        <!--我的-->
      <!--</m-tabbar-item>-->
    </m-tabbar>
  </div>
</template>
<script type=text/ecmascript-6>
import mTabbar from './components/tabbar'
import mTabbarItem from './components/tabbar-item'
import { mapState } from 'vuex'
export default {
  data(){
    return{
      isA:false
    }
  },
  name: 'app',
  computed:{
    ...mapState(['user']),
    isIndex(){
      return (this.$route.matched[0].name=='Index')
    }
  },
  components: {
      mTabbar,
      mTabbarItem
  },
  data() {
      return {
          select:"Index"
      }
  },
  methods:{
    change:()=>{
        console.log(1);
    },
    toggle() {
      this.isA=!this.isA;
    }
  }
}
</script>

<style lang="less" scoped>
  @import "assets/css/base.css";
  #app{
  transition:all 1s;
    .slide{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      z-index: -1000;
      ul{
        position: absolute;
        height: 100%;
        /*top: -20px;*/
        /*left: -40px;*/
        text-align:left;
        z-index:-1000;
        li{
          width: 100px;
          height: 75px;
          /*line-height: 80px;*/
          border: 1px solid #eee;
          font-size: 20px;
          font-family: 黑体;
          color: #fff;
          font-weight:800;
        }
        .bj{
          background: url("./assets/images/city/bj.jpg") no-repeat 0px 0px;
          -webkit-background-size:100px 80px;
          background-size:100px 80px;
        }
        .gz{
          background: url("./assets/images/city/gz.jpeg") no-repeat 0px 0px;
          -webkit-background-size:100px 80px;
          background-size:100px 80px;
        }
        .sh{
          background: url("./assets/images/city/sh.jpg") no-repeat 0px 0px;
          -webkit-background-size:100px 80px;
          background-size:100px 80px;
        }
      }
    }
  }
</style>
