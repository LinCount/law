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
  <el-header>
    <el-container direction='vertical'>
    <!--导航部分-->
      <div class="nav">
           <el-menu class="nav-menu" mode="horizontal">
             <el-menu-item>
               &#12288; &#12288; &#12288; &#12288;&#12288; &#12288;&#12288; &#12288; &#12288; &#12288;&#12288; 
              </el-menu-item>
              <template v-for="item in menuItems">
                <el-menu-item :index="item.dex" :key="item.url"><router-link :to="item.url">{{item.name}}</router-link></el-menu-item>
              </template>
             <el-menu-item> &#12288; &#12288;</el-menu-item>
            <el-menu-item> 
              <div>
                <!--搜索框-->
                <el-input placeholder="请输入内容" v-model="findstr" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </el-menu-item>
          </el-menu>
     </div>
   </el-container>
  </el-header>
  <el-container>
    <!--主体部分-->
    <el-container>
      <el-aside width="100px"></el-aside>
      <el-main>
        <router-view/>
      </el-main>
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
            select : '',
            findstr: '',
            menuItems:[
              {name:'首页',url:'/first',dex:'1'},
              {name:'法律新闻',url:'/new',dex:'2'},
              {name:'案例分析',url:'/',dex:'3'},
              {name:'法律咨询',url:'/',dex:'4'},
              {name:'交流学习',url:'/',dex:'5'},
              
            ]
            
        }
    }
    }
    methods: {
        
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
