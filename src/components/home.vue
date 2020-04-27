<template>
  <!--基础组件-->
  <div>
    <!--头部-->
    <div>
      <headComponent></headComponent>
    </div>
    <div>
    <!--中间-->
    <router-view/>
    </div>
    <div>
    <!--脚部-->
    <footComponent></footComponent>
    </div>
  </div>
</template>
<script>
import headComponent from './base/header.vue'
import footComponent from './base/footer.vue'
export default {
  
  components:{
    headComponent,
    footComponent
    },
  methods:{}
}
</script>
<style lang="less" scoped>

</style>