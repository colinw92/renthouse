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
      <router-link to="/Login" v-if="!user.username">
        <li style="border-top: 1px solid #eee;"><i class="collect"></i>我的收藏<s>></s></li>
      </router-link>
      <router-link to="/Collect" v-if="user.username">
        <li style="border-top: 1px solid #eee;"><i class="collect"></i>我的收藏<s>></s></li>
      </router-link>
      <router-link to="/Mine" v-if="user.username">
        <li><i class="message"></i>我的信息<s>></s></li>
      </router-link>
      <router-link to="/Login" v-if="!user.username">
        <li><i class="message"></i>我的信息<s>></s></li>
      </router-link>
      <li style="border-top:1px solid #eee;margin-top: 20px;"><i class="recommd"></i>每日精选<s>></s></li>
      <li><i class="service"></i>服务中心<s>></s></li>
      <li><i class="aboutus"></i>关于我们<s>></s></li>
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
      width: 85%;
      float: right;
      text-align: left;
      border-bottom: 1px solid #eee;
      position: relative;
      background: #fff;
    }
    .collect,.aboutus,.message,.recommd,.service{
      position: absolute;
      width: 20px;
      height: 20px;
    }
    .collect{
      background: url("../../assets/images/collect.png") no-repeat;
      -webkit-background-size:20px;
      background-size:20px;
      top: 15px;
      left: -35px;
    }
    .aboutus{
      background: url("../../assets/images/aboutus.png") no-repeat;
      -webkit-background-size:20px;
      background-size:20px;
      top: 15px;
      left: -35px;
    }
    .message{
      width: 25px;
      height: 25px;
      background: url("../../assets/images/message.png") no-repeat;
      -webkit-background-size:25px;
      background-size:25px;
      top: 15px;
      left: -38px;
    }
    .recommd{
      background: url("../../assets/images/recommend.png") no-repeat;
      -webkit-background-size:20px;
      background-size:20px;
      top: 15px;
      left: -35px;
    }
    .service{
      background: url("../../assets/images/service.png") no-repeat;
      -webkit-background-size:20px;
      background-size:20px;
      top: 15px;
      left: -35px;
    }
    s{
      float: right;
      margin-right: 20px;
    }
  }
</style>
