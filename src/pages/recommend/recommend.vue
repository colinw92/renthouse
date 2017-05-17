<template>
  <div>
    <m-header title="推荐" :bg="true">
    </m-header>
    <m-select>
    </m-select>
    <m-cell-house houseTitle="[转]合租·真缘小区3居室-南">
    </m-cell-house>
    <m-cell-house houseTitle="[急]合租·真缘小区3居室-南">
    </m-cell-house>
    <m-cell-house houseTitle="[转]合租·真缘小区3居室-南">
    </m-cell-house>
    <m-cell-house houseTitle="[转]合租·真缘小区3居室-南">
    </m-cell-house>
    <m-cell-house houseTitle="[转]合租·真缘小区3居室-南">
    </m-cell-house>
    <m-cell-house houseTitle="[转]合租·真缘小区3居室-南" style="margin-bottom: 50px;">
    </m-cell-house>
  </div>
</template>
<script type=text/ecmascript-6>
  import mHeader from '../../components/header.vue'
  import mSelect from '../../components/select.vue'
  import mCellHouse from '../../components/cell-house.vue'

  export default {
      props:{
        msg:{
          type:String,
          default:"推荐hahhahhahaha"
        }
      },
      name:'recommend',
      components:{
        mHeader,
        mSelect,
        mCellHouse
      }
  }
</script>
<style lang="less" scoped>

</style>
