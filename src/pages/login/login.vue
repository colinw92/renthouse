<template>
  <div>
    <!--<m-header title="我的" :bg="true">-->
    <!--</m-header>-->
    <div class="box">
      <div class="mine-top">
        <div class="imgBox">
          <img :src="mUserPhoto" alt="userPhoto">
        </div>
      </div>
    </div>
    <form class="login" v-on:submit.prevent="submit">
      <input type="text" placeholder="输入用户名/手机号/邮箱" v-model="form.username"><br>
      <input class="password" type="password" placeholder="输入密码" v-model="form.pwd"><br>
      <button>登录</button>
    </form>
  </div>
</template>
<script type=text/ecmascript-6>
  import { mapActions } from 'vuex'
  import { USER_SIGNIN } from '../../store/user'
  import mHeader from '../../components/header.vue'
  import mUserPhoto from '../../assets/images/userPhoto.png'
  export default {
    data (){
      return {
        mUserPhoto,
        form:{
          username:'',
          pwd:''
        }
      }
    },
    props:{
      msg:{
        type:String,
        default:"我的paipia"
      }
    },
    name:'login',
    components:{
      mHeader
    },
    methods:{
      ...mapActions(['USER_SIGNIN']),
      submit() {
        if(!this.form.username || !this.form.pwd) return
        this.USER_SIGNIN(this.form)
        this.$router.replace({path:'/MineDetails'});
      }
    }
  }
</script>
<style lang="less" scoped>
  body{
    background-color: rgba(78,78,78,.2);
  }
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
  .login{
    margin-top: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    input{
      width: 220px;
      height: 30px;
      line-height: 30px;
      padding-left: 5px;
      outline:none;
      font-size: 18px;
      border: 0px;
      border-bottom: 1px solid #eee;
      position: relative;
    }
    button{
      outline:none;
      background: rgba(249,193,65,0.8);
      color: #fff;
      border: 0px;
      height: 35px;
      width: 220px;
      font-size: 18px;
      margin-top: 10px;
      font-family: 黑体;
    }
  }
</style>
