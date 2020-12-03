<template>
<!--z事务所主页-->
<div class="one">
    <div class="main">
        <div class="lawers1">
            <!--律师-->
            <div  class="lawhead">
               &#12288;&#12288;
               <a style="font-size:30px;color:black">智能匹配</a>&#12288;口碑为王，民意之选，好评率是我们的核心准则
            </div>
            <div class="consultText">
                <br/><br/>
                <el-form mode="consultFrom"  ref="consultFrom" label-width="100px">
                    <el-row type="flex" justify="center">
                        <el-col :span="6">
                            <el-form-item label="如何称呼:" required>
                                <el-input v-model="consultMessage.name" placeholder="请输入您的姓名" maxlength="12" style="width:200px"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="手机号码:" required>
                                <el-input v-model="consultMessage.phone" placeholder="已为您保密" maxlength="12" style="width:200px"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="验证码:" required>
                                <el-input v-model="consultMessage.code" placeholder="请输入" maxlength="12" style="width:80px"></el-input>
                                <el-button type="success" round @click="on">获取验证码</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="center">
                        <el-col :span="1">
                        </el-col>
                        <el-col :span="20">
                            <el-form-item label="您的法律问题:" label-width="110px">
                                <el-radio-group v-model="consultMessage.type">
                                    <el-radio label="刑事案件"></el-radio>
                                    <el-radio label="婚姻纠纷" ></el-radio>
                                    <el-radio label="经济债务"></el-radio>
                                    <el-radio label="合同纠纷"></el-radio>
                                    <el-radio label="房产纠纷"></el-radio>
                                    <el-radio label="劳务工伤"></el-radio>
                                    <el-radio label="交通事故"></el-radio>
                                    <el-radio label="其他民事"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="您所在地点">
                                <el-autocomplete
                                v-model="consultMessage.city"
                                :fetch-suggestions="querySearchAsync"
                                placeholder="请输入城市名字"
                                @select="handleSelect"
                                class="autocomplete"
                                ></el-autocomplete>
                            </el-form-item>
                            <el-form-item>
                                &#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
                                &#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
                                &#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
                                <el-button type="success" round @click="onSendMessage">智能匹配律师</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>       
        </div>
        <div class="gdp">
            <div class="rightSide">
                <el-row :gutter="0" type="flex" class="row-bg" justify="space-around">
                    <el-col :span="6" class="adverThings">
                        <div class="grid-content">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                                <el-tooltip :disabled="disabled" content="离婚诉讼、子女抚养权、财产
                                分割、夫妻债务、涉外婚姻......" placement="bottom" effect="light">
                                <router-link to="/exchange">
                                    <img src="../../assets/img/find-img-01.png" class="image"> 
                                </router-link>
                                </el-tooltip>
                            <div class="textFont">
                                婚姻家事
                            </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="6" class="adverThings">
                        <div class="grid-content">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                                <el-tooltip :disabled="disabled" content="合同欺诈、合同违约、
                                合同争议、合同索赔......" placement="bottom" effect="light">
                                    <img src="../../assets/img/find-img-02.png" class="image">
                                </el-tooltip>
                            <div class="textFont">
                                合同纠纷
                            </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="6" class="adverThings" shadow="hover">
                        <div class="grid-content">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                                <el-tooltip :disabled="disabled" content="民间借贷、企业债务、融资
                                租赁、短期借款、欠钱不还......" placement="bottom" effect="light">
                                    <img src="../../assets/img/find-img-03.png" class="image">
                                </el-tooltip>
                            <div class="textFont">
                                债权债责
                            </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="6" class="adverThings">
                        <div class="grid-content">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                                <el-tooltip :disabled="disabled" content="律师会见、取保候审、无罪
                                辩护、罪轻辩护、减刑假释......" placement="bottom" effect="light">
                                    <img src="../../assets/img/find-img-04.png" class="image">
                                </el-tooltip>
                            <div class="textFont">
                                刑事诉讼
                            </div>
                            </el-card>
                            <div>
                                  
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="rightSide">
                <el-row :gutter="0" type="flex" class="row-bg" justify="space-around">
                    <el-col :span="6" class="adverThings">
                        <div class="grid-content">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                                <el-tooltip :disabled="disabled" content="商标侵权、专利侵权、交通
                                    事故、人身损害、侵权诉讼......." placement="bottom" effect="light">
                                    <img src="../../assets/img/find-img-05.png" class="image">
                                </el-tooltip>
                            <div class="textFont">
                                侵权纠纷
                            </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="6" class="adverThings">
                        <div class="grid-content">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                                <el-tooltip :disabled="disabled" content="工伤认定、职业病认定、劳
                                    动能力鉴定、劳动争议、劳务......" placement="bottom" effect="light">
                                    <img src="../../assets/img/find-img-06.png" class="image">
                                </el-tooltip>
                            <div class="textFont">
                                工伤劳务
                            </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="6" class="adverThings">
                        <div class="grid-content">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                                <el-tooltip :disabled="disabled" content="合同事务、劳动人事、知识
                                    产权、股权事务、企业运营......." placement="bottom" effect="light">
                                    <img src="../../assets/img/find-img-07.png" class="image">
                                </el-tooltip>
                            <div class="textFont">
                                法律顾问
                            </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="6" class="adverThings">
                        <div class="grid-content">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <el-tooltip :disabled="disabled" content="拆迁纠纷、房产纠纷、工程
                                建设、职务犯罪、经济诈骗......." placement="bottom" effect="light">
                                    <img src="../../assets/img/find-img-08.png" class="image">
                                </el-tooltip>
                            <div class="textFont">
                                更多业务
                            </div>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="lawers1">
            <!--律师-->
            <div  class="lawhead">
               &#12288;&#12288;
               <a style="font-size:30px;color:black">精选律师</a>&#12288;口碑为王，民意之选，好评率是我们的核心准则
            </div>
            <el-row :gutter="0" type="flex" class="row-bg" justify="space-around">
                            <el-col :span="6" class="adverThings1">
                                <div class="grid-content">
                                    <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../assets/img/zhanglawer.jpg" class="image">
                                    </el-card>
                                </div>
                            </el-col>
                            <el-col :span="6" class="adverThings1">
                                <div class="grid-content">
                                    <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../assets/img/zhanglawer.jpg" class="image">
                                    </el-card>
                                    
                                </div>
                            </el-col>
                            <el-col :span="6" class="adverThings1">
                                <div class="grid-content">
                                    <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../assets/img/zhanglawer.jpg" class="image">
                                    </el-card>
                                </div>
                            </el-col>
                            <el-col :span="6" class="adverThings1">
                                <div class="grid-content">
                                    <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../assets/img/zhanglawer.jpg" class="image">
                                    </el-card>
                                </div>
                            </el-col>
                        </el-row>
        </div>
        <div class="adv">
            <!--法律快讯-->
            <div class="lawnew"> &#12288;法律快讯
                 &#12288; &#12288; &#12288;&#12288; &#12288;
                  &#12288; &#12288; &#12288; &#12288;&#12288; &#12288;
                  &#12288; &#12288; &#12288; &#12288;&#12288; &#12288;
                  &#12288; &#12288; &#12288;&#12288; &#12288;
                 <a href="" class="el-icon-refresh refresh">&#12288;换一批</a>
            </div>
            <div class="lawnewcontent">
                <el-row :gutter="0" type="flex"  justify="space-around">
                    <el-col :span="7" v-for="item in lawnew" :key="item.id">
                        <div class="content">
                            <a href=""><h4>{{item.title}}</h4>
                            {{item.content}}
                            </a>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="lawers">
            <el-row :gutter="0" type="flex" class="row-bg" justify="space-around">
                            <el-col :span="6" class="adverThings1">
                                <div class="grid-content">
                                    <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../assets/img/zhanglawer.jpg" class="image">
                                    </el-card>
                                </div>
                            </el-col>
                            <el-col :span="6" class="adverThings1">
                                <div class="grid-content">
                                    <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../assets/img/zhanglawer.jpg" class="image">
                                    </el-card>
                                </div>
                            </el-col>
                            <el-col :span="6" class="adverThings1">
                                <div class="grid-content">
                                    <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../assets/img/zhanglawer.jpg" class="image">
                                    </el-card>
                                </div>
                            </el-col>
                            <el-col :span="6" class="adverThings1">
                                <div class="grid-content">
                                    <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../assets/img/zhanglawer.jpg" class="image">
                                    </el-card>
                                </div>
                            </el-col>
                        </el-row>
        </div>
        <div class="lawAknowlage">
            <!--法律知识-->
            
        </div>
    </div>
