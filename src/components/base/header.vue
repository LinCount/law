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
          <el-col :span="4"><div class=""> &#12288; &#12288; &#12288; &#12288;&#12288; &#12288;</div></el-col>
          <template v-for="item in menuItems">
            <el-col :span="2" :index="item.dex" :key="item.url">
              <div class="nav-col">
                <router-link :to="item.url">{{item.name}}</router-link>
              </div>
            </el-col>
          </template>
          <el-col :span="10">
            <div class="">
               <!--搜索框-->
                <el-input placeholder="请输入内容" v-model="findstr" class="findstr">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
          </el-col>
        </el-row>
     </div>
       <!--切割线-->
      <div class="tableTitle"><span class="midText"></span></div>
    </div>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            select : '',
            findstr: '',
            menuItems:[
              {name:'首页',url:'/index',dex:'1'},
              {name:'法律新闻',url:'/new',dex:'2'},
              {name:'案例分析',url:'/3',dex:'3'},
              {name:'法律咨询',url:'/4',dex:'4'},
              {name:'交流学习',url:'/5',dex:'5'},
              
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
.el-input{
    max-width: 300px;
    min-width: 100px;
}
.el-button{
    max-width: 50px;
    min-width: 30px;
    background: #e9eef3;
    text-align: center;
}
.router-link-active {     //点击时去掉下划线
  text-decoration: none;
}

a {
  text-decoration: none; //去掉原有链接文字下划线  字体颜色
  color:steelblue;
}
.tableTitle {//切割线
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 16px;
    color: rgba(101, 101, 101, 1);
  }
 .midText {//切割线
    position: absolute;
    left: 50%;
    background-color: #ffffff;
    padding: 0 15px;
    transform: translateX(-50%) translateY(-50%);
  }
</style>