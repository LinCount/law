<template>
<div class="one">
    <div>
        <!--付费咨询-->
        <template>
            <div class="orderContent">
                <el-row :gutter="20">
                    <el-col :span="3">
                        <div  class="rightShow">
                        </div>
                    </el-col>
                    <!--左边-->
                    <el-col :span="13">
                        <!--执行业务查看-->
                        <div class="leftBG">
                            <el-row>
                              <el-col :span="6">
                                  <div class="tableLeft">
                                      <big>订单-最近订单<br></big><br>
                                      本月完成订单数{{yueFen}}<br>
                                      <big>ORD &#12288;{{orderNun}}</big><br><br>
                                      <a class="font-size:10px;">对比上个月 <br>
                                      <big>ORD &#12288;{{lasterNum}}</big><br><br></a>
                                      <el-button size="mini">查看更多订单完成情况</el-button>
                                  </div>
                              </el-col>
                              <el-col :span="14">
                                  <div class="table">
                                      <img src="../../assets/img/table.jpg" style="width:600px">
                                  </div>
                              </el-col>
                            </el-row>
                        </div>
                        单子展示
                        <div>
                            
                        </div>
                    </el-col>
                    <!--右边-->
                    <el-col :span="6">
                        <!--费用查看-->
                        <div class="rightBG">
                            <br>
                            &#12288;费用-概览
                            <el-row :gutter="20">
                              <el-col :span="11" :v-bind="countMoney">
                                  <div class="money">
                                    账户余额<br>
                                    <big><big>CNY&#12288;{{countMoney}}</big></big>
                                    
                                    <div class="inMoney">
                                        <br> &#12288;任务完成数<br>
                                        &#12288;&#12288; &#12288;<big><big>{{finishWorld}}</big></big><br><br>
                                    </div><br>
                                    <el-button style="width:100%" type="primary" >充值</el-button>
                                  </div>
                              </el-col>
                              <el-col :span="11" v-bind="allMoney">
                                  <div class="money">
                                    总赚取金额<br>
                                    <big><big>CNY&#12288;{{allMoney}}</big></big>
                                    
                                    <div class="inMoney">
                                        <br> &#12288;任务进行中<br>
                                        &#12288;&#12288; &#12288;<big><big>{{finishWorld}}</big></big><br><br>
                                    </div><br>
                                    <el-button style="width:100%" >提现</el-button>
                                  </div>
                              </el-col>
                            </el-row>
                        </div>
                        用户单子检索条件
                        <div>

                        </div>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :span="4">
                        <div class="sight">
                            <el-select v-model="type" placeholder="请选择类型">
                                <el-option
                                v-for="item in selects"
                                :key="item.value"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <br>
                            价格筛选
                            <br>
                            附件筛选
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="sight">
                            咨询展示
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="sight">
                            个人金库
                        </div>
                    </el-col>
                </el-row>
            </div>
        </template>
    </div>
</div>
</template>
<script>

export default {
    data() {
        
        return {
            type: '',
            countMoney: '10000',
            allMoney: '20000',
            finishWorld:'0',
            runningWold: '0',
            orderNun: '0',
            lasterNum: '0',
            selects:[
               {key:1,value:'民间借贷'},{key:2,value:'婚姻家庭'},{key:3,value:'财产继承'},{key:4,value:'消费维权'},
               {key:5,value:'劳动仲裁'},{key:6,value:'交通事故'},{key:7,value:'刑事案件'},{key:8,value:'公司'},
               {key:9,value:'合同纠纷'},{key:10,value:'拆迁征收'},{key:11,value:'人身损害'},{key:12,value:'其他案件'}
           ],
        }
        
    },
    methods: {
    goBack(){
        history.back();
        console.log('退出律师专属');
    },
    mounted(){
        
    },
    created(){
        
    }
    }
}
</script>
<style lang="less" scoped>
.one{
  min-width: 1300px;
  margin-top: 0px;
  background: white;
}
.orderContent{
    width: 100%;
    background:  rgb(250, 250, 250);
}
.leftBG{
    margin-top: 20px;
    width: 100%;
    height: 300px;
    background: white;
}
.rightBG{
    margin-top: 20px;
    width: 100%;
    background: white;
    height: 240px;
    text-align: left;
    font-size: 14px;
}
.rightShow{
    margin-top: 20px;
    width: 100%;
    background:  rgb(250, 250, 250);
    height: 300px;
}
.money{
    width: 100%;
    text-align: left;
    font-size: 12px;
    margin-left: 15px;
    margin-top: 10px;
}
.inMoney{
    margin-top: 10px;
    width: 100%;
    height: 100%;
    background: rgba(154, 208, 240, 0.1);
    font-size: 14px;
}
.tableLeft{
    width: 100%;
    height: 100%;
    background:white;
    font-size: 12px;
    text-align: left;
    margin-top: 10px;
    margin-left: 10px;
}
.table{
    width: 100%;
    height: 100%;
    background: white;
    margin-top: 70px;
    margin-right: 0px;
}
.sight{
    background: rgba(251, 251, 251, 0.973);
}
</style>
