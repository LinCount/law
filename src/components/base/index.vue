<template>
  <div class="one">
    <div class="main">
      <div class="two">
        <div class="advertise">
          <!--大事件-->
          <div class="area1">
           <!--活动专区-->
              <div class="actives">
                <el-row>
                  <el-col :span="20">
                    <!--图片-->
                    <div class='activeImg'>
                      <banerComponent></banerComponent>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <!--简介-->
                    <div class="simple">
                    简介
                    </div>
                  </el-col>
                </el-row>
              </div>
          </div>
          <!--广告区域-->
          <div class="area1">
           <el-row :gutter="20">
              <el-col :span="14" class="adver1">
                <img src="../../assets/img/adver.jpg">
              </el-col>
              <el-col :span="7"  class="adver2">
                <img src="../../assets/img/adver1.jpg"/>
              </el-col>
            </el-row>
          </div>
          <!--新闻区域-->
          <div class="area1">
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="new" >
                  <div class="imga">
                    <h2>&#12288;实时新闻</h2>
                  </div>
                  <ul v-for="item in newItems" :key="item.nid">
                    <a href=""><li>{{item.title}}<br></li>
                      <li class="liTime">新闻来源：{{item.from}} &#12288; &#12288; &#12288; 时间：{{item.time}}</li>
                    </a>
                  </ul>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="new1">
                  <div class="imga">
                    <h2>&#12288;修改法案</h2>
                  </div>
                  <ul v-for="law in relaws" :key="law.rid">
                    <a href=""><li>{{law.title}}<br></li>
                    <li class="liTime">新闻来源：{{law.from}} &#12288; &#12288; &#12288; 时间：{{law.time}}</li>
                    </a>
                  </ul>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="lawers1">
            <!--律师-->
            <div  class="lawhead">
               &#12288;&#12288;
               <a style="font-size:30px;color:black">精选律师</a>&#12288;口碑为王，民意之选，好评率是我们的核心准则
            </div>
              <el-row :gutter="0" type="flex"  justify="space-around">
                    <el-col :span="6" class="adverThings1" v-for="item in lawfine" :key="item.lid">
                          <div class="grid-content1">
                              <el-card :body-style="{ padding: '0px' }">
                                <img :src="item.imgUrl">
                                <br><a style="font-size:17px;color:green">&#12288;{{item.name}}~律师</a>
                                <br><br>&#12288;{{item.introduce}}
                                <br><br>&#12288;&#12288;&#12288;
                                <center style="font-size:13px;color:green" class="el-icon-phone">{{item.phone}}</center><br>
                              </el-card>
                         </div>
                    </el-col>
                </el-row>
          </div>
          <!--事务所推荐和其他推荐-->
          <div class="area1">
           <el-row :gutter="5" type="flex" class="row-bg" justify="space-around">
              <el-col :span="6" class="adverThings">
               <div class="grid-content"></div>
              </el-col>
              <el-col :span="6" class="adverThings">
                <div class="grid-content"></div>
              </el-col>
              <el-col :span="6" class="adverThings">
                <div class="grid-content"></div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="onfooter">

    </div>
  </div>
