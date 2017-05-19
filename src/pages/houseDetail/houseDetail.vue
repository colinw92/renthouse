<template>
  <div class="houseDeatailBox">
    <router-link to="/index">
      <i></i>
    </router-link>
    <s v-on:click="collect"></s>
    <m-swiper class="m-swiper" swipeid="swipeid001" :autoplay="2000">
      <div class="swiper-slide" slot="swiper-con"><img src="../../assets/images/banner/banner01.jpg" alt=""></div>
      <div class="swiper-slide" slot="swiper-con"><img src="../../assets/images/banner/banner02.jpg" alt=""></div>
      <div class="swiper-slide" slot="swiper-con"><img src="../../assets/images/banner/banner03.jpg" alt=""></div>
    </m-swiper>
  </div>
</template>
<script type=text/ecmascript-6>
  import mSwiper from '../../components/swiper'
  export default{
    props: {
      msg: {
        type: String,
        default: "首页敬请期待"
      },
      effect: {
        type: String,
        default: 'slide'
      },
      slidesPerView: {
        type: Number,
        default: 1.3
      },
      spaceBetween: {
        type: Number,
        default: 10
      },
      loop: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: 'horizontal'
      }
    },
    name:'HouseDetail',
    components:{
      mSwiper
    },
    methods:{
      collect:()=>{
        console.log("收藏好了");
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../assets/lib/swiper/css/swiper.css';
  .houseDeatailBox{
    position: relative;
    i,s{
      position: absolute;
      width: 30px;
      height: 30px;
      z-index: 1000;
    }
    i{
      background: url("../../assets/images/back.png") no-repeat;
      -webkit-background-size:30px;
      background-size:30px;
      top: 10px;
      left: 10px;
    }
    s{
      background: url("../../assets/images/heart.png") no-repeat;
      -webkit-background-size:30px;
      background-size:30px;
      top: 10px;
      right: 10px;
    }
  }
</style>
