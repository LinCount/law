<template>
<div class="one">
    <div class="main">
        <div class="head">
            <div class="head1">
                <el-page-header @back="goBack" content="新闻详情页面">
                </el-page-header>
            </div>
        </div>
        <div><h1>{{newId}}</h1></div>
        <div><h6>新闻来源：{{pupOrgan}} &#12288; &#12288; &#12288; &#12288;发布时间:{{newTime}}</h6></div>
        <el-divider  content-position="left">请尽情浏览</el-divider>
        <div>{{pupContent}}</div>
        <el-divider>人家也是有底线的</el-divider>
        <div>相关新闻</div>
        <el-divider  content-position="right">缘分让您留言</el-divider>
        <div>留言</div>
    </div>
</div>
</template>
<script>

export default {
    data() {
        return {
           "newId":'10',"pupOrgan":'新闻网',"pupContent":'受新冠肺炎疫情影响，服务业小微企业和个体工商户房屋租金成本支出压力大。为了缓解压...',"popTittle":'八部门联合印发,国家为这些人免租!',"newTime":'2020-03-20',
           lawnew:[
               {nid:'1',title:'八部门联合印发,国家为这些人免租!',content:'受新冠肺炎疫情影响，服务业小微企业和个体工商户房屋租金成本支出压力大。为了缓解压...'},
               {nid:'2',title:'偷运5名外国人入境,广西一男子获刑2年',content:'日前，广西一边境管理支队对外通报一起运送他人偷越国（边）境案件办理情况，被告人陈...'},
               {nid:'3',title:'男子强奸女童致死二审改判死缓,死缓有...',content:'强奸又叫性暴力、性侵犯或强制性交，属于违法犯罪行为。强奸幼童更是属于重大犯罪行为...'}
           ],
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
  min-width: 1300px;
  margin-top: 0px;
  background:  #ffffff;
}
.main{
  width: 1100px;
  align-content: center;
  margin-left: 100px;
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
