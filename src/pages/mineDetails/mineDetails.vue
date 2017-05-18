<template>
  <div style="background: #eee;">
    <div class="box">
      <div class="mine-top">
        <router-link to="/Login" v-if="!user.username">
          <div class="imgBox" v-if="!user.usernam">
            <img :src="mUserPhoto" alt="userPhoto" >
          </div>
        </router-link>
        <router-link to="/mine" v-if="user.username">
          <div class="imgBox" v-if="!user.usernam">
            <img :src="mUserLogin" alt="userLogin">
          </div>
        </router-link>
      </div>
    </div>
    <ul>
      <li style="border-top: 1px solid #eee;"><i></i>我的收藏<s>></s></li>
      <li><i></i>我的信息<s>></s></li>
      <li style="border-top:1px solid #eee;margin-top: 20px;"><i></i>每日精选<s>></s></li>
      <li><i></i>服务中心<s>></s></li>
      <li><i></i>关于我们<s>></s></li>
    </ul>
  </div>
</template>
<script type=text/ecmascript-6>
  import mUserPhoto from '../../assets/images/userPhoto.png'
  import mUserLogin from '../../assets/images/userLogin.png'
  import { mapState } from 'vuex'
  export default{
    computed:mapState({
      user: state => state.user
    }),
    data(){
      return{
        mUserPhoto,
        mUserLogin
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../assets/css/base.css";
  .box{
    width: 100%;
    height: 110px;
    background: url("../../assets/images/transparent_bg.png") no-repeat;
    background-size:100% 110px;
    .mine-top{
      display: flex;
      background-size:100% 110px;
      justify-content: center;
      align-items: center;
      height: 90px;
      padding-top: 20px;
      width: 100%;
      background: url("../../assets/images/transparent_bg.png") no-repeat -200px;
        .imgBox{
           overflow: hidden;
           position: relative;
           width:60px;
           height:60px;
           border-radius:50%;
           background: #bfbfbf;
          img{
            position: absolute;
            width: 50px;
            height: 50px;
            bottom: -5px;
            right: 5px;
          }
      }
    }
  }
  ul{
  /*margin-left:50px;*/
  padding-top:20px;
    li{
      color: #000;
      font-family: 黑体;
      font-size: 20px;
      height: 50px;
      line-height: 50px;
      width: 90%;
      float: right;
      text-align: left;
      border-bottom: 1px solid #eee;
      position: relative;
      background: #fff;
    }
    i{
      position: absolute;
    }
    s{
      float: right;
      margin-right: 20px;
    }
  }
</style>
