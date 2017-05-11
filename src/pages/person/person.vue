<template>
  <div class="personBox">
    {{11111}}
    <span v-on:click.prevent="exit"></span>
  </div>
</template>
<script type=text/ecmascript-6>
  import { mapActions } from 'vuex'
  export default {
    methods:{
      ...mapActions(['USER_SIGNOUT']),
      exit() {
        this.USER_SIGNOUT();
        this.$router.replace({path:'/login'});
      }
    },
    name:'person',
  }
</script>
<style lang="less" scoped>

</style>
