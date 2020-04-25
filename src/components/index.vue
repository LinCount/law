<template>
<el-container>
  <!--header部分-->
  <el-header width="200px">
    <el-row class="header-row">
        <el-col :span="6" >
          <div class="img-header">
            <!--网站名图片-->
            <img src="../assets/img/header.png">
          </div>
        </el-col>
        <el-col :span="6"><div class="grid-content "></div></el-col>
        <el-col :span="6">
          <div class="grid-content">
            <!--登录头像-->
              <div class="header-ico" >
                    <img src="../assets/img/header-ico.png">
              </div>
          </div></el-col>
        <el-col :span="6">
          <div class="grid-content ">
              <div class="header-ico-contain">
                昵称：xxxx<br>
                账户：xxxxx
              </div>
          </div>
        </el-col>
    </el-row>
  </el-header>
  <el-container >
  <!--导航部分-->
  <div class="nav">
           <el-menu class="nav-menu" mode="horizontal" @select="handleSelect" >
             <el-menu-item>
               &#12288; &#12288; &#12288; &#12288;&#12288; &#12288;&#12288; &#12288; &#12288; &#12288;&#12288; 
                </el-menu-item>
            <el-submenu index="1">
              <template slot="title">首 &#12288;页</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-submenu index="1-2">
                <template slot="title">选项4</template>
                <el-menu-item index="1-2-1">选项1</el-menu-item>
                <el-menu-item index="1-2-2">选项2</el-menu-item>
                <el-menu-item index="1-2-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3">法律新闻</el-menu-item>
            <el-menu-item index="4">案例分析</el-menu-item>
            <el-menu-item index="5">法律咨询</el-menu-item>
            <el-menu-item index="6">交流学习</el-menu-item>
             <el-menu-item> &#12288; &#12288;</el-menu-item>
            <el-menu-item> 
              <div>
                <!--搜索框-->
                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                  <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="餐厅名" value="1"></el-option>
                  </el-select>
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </el-menu-item>
          </el-menu>
  </div>
</el-container>
  <el-container>
    <!--主体部分-->
    <el-container>
      <el-aside width="100px"></el-aside>
      <el-main>Main</el-main>
      <el-aside width="100px"></el-aside>
    </el-container>
    <!--脚部部分-->
    <el-footer>
      <div class="foot">
        <br>
      制作者：LinCount &#12288; &#12288;&#12288; &#12288;
      联系方式：xxxxx &#12288; &#12288;&#12288; &#12288;
      网站声明：仅供学习所用
      </div>
    </el-footer>
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
  background-color: #ffffff;
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
  height: 50px;
  background: black;
  text-align: center;
}
.nav-menu{
  text-align: center;
}
.header-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .header-col {
    border-radius: 4px;
  }
  }
 
  .header-ico{
    height: 60px;
    text-align: right;
    margin-top: 5px;
    background-color: #FFFFFF;
  }
  
  .header-ico-contain{
    height: 60px;
    text-align: left;
    color:darkgrey;
    margin-top: 15px;
    margin-left: 20px;
    background-color: #FFFFFF;
  }
  .foot{
    color:#888888;
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
    .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #ffffff;
  }
</style>
