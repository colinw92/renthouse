<template>
  <header class="m-header" :class="{'is-bg':bg,'is-fixed':fixed}">
    <div class="m-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="m-header-title" v-text="title"></h1>
    <div class="m-header-button is-right">
      <router-link to="/Login" v-if="!user.username">
        <slot name="right"></slot>
      </router-link>
      <router-link to="/MineDetails" v-if="user.username">
        <slot name="right"></slot>
      </router-link>
    </div>
  </header>
</template>
<script type=text/ecmascript-6>
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'
  export default{
      computed:mapState({
        user:state => state.user
      }),
      props:{
          title:{
              type:String,
              default:''
          },
          bg:{
              type:Boolean,
              default:false
          },
          fixed:{
              type:Boolean,
              default:false
          }
      }
  }
</script>
<style lang="less">
  @import "../assets/less/var.less";
  .m-header{
    display: flex;
    text-align: center;
    height: 44px;
    padding: 0 10px;
    background: #fff;
    color: @headerDefaultColor;
    /*border: 1px solid #eee;*/
    a{
      color: @headerDefaultColor;
    }
    .m-header-button{
      height: 44px;
      line-height: 44px;
      width: 70px;
      justify-content: center;
      align-items: stretch;
      a{
        text-decoration: none;
      }
       &.is-left{
        text-align: left;
       }
       &.is-right{
        text-align: right;
       }
       .m-icon-img{
         width: 20px;
         height: 20px;
       }
       .margin-right-10{
         margin-right: 10px;
       }
    }
    .m-header-title{
      flex: 1;
      text-align: center;
      font-size: 16px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    &.is-bg{
       background: @headerBg;
       color: #fff;
       a{color: #fff;}
       .m-header-title{
         color: #fff;
       }
    }
    &.is-fixed{
      position:fixed;
      left:0;
      right: 0;
      top: 0;
      z-index: 9;
    }
  }
</style>
