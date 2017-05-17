<template>
  <div>
    <m-header title="首页" :bg="true">
      <span class="position" slot="left">上海</span>
      <span slot="right" v-if="user.username"><i class="user-icon"></i></span>
      <span slot="right" v-if="!user.username">登录</span>
    </m-header>
    <div class="page-content">
      <m-swiper class="m-swiper" swipeid="swipeid001" :autoplay="2000">
        <div class="swiper-slide" slot="swiper-con"><img src="../../assets/images/banner/banner01.jpg" alt=""></div>
        <div class="swiper-slide" slot="swiper-con"><img src="../../assets/images/banner/banner02.jpg" alt=""></div>
        <div class="swiper-slide" slot="swiper-con"><img src="../../assets/images/banner/banner03.jpg" alt=""></div>
      </m-swiper>
      <router-link to='/recommend' class="seacrh">
        <i class="search-icon"></i>
      </router-link>
    </div>
    <m-cell title="精选专题" details="等你发现居住的另一种选择">
      <a href="#" class="top-right" slot="cell-top-right">查看更多></a>
    </m-cell>
    <div class="media-content">
      <div class="swiper-container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../assets/images/home/home01.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home02.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home03.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home04.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home05.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home06.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home07.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home08.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home09.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home10.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home11.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home12.jpg" alt=""></div>
        </div>
      </div>
    </div>
    <m-cell title="我要合租" details="品质合租公寓">
      <a href="#" class="top-right" slot="cell-top-right">查看更多></a>
    </m-cell>
    <div class="media-content">
      <div class="swiper-container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../assets/images/home/home12.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home11.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home10.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home09.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home08.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home07.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home06.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home05.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home04.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home03.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home02.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home01.jpg" alt=""></div>
        </div>
      </div>
    </div>
    <m-cell title="我要整租" details="成套出租的风格设计公寓">
      <a href="#" class="top-right" slot="cell-top-right">查看更多></a>
    </m-cell>
    <div class="media-content" style="margin-bottom: 60px;">
      <div class="swiper-container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <router-link to="/houseDetail">
              <img src="../../assets/images/home/home08.jpg" alt="">
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/houseDetail">
              <img src="../../assets/images/home/home02.jpg" alt="">
            </router-link>
          </div>
          <div class="swiper-slide"><img src="../../assets/images/home/home03.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home04.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home05.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home06.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home07.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home08.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home09.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home10.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home11.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/home/home12.jpg" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type=text/ecmascript-6>
  import mHeader from '../../components/header'
  import mSwiper from '../../components/swiper'
  import mCell from '../../components/cell'
  import { mapState } from 'vuex'
  import "../../assets/lib/swiper/js/swiper"
  export default {
    computed: mapState({
      user: state => state.user
    }),
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
    mounted(){
      var that = this;
      new Swiper('.swiper-container2', {
        effect: that.effect,
        loop: that.loop,
        direction: that.direction,
        slidesPerView: that.slidesPerView,
        spaceBetween: that.spaceBetween
      })
    },
    name: 'index',
    components: {
      mHeader,
      mSwiper,
      mCell
    }
  }
</script>
<style lang="less" scoped>
  @import "../../assets/lib/swiper/css/swiper.css";

  .swiper-container img {
    width: 100%;
    /*height: 200px;*/
  }

  .swiper-container2 img {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  html {
    width: 100%;

  .position {
    font-size: 14px;
  }
  .user-icon{
    position: absolute;
    width: 20px;
    height: 20px;
    background: url("../../assets/images/user-icon.png") no-repeat;
    -webkit-background-size:20px;
    background-size:20px;
    top: 15px;
    right: 15px;
  }
  .media-content {
    padding-left: 20px;
    margin-top: 10px;
  }

  .page-content {
    position: relative;

  .seacrh {
    background-color: #2abd70;
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    bottom: -10px;
    right: 30px;
    z-index: 100;

  .search-icon {
    position: absolute;
    width: 30px;
    height: 30px;
    background: url("../../assets/images/search.png") no-repeat;
    -webkit-background-size: 30px;
    background-size: 30px;
    left: 50%;
    top: 50%;
    margin-left: -15px;
    margin-top: -15px;
  }

  }
  }
  }
</style>
