<template>
    <div class="header">
        <!--第一层-->
        <div class="head">
            <el-row class="header-row">
                <el-col :span="6" >
                    <div class="img-header">
                        <!--网站名图片-->
                        <img src="../../assets/img/header.png">
                    </div>
                    </el-col>
                    <el-col :span="6"><div class="grid-content "></div></el-col>
                    <el-col :span="6">
                    <div class="grid-content">
                        <!--登录头像-->
                        <div class="header-ico" >
                                <img src="../../assets/img/header-ico.png">
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
        </div>
     <div class="nav">
       <el-row>
          <el-col :span="4" ><div class=""> &#12288; &#12288; &#12288; </div></el-col>
          <template v-for="item in menuItems">
            <el-col :span="2" :index="item.dex" :key="item.url">
              <div class="nav-col">
                <router-link :to="item.url">{{item.name}}</router-link>
              </div>
            </el-col>
          </template>
          <el-col :span="4">
            <div>
               <router-link to="/login">登录</router-link>
               &#12288; &#12288;
               <router-link to="/register">注册</router-link>
            </div>
          </el-col>
        </el-row>
         <el-divider></el-divider>
     </div>
    </div>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            menuItems:[
              {name:'首页',url:'/index',dex:'index'},
              {name:"律师咨询",url:'/things',dex:'things'},
              {name:'论坛咨询',url:'/withus',dex:'withus'},
              {name:'业务咨询',url:'/consultSream',dex:'consultSream'},
              {name:'查找法律',url:'/findLaw',dex:'learn'},
              {name:'律师加盟',url:'/learn',dex:'learn'}
            ]
        }
    },
    methods: {
        
    },
}
</script>
<style lang="less" scope>
.header{
  min-width: 1000px;
  background-color: #ffffff;
  color: #ffffff;
  text-align: center;
  margin-top: 1px red;
}
.head{
    width:100%;
    background: #ffffff;
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
.grid-content {
  min-height: 60px;
}
.img-header{
  height: 55px;
}
.nav{
  width: 100%;
  height: 50px;
  background: #ffffff;
  text-align: center;
}
.nav-col{
  margin-top: 2px;
}

.router-link-active {     //点击时去掉下划线
  text-decoration: none;
}

a {
  text-decoration: none; //去掉原有链接文字下划线  字体颜色
  color:steelblue;
}

</style>