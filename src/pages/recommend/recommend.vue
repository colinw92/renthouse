<template>
  <div>
    <m-header title="推荐" :bg="true">
    </m-header>
    {{msg}}
  </div>
</template>
<script>
  import mHeader from '../../components/header.vue'
  export default {
      props:{
        msg:{
          type:String,
          default:"推荐hahhahhahaha"
        }
      },
      name:'recommend',
      components:{
        mHeader
      }
  }
</script>
<style lang="less">

</style>
