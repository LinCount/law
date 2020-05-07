<template>
<div class="one">
    <div class="main">
        <div class="head">
            <div class="head1">
                <el-page-header @back="goBack" content="详情页面">
                </el-page-header>
            </div>
        </div>
        <div><h1>事务所详情页面</h1></div>
    </div>
</div>
</template>
<script>

export default {
    data() {
        return {
           
        }
    
    },
    methods: {
        goBack() {
        history.back()
        console.log('go back')
      }
    }
}
</script>
<style lang="less" scoped>
.one{
  min-width: 1400px;
  margin-top: 0px;
  background:  #ffffff;
}
.main{
  width: 1100px;
  align-content: center;
  margin-left: 140px;
  margin-right: 140px;
  background:rgba(252, 252, 252, 0.973);
  margin-top: 0px;
}
.head{
    width: 100%;
    height: 35px;
    background:rgb(255, 255, 255);
}
.head1{
        width: 100%;
        height: 25px;
        background: rgb(255, 255, 255);
        position: relative;
        top: 5px;
}
</style>
