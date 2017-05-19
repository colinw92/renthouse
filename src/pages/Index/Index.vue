<template>
  <div v-bind:class="{ 'tranformX':isA }">
    <m-header title="首页" :bg="true">
      <span class="position" slot="left" @click="toggle">上海</span>
      <span slot="right" v-if="user.username"><i class="user-icon"></i></span>
      <span slot="right" v-if="!user.username">登录</span>
    </m-header>
    <div class="page-content">
      <m-swiper class="m-swiper" swipeid="swipeid001" :autoplay="2000">
        <div class="swiper-slide" slot="swiper-con"><img src="../../assets/images/banner/banner01.jpg" alt=""></div>
        <div class="swiper-slide" slot="swiper-con"><img src="../../assets/images/banner/banner02.jpg" alt=""></div>
        <div class="swiper-slide" slot="swiper-con"><img src="../../assets/images/banner/banner03.jpg" alt=""></div>
      </m-swiper>
      <router-link to='/Recommend' class="seacrh">
        <i class="search-icon"></i>
      </router-link>
    </div>
    <m-cell title="精选专题" details="等你发现居住的另一种选择">
      <a href="#" class="top-right" slot="cell-top-right">查看更多></a>
    </m-cell>
    <div class="media-content">
      <div class="swiper-container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in choiceness" :key="index">
            <router-link to="/HouseDetail">
              <img :src="getImgPath(item.imgUrl)">
              <div class="housePriceBox">
                <span class="housename">{{item.name}}</span>
                <span class="housePrice">￥{{item.price}}/月</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <m-cell title="我要合租" details="品质合租公寓">
      <a href="#" class="top-right" slot="cell-top-right">查看更多></a>
    </m-cell>
    <div class="media-content">
      <div class="swiper-container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in full" :key="index">
            <router-link to="/HouseDetail">
              <img :src="getImgPath(item.imgUrl)">
              <div class="housePriceBox">
                <span class="housename">{{item.name}}</span>
                <span class="housePrice">￥{{item.price}}/月</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <m-cell title="我要整租" details="成套出租的风格设计公寓">
      <a href="#" class="top-right" slot="cell-top-right">查看更多></a>
    </m-cell>
    <div class="media-content" style="margin-bottom: 60px;">
      <div class="swiper-container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in share" :key="index">
            <router-link to="/HouseDetail">
              <img :src="getImgPath(item.imgUrl)" alt="">
              <div class="housePriceBox">
                <span class="housename">{{item.name}}</span>
                <span class="housePrice">￥{{item.price}}/月</span>
              </div>
            </router-link>
          </div>
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
  import { mapActions , mapMutations } from 'vuex'
  import "../../assets/lib/swiper/js/swiper"
  import { choiceness,full,share } from '../../service/getData'
  import { getImgPath } from "../../config/mixin"
  export default {
    data(){
      return{
        flag:{
          slideFlag:true,
        },
        isA:false,
        choiceness:[],
        full:[],
        share:[]
      }
    },
    computed: {
      ...mapState(['user']),
    },
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
      choiceness().then(res => {
        this.choiceness=res;
      }).then(() => {
        var that = this;
        new Swiper('.swiper-container2', {
          effect: that.effect,
          loop: that.loop,
          direction: that.direction,
          slidesPerView: that.slidesPerView,
          spaceBetween: that.spaceBetween
        });
      });
      full().then(res => {
        this.full=res;
      })
      share().then(res => {
        this.share=res;
      })
    },
    mixins: [getImgPath],
    methods:{
      toggle() {
        this.isA=!this.isA;
      }
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
  @import "../../assets/css/base.css";
  .swiper-container img {
    width: 100%;
  }
  .swiper-container2 img {
    width: 100%;
    height: 180px;
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
    .media-content{
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      .housePriceBox{
        display: flex;
        flex-direction: column;
        color: #000;
        font-size: 16px;
        span{
          text-decoration: none !important;
        }
        .housename{
          margin-top: 8px;
        }
        .housePrice{
          font-weight: 800;
          margin-top: 5px;
        }
      }
    }
  }
</style>
