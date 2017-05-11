<template>
  <div id="app">
    <router-view></router-view>
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
      <m-tabbar-item id="Mine" isRouter>
        <img src="./assets/images/mine.png" alt="" slot="icon-normal">
        <img src="./assets/images/mine-active.png" alt="" slot="icon-active">
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>
<script type=text/ecmascript-6>
import mTabbar from './components/tabbar'
import mTabbarItem from './components/tabbar-item'
export default {
  name: 'app',
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
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    overflow-x: hidden;
  }
</style>
