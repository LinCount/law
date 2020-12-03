<template>
<div class="one">
    <el-row :gutter="20">
        <el-col  :span="12" :offset="6">
            <div class="exch">
                <el-page-header @back="goBack" content="聊天咨询">
                </el-page-header>
                <div class="chartBady">
                    <div class="chartContent">
                    <div v-for="message in chartArray" :key="message.mid">
                        <div class="messageSize"><!--自动回复，根据标识确定消息的位置-->
                        <!--机器人头像-->
                        <el-row>
                            <el-col :span="2">
                                <div class="leftImg">
                                    <el-avatar v-if="message.id===0" shape="square">
                                        <img src="../../assets/img/leftImg.jpg">
                                    </el-avatar>
                                </div>
                            </el-col>
                            <el-col :span="20">
                                <div v-if="message.id===0" style="text-align: left;margin-left: 5px;">
                                    <!--机器人信息-->
                                    <p class="rightName">可爱的小律</p>
                                    <el-tag v-if="message.id===0">{{message.content}}</el-tag>
                                </div>
                                <div v-if="message.id===1" style="text-align: right;margin-right: 5px;">
                                    <!--机器人信息-->
                                    <p v-if="message.id===1" class="leftName">精致的me</p>
                                    <el-tag type="success" v-if="message.id===1">{{message.content}}</el-tag>
                                </div>
                            </el-col>
                            <el-col :span="2">
                                <div class="rightImg">
                                    <!--咨询人头像-->
                                    <el-avatar  v-if="message.id===1" shape="square">
                                        <img src="../../assets/img/rightImg.jpg">
                                    </el-avatar>
                                </div>
                            </el-col>
                        </el-row>
                        </div>
                    </div>
                    </div>
                </div>
                <br>
                <el-input v-model="chartText" placeholder="请输入咨询内容" style="width:300px"></el-input>
                <el-button type="primary" icon="el-icon-s-promotion">发送</el-button>
            </div>
        </el-col>
    </el-row>
</div>
</template>
<script>

export default {
    data() {
        return {
            chartText: '',
            count:0,
            sum:10,
            chartArray: [
                {mid:'0',id: 0,content:'1111'},
                {mid:'1',id: 1,content:'111'},
                {mid:'2',id: 0,content:'1111'},
                {mid:'3',id: 1,content:'111'},
                {mid:'4',id: 0,content:'1111'},
                {mid:'5',id: 1,content:'111'},
                {mid:'6',id: 0,content:'1111'},
                {mid:'7',id: 1,content:'111'},
                {mid:'8',id: 0,content:'1111'},
                {mid:'9',id: 1,content:'111'},
                {mid:'10',id: 1,content:'111'},
                {mid:'11',id: 0,content:'1111'},
                {mid:'12',id: 1,content:'111'},
                {mid:'13',id: 0,content:'1111'},
                {mid:'14',id: 1,content:'111'},
                {mid:'15',id: 1,content:'111'},
                {mid:'16',id: 0,content:'1111'},
                {mid:'17',id: 1,content:'111'},
                {mid:'18',id: 0,content:'1111'},
                {mid:'19',id: 1,content:'111'}],
        }
        
    },
    methods: {
    goBack(){
        history.back();
        console.log('退出咨询详情');
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
  background: url("../../assets/img/echangeBG.jpg") no-repeat;
  height: 550px;
}
.exch{
    margin-top: 5px;
    background: white;
    height: 500px;
}
.chartBady{
    width: 500px;
    height: 400px;
    border-width: 1px;
    border-block-width: 5px;
    border-style: solid;
    margin-top: 5px;
    margin-left: 80px;
    border-color:rgba(208, 212, 209, 0.514);
    box-shadow: 5px 5px 2px rgb(236, 235, 235);
    overflow: hidden;
}
.chartContent{
    width: 500px;
    height: 400px;
    overflow-y: scroll;
}
.chartContent::-webkit-scrollbar {
    display: none;
}
.messageSize{
    margin-left: 30px;
    width: 470px;
}
.rightName{//头像名字大小
    font-size: 1px;
    text-align: left;
    color:darkseagreen;
}
.rightImg{
    text-align: right;
}
.leftName{//头像名字大小
    font-size: 1px;
    text-align: right;
    color:darkgreen;
}
.leftImg{
    text-align: left;
}
</style>
