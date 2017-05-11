<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <slot name="swiper-con"></slot>
    </div>
    <!--分页-->
    <div :class="{'swiper-pagination':pagination}" :style="{'text-align':paginationDirection}"></div>
  </div>
</template>
<script>
import '../assets/lib/swiper/js/swiper'
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
    direction:{
      type:String,
      default:'horizontal'
    },
    autoplay:{
      type:Number,
      default:5000
    },
    loop:{
      type:Boolean,
      default:true
    },
    pagination:{
      type:Boolean,
      default:true
    },
    paginationType:{
      type:String,
      default:'bullets'
    },
    paginationDirection:{
      type:String,
      default:'center'
    }
  },
  mounted () {
    var that=this;
    new Swiper('.'+that.swipeid, {
      //滚动的样式
      effect:that.effect,
      //滚动方向
      direction:that.direction,
      //自动播放
      autoplay:that.autoplay,
      //是否循环
      loop:that.loop,
      //挂载分页器
      pagination:'.swiper-pagination',
      //分页的样式
      paginationType:that.paginationType,
      //分页下标的位置
      paginationDirection:that.paginationDirection,
      //用户滑动后是否停止自动播放，true为停止
      autoplayDisableOnInteraction:false
    })
  }
}
</script>
<style lang="less" scoped>
@import '../assets/lib/swiper/css/swiper.css';
  .swiper-container img{
      width: 100%;
  }
</style>
