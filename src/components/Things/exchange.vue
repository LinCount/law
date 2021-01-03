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
                <el-input v-model="chartMessage.message" placeholder="请输入咨询内容" style="width:300px"></el-input>
                <el-button type="primary" icon="el-icon-s-promotion" @click="doSendUser">发送</el-button>
            </div>
        </el-col>
    </el-row>
</div>
</template>
<script>
var websocket = null;
export default {
    data() {
        return {
            receiverId:'wqeqwewq-gfg-dffdf',
            count:0,
            sum:2,
            chartArray: [
                {mid:'0',id: 0,content:'亲，请问你有哪方面的疑问呢'},
                {mid:'1',id: 1,content:'你好，我想咨询一下关于。。。。。'},
                ],
            chartMessage:{senderId:'',receiverId:'',message:""},
        }
        
    },
    methods: {
    goBack(){
        history.back();
        console.log('退出咨询详情');
    },
    createWebsocket(){
        if ('WebSocket' in window) {
            websocket = new WebSocket("ws://localhost:8989/websocket/server");
        } else if ('MozWebSocket' in window) {
            websocket = new MozWebSocket("ws://localhost:8989/websocket/server");
        } else {
            websocket = new SockJS("http://localhost:8989/sockjs/server");
        }
        websocket.onopen = this.onOpen();
        websocket.onmessage = this.onMessage();
        websocket.onerror = this.onError();
        websocket.onclose = this.onClose();
    },
    //连接成功建立的回调方法
    onOpen(event) {
        alert(event.type);
    },
    //接收到消息的回调方法
    onMessage(messageEvent) {
        console.log(messageEvent.data);
        var tip={mid:this.sum,id: 1,content:messageEvent.data};
        this.sum=this.sum+1;
        this.chartArray.pop(tip);
    },
    //连接发生错误的回调方法
    onError(event) {
        alert("出现未知错误");
    },
    //连接关闭的回调方法
    onClose(closeEvent) {
        alert(closeEvent.reason);
    },
    doSendUser() {
        if (websocket.readyState === websocket.OPEN&&this.chartMessage.message!='') {
            //封装聊天信息{sendId：'',receiverId:'',message:""}
            this.chartMessage.receiverId=this.receiverId;
            this.chartMessage.senderId=localStorage.getItem('userId');
            var msg =JSON.stringify(this.chartMessage);
            websocket.send(msg);//发送消息
            this.chartMessage.message='';
            var tip={mid:this.sum,id: 0,content:this.chartMessage.message};
            this.sum=this.sum+1;
        } else {
            alert("请输入发送内容!");
        }
    },
    close() {
        websocket.onclose();
    },
    websocketClose() {
        websocket.close();
        alert("连接关闭");
    },
    //获取聊天内容
    getMessage(messageId,receiverId){
        this.$http({
                    method: 'get',
                    url: `/getMessage/${messageId}/${receiverId}`,
                }).then(res => {
                    this.chartArray=res.data;
                    this.sum=this.chartArray.length();
                    console.log(res);
                }).catch(err => {
                    alert("获取数据错误");
                })
    }
    },
    mounted(){
        
    },
    created(){
        this.createWebsocket();
        this.getMessage();
    },
    destroyed(){
        this.close();
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
