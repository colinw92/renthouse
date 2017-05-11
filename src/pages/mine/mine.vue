<template>
  <div>
    <!--<m-header title="我的" :bg="true">-->
    <!--</m-header>-->
    <div class="box">
      <div class="mine-top">
        <div class="imgBox">
          <img :src="mUserPhoto" alt="userPhoto" v-if="!user.username">
          <img :src="mUserLogin" alt="userLogin" v-if="user.username">
        </div>
      </div>
    </div>
    <div class="other">
      <router-link to='/login' class="link" v-if="!user.username">
        <div class="loginBox" style="">
          登录/注册
          <div id="container">
            <ul class="cube">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </router-link>
      <router-link to='/person' v-if="user.username">
        <span v-on:click.prevent="exit">退出</span>
      </router-link>
    </div>
  </div>
</template>
<script type=text/ecmascript-6>
  import mHeader from '../../components/header.vue'
  import mUserPhoto from '../../assets/images/userPhoto.png'
  import mUserLogin from '../../assets/images/userLogin.png'
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'
  import { USER_SIGNOUT } from '../../store/user'
  export default {
    computed:mapState({
      user: state => state.user
    }),
    data (){
      return {
        mUserPhoto,
        mUserLogin
      }
    },
    props:{
      msg:{
        type:String,
        default:"我的paipia"
      }
    },
    methods:{
      ...mapActions(['USER_SIGNOUT']),
      exit() {
        this.USER_SIGNOUT();
        this.$router.replace({path:'/login'});
      }
    },
    name:'mine',
    components:{
      mHeader
    }
  }
</script>
<style lang="less" scoped>
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
  .other{
    width: 100%;
  }
  .link{
    text-decoration: none;
    position: relative;
    font-size: 22px;
    color: #2c29ff;
    font-family: 黑体;
  }
  .loginBox{
    /*background-color: rgba(0,0,0,.3);*/
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }
  #container{
    margin:0 auto;
    width:500px;
    height:500px;
    position:absolute;
    z-index: -100;
    top: 0px;
    left: 0px;
  }
  .cube{
    width:200px;
    height:200px;
    position:absolute;
    -webkit-perspective:10000;
    -webkit-transform-style:preserve-3d;
    top:150px;
    left:150px;
    -webkit-animation:cube 30s linear 0s infinite alternate;
  }
  .cube li {
    width:200px;
    height:200px;
    color:#fff;
    font-size:36px;
    line-height:200px;
    text-align:center;
    font-weight:700;
    position:absolute;
    -webkit-transform-style:preserve-3d;
    /*background: rgba(249,195,67,.5);*/
    background: rgba(78,78,78,.5);
    border: 1px solid #fff;
    list-style: none;
  }
  .cube li:nth-child(1){
    -webkit-transform-origin: top;
    -webkit-transform:rotateX(90deg);
  }
  .cube li:nth-child(2){
    -webkit-transform-origin: right;
    -webkit-transform:rotateY(90deg);
  }
  .cube li:nth-child(3){
    -webkit-transform-origin: bottom;
    -webkit-transform:rotateX(-90deg);
  }
  .cube li:nth-child(4){
    -webkit-transform-origin: left;
    -webkit-transform:rotateY(-90deg);
  }
  .cube li:nth-child(5){
    -webkit-transform-origin:center;
    -webkit-transform:translateZ(200px)
  }
  .cube li:nth-child(6){
    -webkit-transform-origin:center;
  }
  @-webkit-keyframes cube{
    0%{-webkit-transform:rotateY(10deg) rotateX(10deg) rotateZ(10deg);}
    10%{-webkit-transform:rotateY(180deg)rotateX(10deg) rotateZ(10deg);}
    25%{-webkit-transform:rotateY(360deg)rotateX(10deg) rotateZ(10deg);}
    26%{-webkit-transform:rotateX(10deg) rotateY(10deg) rotateZ(10deg);}
    40%{-webkit-transform:rotateX(180deg) rotateY(0deg) rotateZ(0deg);}
    50%{-webkit-transform:rotateX(360deg) rotateY(0deg) rotateZ(0deg);}
    51%{-webkit-transform:rotateZ(10deg) rotateY(10deg) rotateX(10deg);}
    60%{-webkit-transform:rotateZ(180deg) rotateY(10deg) rotateX(10deg);}
    75%{-webkit-transform:rotateZ(360deg) rotateY(10deg) rotateX(10deg);}
    76%{-webkit-transform:rotateX(360deg) rotateY(360deg) rotateZ(360deg);}
    100%{-webkit-transform:rotateX(10deg) rotateY(10deg) rotateZ(10deg);}
  }
</style>
