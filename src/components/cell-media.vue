<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <slot name="swiper-slide"></slot>
    </div>
  </div>
</template>
<script>
  import "../assets/lib/swiper/js/swiper"
  export default{
    props:{
      swipeid:{
        type:String,
        default:''
      },
      effect:{
        type:String,
        default:'slide'
      },
      slidesPerView:{
        type:Number,
        default:1.3
      },
      spaceBetween:{
        type:Number,
        default:10
      },
      loop:{
        type:Boolean,
        default:false
      },
      direction:{
        type:String,
        default:'horizontal'
      }
    },
    mounted(){
      var that=this;
      new Swiper('.'+that.swipeid,{
        effect:that.effect,
        loop:that.loop,
        direction:that.direction,
        slidesPerView:that.slidesPerView,
        spaceBetween:that.spaceBetween
      })
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/lib/swiper/css/swiper.css";
  .swiper-container img{
    width: 100%;
    height: 200px;
    /*width: 330px;*/
  }
</style>
