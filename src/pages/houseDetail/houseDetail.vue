<template>
  <div class="houseDeatailBox">
    <router-link to="/index">
      <i></i>
    </router-link>
    <s v-on:click.prevent="collect" :class="{'unCollect':true,'collected':isCollect}"></s>
    <m-swiper class="m-swiper" swipeid="swipeid001" :autoplay="2000">
      <div class="swiper-slide" slot="swiper-con"><img :src="getImgPath(image_path)" alt=""></div>
      <div class="swiper-slide" slot="swiper-con"><img :src="getImgPath(image_path)" alt=""></div>
      <div class="swiper-slide" slot="swiper-con"><img :src="getImgPath(image_path)" alt=""></div>
    </m-swiper>
    <span class="price">￥{{price}}元/月</span>
    <div>
      {{name}}
    </div>
    <div>
      {{location}}
    </div>
    <div>
      {{traffic}}
    </div>
    <transition name="bounce">
      <div class="heart" v-if="show">
        <img src="../../assets/images/collectHeart.png" alt="">
      </div>
    </transition>
  </div>
</template>
<script type=text/ecmascript-6>
  import { mapState,mapActions,mapMutations } from 'vuex'
  import { USER_COLLECT } from '../../store/house'
  import mSwiper from '../../components/swiper'
  import { choiceness,full,share } from '../../service/getData'
  import { getImgPath } from '../../config/mixin'
  export default{
    data(){
      return{
        show:false,
        name:null,
        image_path:null,
        price:null,
        location:null,
        traffic:null,
        excellence:[],
        collectList:[],
        myCollect:{
          houseName:null,
          price:null,
          img:null,
          excellence:[]
        }
      }
    },
    computed:{
      ...mapState(['house']),
      isCollect(){
//        return false
//        console.log(this.$store.state.houseName);
////        if (this.$store.state.house===this.name){
////          console.log(this.$store.state.house);
////          console.log(12343555);
////        }else {
////          console.log(this.$store.state.user[1].houseName);
////          console.log(224343);
////        }

      }
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
    created(){
      this.name=this.$route.query.name;
      this.image_path=this.$route.query.image_path;
      this.price=this.$route.query.price;
      this.location=this.$route.query.location;
      this.traffic=this.$route.query.traffic;
      this.excellence=this.$route.query.excellence;
    },
    mixins:[getImgPath],
    name:'HouseDetail',
    components:{
      mSwiper
    },
    methods:{
      ...mapActions(['USER_COLLECT']),
      collect(){
        this.show=!this.show;
        this.myCollect.houseName=this.name;
        this.myCollect.price=this.price;
        this.myCollect.img=this.image_path;
        this.myCollect.excellence=this.excellence;
        this.collectList.push(this.myCollect);
        this.USER_COLLECT(this.myCollect);
//        this.USER_COLLECT(this.collectList);
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
    .unCollect{
      background: url("../../assets/images/heart.png") no-repeat;
      -webkit-background-size:30px;
      background-size:30px;
      top: 10px;
      right: 10px;
    }
    .collected{
      background: url("../../assets/images/collectHeart.png") no-repeat;
      -webkit-background-size:30px;
      background-size:30px;
      top: 10px;
      right: 10px;
    }
    .price{
      font-size: 20px;
      font-weight:700;
      color: grey;
    }
    .heart{
      width: 226px;
      height: 226px;
      position: absolute;
      width: 50%;
      margin-left: 113px;
      top: 255px;
      z-index: 1000;
      opacity: 0;
    }
  }
  .bounce-enter-active {
    animation: bounce-in 1.5s;
  }
  @keyframes bounce-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>
