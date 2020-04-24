<template>
<el-container>
  <!--header部分-->
  <el-header width="200px">
    <el-row>
        <el-col :span="6">
          <div class="img-header">
            <!--网站名图片-->
            <img src="../assets/img/header.png">
          </div>
        </el-col>
        <el-col :span="6"><div class="grid-content "></div></el-col>
        <el-col :span="6"><div class="grid-content"></div></el-col>
        <el-col :span="6">
          <div class="grid-content ">
              <!--登录头像-->
              <div class="header-ico" >
                    <el-avatar :size="50" src="../assets/img/bussiness-man.png"></el-avatar>
              </div>
          </div>
        </el-col>
        
    </el-row>
  </el-header>
  <!--导航部分-->
  <div class="nav">导航栏</div>
  <el-container>
    <!--主体部分-->
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
      <el-aside width="200px">Aside</el-aside>
    </el-container>
    <!--脚部部分-->
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
</template>
<script>
export default {
    data() {
        return {
            value: ture
        }
    },
    methods: {
        
    }
}
</script>
<style lang="less" scoped>
.index{
  border: solid 1px;
  margin-top: 1px;
  width: 100%;
}
 .el-header{
  background-color: #ffffff;
  color: #ffffff;
  text-align: center;
  margin-top: 1px red;
  height: 200px;
}
.el-footer {
  background-color: #e9eef3;
  color: #e9eef3;
  text-align: center;
  
}

.el-aside {
  background-color: #ffffff;
  color: #ffffff;
  text-align: center;
  
}

.el-main {
  background-color: #e9eef3;
  color: #eeeeee;
  text-align: center;
  height: 500px;
}
.nav{
  width: 100%;
  height: 35px;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    min-height: 60px;
  }
  .row-bg {
    padding: 10px 0;
    
  }
  .img-header{
    height: 55px;
  }
  .header-ico{
    width: 60px;
    height: 60px;
    text-align: center;
    margin-top: 5px;
    background-color: #FFFFFF;
  }
</style>