</div>
</template>
<script>

export default {
    data() {
        return {
           restaurants: [],
           state: '',
           timeout:  null,
           city:'北京',
           lawnew:[
               {nid:'1',title:'八部门联合印发,国家为这些人免租!',content:'受新冠肺炎疫情影响，服务业小微企业和个体工商户房屋租金成本支出压力大。为了缓解压...'},
               {nid:'2',title:'偷运5名外国人入境,广西一男子获刑2年',content:'日前，广西一边境管理支队对外通报一起运送他人偷越国（边）境案件办理情况，被告人陈...'},
               {nid:'3',title:'男子强奸女童致死二审改判死缓,死缓有...',content:'强奸又叫性暴力、性侵犯或强制性交，属于违法犯罪行为。强奸幼童更是属于重大犯罪行为...'}
           ],
           consultMessage:{
               name:'',
               phone:'',
               code:'',
               type:'刑事案件',
               city:'北京',
           },
        }
    },
    methods: {
        loadAll() {
        return [
            {"value":"安庆"},{"value":"安顺"},{"value":"安阳"},{"value":"鞍山"},{"value":"阿拉善盟"},{"value":"安康"},{"value":"阿坝"},{"value":"阿里"},{"value":"阿克苏"},{"value":"阿拉尔"},{"value":"阿勒泰"},{"value":"北京"},{"value":"蚌埠"},{"value":"白银"},{"value":"北海"},{"value":"百色"},{"value":"毕节"},{"value":"白沙"},{"value":"保亭"},{"value":"保定"},{"value":"白山"},{"value":"白城"},{"value":"本溪"},{"value":"包头"},{"value":"巴彦淖尔"},{"value":"滨州"},{"value":"宝鸡"},{"value":"巴中"},{"value":"巴音郭楞"},{"value":"博尔塔拉"},{"value":"北屯"},{"value":"保山"},{"value":"重庆"},{"value":"池州"},{"value":"滁州"},{"value":"潮州"},{"value":"崇左"},{"value":"昌江"},{"value":"澄迈县"},{"value":"沧州"},{"value":"承德"},{"value":"长沙"},{"value":"常德"},{"value":"郴州"},{"value":"常州"},{"value":"长春"},{"value":"赤峰"},{"value":"长治"},{"value":"成都"},{"value":"昌都"},{"value":"昌吉"},{"value":"楚雄"},{"value":"定西"},{"value":"东莞"},{"value":"定安县"},{"value":"东方市"},{"value":"儋州"},{"value":"大庆"},{"value":"大兴安岭"},{"value":"大连"},{"value":"丹东"},{"value":"东营"},{"value":"德州"},{"value":"大同"},{"value":"德阳"},{"value":"达州"},{"value":"大理"},{"value":"德宏"},{"value":"迪庆"},{"value":"鄂州"},{"value":"恩施州"},{"value":"鄂尔多"},{"value":"阜阳"},{"value":"福州"},{"value":"佛山"},{"value":"防城港"},{"value":"抚州"},{"value":"抚顺"},{"value":"阜新"},{"value":"甘南"},{"value":"广州"},{"value":"桂林"},{"value":"贵港"},{"value":"贵阳"},{"value":"赣州"},{"value":"固原"},{"value":"果洛"},{"value":"广元"},{"value":"广安"},{"value":"甘孜"},{"value":"合肥"},{"value":"淮南"},{"value":"淮北"},{"value":"黄山"},{"value":"亳州"},{"value":"河源"},{"value":"惠州"},{"value":"贺州"},{"value":"河池"},{"value":"海口"},{"value":"邯郸"},{"value":"衡水"},{"value":"哈尔滨"},{"value":"鹤岗"},{"value":"黑河"},{"value":"鹤壁"},{"value":"黄石"},{"value":"黄冈"},{"value":"衡阳"},{"value":"怀化"},{"value":"淮安"},{"value":"葫芦岛"},{"value":"呼和浩特"},{"value":"呼伦贝尔"},{"value":"海北"},{"value":"海东"},{"value":"海南"},{"value":"海西"},{"value":"黄南"},{"value":"菏泽"},{"value":"汉中"},{"value":"哈密"},{"value":"和田"},{"value":"红河"},{"value":"杭州"},{"value":"湖州"},{"value":"金昌"},{"value":"嘉峪关"},{"value":"酒泉"},{"value":"江门"},{"value":"揭阳"},{"value":"鸡西"},{"value":"佳木斯"},{"value":"焦作"},{"value":"济源"},{"value":"荆州"},{"value":"荆门"},{"value":"景德镇"},{"value":"九江"},{"value":"吉安"},{"value":"吉林"},{"value":"锦州"},{"value":"济南"},{"value":"济宁"},{"value":"晋城"},{"value":"晋中"},{"value":"嘉兴"},{"value":"金华"},{"value":"开封"},{"value":"克拉玛依"},{"value":"喀什"},{"value":"克孜勒苏"},{"value":"柯尔"},{"value":"昆玉"},{"value":"可克达拉"},{"value":"昆明"},{"value":"六安"},{"value":"龙岩"},{"value":"兰州"},{"value":"临夏"},{"value":"陇南"},{"value":"柳州"},{"value":"来宾"},{"value":"六盘水"},{"value":"乐东"},{"value":"临高县"},{"value":"陵水"},{"value":"廊坊"},{"value":"洛阳"},{"value":"漯河"},{"value":"娄底"},{"value":"连云港"},{"value":"辽源"},{"value":"辽阳"},{"value":"临沂"},{"value":"聊城"},{"value":"临汾"},{"value":"吕梁"},{"value":"泸州"},{"value":"乐山"},{"value":"凉山"},{"value":"拉萨"},{"value":"林芝"},{"value":"临沧"},{"value":"丽江"},{"value":"丽水"},{"value":"马鞍山"},{"value":"梅州"},{"value":"茂名"},{"value":"牡丹江"},{"value":"绵阳"},{"value":"眉山"},{"value":"南平"},{"value":"宁德"},{"value":"南宁"},{"value":"南阳"},{"value":"南京"},{"value":"南通"},{"value":"南昌"},{"value":"内江"},{"value":"南充"},{"value":"那曲"},{"value":"怒江"},{"value":"宁波"},{"value":"莆田"},{"value":"平凉"},{"value":"平顶山"},{"value":"濮阳"},{"value":"萍乡"},{"value":"盘锦"},{"value":"攀枝花"},{"value":"普洱"},{"value":"泉州"},{"value":"庆阳"},{"value":"清远钦州"},{"value":"黔西南"},{"value":"黔东南"},{"value":"黔南"},{"value":"琼海"},{"value":"琼中"},{"value":"秦皇岛"},{"value":"齐齐哈尔"},{"value":"七台河"},{"value":"潜江"},{"value":"青岛"},{"value":"曲靖"},{"value":"衢州"},{"value":"日照"},{"value":"日喀则"},{"value":"上海"},{"value":"宿州"},{"value":"三明"},{"value":"深圳"},{"value":"汕头"},{"value":"韶关"},{"value":"汕尾"},{"value":"三亚"},{"value":"三沙市"},{"value":"石家庄"},{"value":"双鸭山"},{"value":"绥化"},{"value":"三门峡"},{"value":"商丘"},{"value":"十堰"},{"value":"随州"},{"value":"神农架"},{"value":"邵阳"},{"value":"宿迁"},{"value":"苏州"},{"value":"上饶"},{"value":"四平"},{"value":"松原"},{"value":"沈阳"},{"value":"石嘴山"},{"value":"朔州"},{"value":"商洛"},{"value":"遂宁"},{"value":"山南"},{"value":"石河子"},{"value":"双河"},{"value":"绍兴"},{"value":"天津"},{"value":"铜陵"},{"value":"天水"},{"value":"铜仁"},{"value":"屯昌县"},{"value":"唐山"},{"value":"天门"},{"value":"泰州"},{"value":"通化"},{"value":"铁岭"},{"value":"通辽"},{"value":"泰安"},{"value":"太原"},{"value":"铜川"},{"value":"吐鲁番"},{"value":"图木舒克"},{"value":"塔城"},{"value":"台州"},,{"value":"芜湖"},{"value":"武威"},{"value":"梧州"},{"value":"万宁"},{"value":"文昌"},{"value":"五指山"},{"value":"武汉"},{"value":"无锡"},{"value":"乌海"},{"value":"乌兰察布"},{"value":"吴忠"},{"value":"潍坊"},{"value":"威海"},{"value":"渭南"},{"value":"乌鲁木齐"},{"value":"五家渠"},{"value":"文山"},{"value":"温州"},,{"value":"宣城"},{"value":"厦门"},{"value":"邢台"},{"value":"雄安新区"},{"value":"新乡"},{"value":"许昌"},{"value":"信阳"},{"value":"襄阳"},{"value":"孝感"},{"value":"咸宁"},{"value":"仙桃"},{"value":"湘潭"},{"value":"湘西"},{"value":"徐州"},{"value":"新余"},{"value":"兴安盟"},{"value":"锡林郭勒"},{"value":"西宁"},{"value":"忻州"},{"value":"西安"},{"value":"咸阳"},{"value":"西双版纳"},{"value":"阳江"},{"value":"云浮"},{"value":"玉林"},{"value":"伊春"},{"value":"宜昌"},{"value":"岳阳"},{"value":"益阳"},{"value":"永州"},{"value":"盐城"},{"value":"扬州"},{"value":"鹰潭"},{"value":"宜春"},{"value":"延边州"},{"value":"营口"},{"value":"银川"},{"value":"玉树"},{"value":"烟台"},{"value":"阳泉"},{"value":"运城"},{"value":"延安"},{"value":"榆林"},{"value":"宜宾"},{"value":"雅安"},{"value":"伊犁"},{"value":"玉溪"},{"value":"漳州"},{"value":"张掖"},{"value":"珠海"},{"value":"中山"},{"value":"湛江"},{"value":"肇庆"},{"value":"遵义"},{"value":"张家口"},{"value":"郑州"},{"value":"周口"},{"value":"驻马店"},{"value":"株洲"},{"value":"张家界"},{"value":"镇江"},{"value":"朝阳"},{"value":"中卫"},{"value":"淄博"},{"value":"枣庄"},{"value":"自贡"},{"value":"资阳"},{"value":"昭通"},{"value":"舟山"}
        ]
        },
        onSendMessage(){//发送手机消息接口
            var message=JSON.stringify(this.consultMessage);
            console.log(message);
            this.$http({
                    method: 'post',
                    url: '/law/consult',
                    data: message
                }).then(res => {
                    console.log("已发送");
                     this.$router.push('/pay');
                }).catch(error=>{
                    alert("发送失败!!!");
                })
        },
        querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
       },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
       },
        handleSelect(item) {
        console.log(item);
        this.city=item.value;
        },
      },
        mounted() {
         this.restaurants = this.loadAll();
      }
    
    
}
</script>
<style lang="less" scoped>
.one{
  min-width: 1300px;
  margin-top: 1px;
  background:  #ffffff;
}
.main{
  width: 1200px;
  align-content: center;
  margin-left: 100px;
  background: white;
  margin-top: 0px;
}
.gdp{
  width: 100%;
  height: 460px;
  background: rgba(251, 251, 251, 0.973);
  text-align: left;
}
.leftSide{
    width: 100%;
    height: 420px;
    background:rgb(77, 80, 74);
}
.rightSide{
    width: 100%;
    height: 205px;
    margin-top: 0px;
}
.pag{
    margin-top: 10px;
    margin-left: 200px;
}
.row-bg {
    padding: 5px 0;
    background-color:  rgba(251, 251, 251, 0.973);
}
.adverThings{
    background: white;
    width: 287px;
    height: 200px;
    margin-top: 10px;
    margin-left: 0px;
}
.adverThings1{
    width: 220px;
    height: 160px;
    margin-top: 10px;
    margin-left: 0px;
}
.el-icon-location{
    font-size: 40px;
    color: white;
    text-align: center;
    margin-left: 65px;
    margin-top: 30px;
}
.location{
    color:wheat;
}
.autocomplete{
    margin-left: 10px;
    margin-right: 10px;
}
.lawers{
     width: 100%;
     height: 230px;
     background: rgba(251, 251, 251, 0.973);
     text-align: left;
     margin-top: 20px;
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
.adv{
    width: 100%;
    height: 270px;
    background: rgba(251, 251, 251, 0.973);
    text-align: left;
    margin-top: 20px;
}
.lawAknowlage{
    width: 100%;
    height: 150px;
    background: rgba(251, 251, 251, 0.973);
    text-align: left;
    margin-top: 20px;
}
.grid-content{
    width: 100%;
    height: 100%;
    box-shadow: 5px 5px 3px rgb(236, 235, 235);
}
.lawnew{
    width: 100%;
    height: 50px;
    margin-top: 20px;
    font-size: 30px;
    color: black;
    .refresh{
        font-size: 17px;
        color: black;
    }
}
.lawnewcontent{
    width: 100%;
    height: 170px;
}
.content{
    width: 310px;
    height: 150px;
    background:white;
    margin-left: 0px;
    padding: 5px;
    margin-bottom: 10px;
    border-style: solid;
    border-color: white white white  rgb(104, 233, 147);
    box-shadow: 5px 5px 2px rgb(236, 235, 235);
}
.consultText{
    background:white;
    border-color: white white white  rgb(104, 233, 147);
}
.textFont{
    font-size: 20px;
    text-align: center;
}
</style>