</template>
<script>
import banerComponent from '../banner.vue'
export default {
    data() {
        return {
            adverimg1: '',//广告图片1
            adverimg2: '',//广告图片2
            newItems:[
              {nid:'1',title:'强化公共卫生法治保障,我国今明两年拟制定修改17件法律',time:' 2020年04月29日 20:34',from:'澎湃新闻'},
              {nid:'2',title:'“医院更关心利润”，美国医护人员疫情期间被迫减薪休假',time:' 2020年04月30日 14:34',from:'澎湃新闻'},
              {nid:'3',title:'南京银行一季度净利润增长近13%，不良贷款率0.89%',time:' 2020年04月29日 20:34',from:'澎湃新闻'},
              {nid:'4',title:'偶像的坍塌：龙虾教授彼得森的鸡汤法则与人生悲剧',time:' 2020年04月29日 20:34',from:'澎湃新闻'},
              {nid:'5',title:'我读︱《穆斯林发现欧洲》：“发现”还是“相遇',time:' 2020年04月29日 20:34',from:'澎湃新闻'},
              {nid:'6',title:'长三角议事厅｜长三角城市群流动人口如何常住市民化',time:' 2020年04月29日 20:34',from:'澎湃新闻'}
            ],//新闻内容
            lawers:[
              {lid:'1',name:'简小溪',jiali:'',imgUrl:''}
            ],//律师资料
            relaws:[
              {rid:'1',title:'最高人民法院关于减刑、假释案件审理程序的规定',time:'2014-04-23',from:' 最高人民法院'},
              {rid:'2',title:'最高人民法院关于办理减刑、假释案件具体应用法律若干问题的规定',time:'2014-04-23',from:' 最高人民法院'},
              {rid:'3',title:'最高人民法院关于军事法院管辖民事案件若干问题的规定',time:'2014-04-23',from:' 最高人民法院'},
              {rid:'4',title:'最高人民法院关于认可和执行台湾地区仲裁裁决的规定',time:'2014-04-23',from:' 最高人民法院'},
              {rid:'5',title:'最高人民法院关于认可和执行台湾地区法院民事判决的规定',time:'2014-04-23',from:' 最高人民法院'},
              {rid:'6',title:'最高人民法院关于人民法院办理自赔案件程序的规定',time:'2014-04-23',from:' 最高人民法院'}
            ],//法律修订内容
            lawfine:[
              {lid:'1',imgUrl:'http://localhost:8080/static/img/active.bg1.jpg',name:'张博',introduce:'张博律师曾任国内上市公司—青岛啤酒华南事业部法务，现为北京市...',phone:'133 9218 2040'},
              {lid:'2',imgUrl:'http://localhost:8080/static/img/active.bg2.jpg',name:'张博',introduce:'张博律师曾任国内上市公司—青岛啤酒华南事业部法务，现为北京市...',phone:'133 9218 2040'},
              {lid:'3',imgUrl:'http://localhost:8080/static/img/active.bg3.jpg',name:'张博',introduce:'张博律师曾任国内上市公司—青岛啤酒华南事业部法务，现为北京市...',phone:'133 9218 2040'},
              {lid:'4',imgUrl:'http://localhost:8080/static/img/active.bg4.jpg',name:'张博',introduce:'张博律师曾任国内上市公司—青岛啤酒华南事业部法务，现为北京市...',phone:'133 9218 2040'}
            ]
        }
    },
    components:{
      banerComponent
    },
    methods: {
        
    },
}
</script>
<style lang="less" scoped>
.one{
  min-width: 1400px;
  margin-top: -4px;
  background:  #ffffff;
}
.main{
  width: 1100px;
  align-content: center;
  margin-left: 140px;
  background: rgba(252, 252, 252, 0.973);
  margin-top: 0px;
}
.two{
  border-radius: 8px;
  background: white;
  width: 100%;
  align-content: center;
  margin-top: 0px;
}
.onfooter{
  width: 100%;
  height: 30px;
  background:  #ffffff;
}
.area1{
  width: 100%;
  margin-top: 5px;
  background: #ffffff;
  text-align: left;
}
.adver1{
  width: 715px;
  height: 100px;
  background:white;
  margin-top: 10px;
  margin-left: 10px;
}
.adver2{
  width: 370px;
  height: 100px;
  background:white;
  margin-top: 10px;
  margin-left: 0px;
}
.adverThings{
  width: 350px;
  height: 250px;
  background:rgba(251, 251, 251, 0.973);
  margin-top: 10px;
  margin-left: 0px;
}
.area2{
  width: 100%;
  margin-top: 0px;
  background: #ffffff;
  text-align: left;
}
.rechange{
  width: 370px;
  height: 200px;
  background:rgba(251, 251, 251, 0.973);
  margin-top: 10px;
  margin-left: 10px;
}
.row-bg {
    padding: 5px 0;
    background-color: #ffffff;
  }
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.grid-content1{
    width: 100%;
    height: 100%;
}
.new{
  width: 530px;
  height: 370px;
  background:rgba(251, 251, 251, 0.973);
  margin-top: 0px;
  margin-left: 10px;
  .imga{
    height: 30px;
    background-image:url("../../assets/img/newImg.jpg");
  }
}
.new1{
  width: 530px;
  height: 370px;
  background:rgba(251, 251, 251, 0.973);
  margin-top: 0px;
  margin-left: 4px;
  .imga{
    height: 30px;
    background-image:url("../../assets/img/newImg.jpg");
  }
}
.actives{
  width: 1099px;
  height: 400px;
  background:rgba(251, 251, 251, 0.973);
  text-align: left;
}
.activeImg{
  width: 900px;
  height: 400px;
  text-align: left;
}
.simple{
  width: 100px;
  height: 400px;
  text-align: left;

}
.liTime{
  list-style-type:none;
  font-size: 5px;
}
li{
  color:rgb(13, 16, 19);
}
.tableTitle {//切割线
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 1px;
    background-color:cornflowerblue;
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
.lawers1{
     width: 100%;
     height: 400px;
     background: rgba(251, 251, 251, 0.973);
     text-align: left;
     margin-top: 20px;
}
.lawhead{
    width: 100%;
    height: 50px;

}
.adverThings1{
  width: 260px;
  height: 300px;
  margin-top: 10px;
  margin-left: 0px;
  background: rgba(251, 251, 251, 0.973);
}
</style>