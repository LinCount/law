<template>
<!--法律查找主页-->
<div class="one">
    <div class="main">
        <!--查询条件-->
        <br>
        <div class="findAs">
            <div class="formContent">
                <br><br><br>
                <el-row :gutter="10">
                    <el-col :span="18">
                        <el-form :model="orderForm"  ref="ruleForm">
                            <el-form-item label="业务类别 " required>
                                &#12288;
                                <el-select v-model="orderForm.type" placeholder="请选择">
                                    <el-option
                                    v-for="item in selects"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="业务要求" prop="region" style="height:200px">
                                &#12288;
                                <el-input
                                style="width:500px"
                                placeholder="请输入内容"
                                v-model="orderForm.content"
                                maxlength="400"
                                show-word-limit
                                rows="8"
                                type="textarea"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="上传附件" prop="region">
                                <el-upload 
                                    :action="action"
                                    ref="upload"
                                    :on-success="onSuccess"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    :before-upload="beforeupload"
                                    limit=1
                                    show-file-list
                                    accept=".doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.zip,.rar"
                                    name="file"
                                    :on-exceed="handleExceed">
                                    &#12288;<el-button size="small" type="primary">上传附件<i class="el-icon-upload el-icon--right"></i></el-button>
                                    <div slot="tip" >上传文件可为doc,docx,xls,xlsx,ppt,pptx,pdf,zip,rar</div>
                                </el-upload>
                            </el-form-item>
                            <el-form-item label="手机号码 " required>
                                <el-input
                                v-model="orderForm.phone"
                                style="width:300px"
                                placeholder="请输入手机号码"
                                maxlength="11"
                                minlength="11">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="验证码" required>
                                &#12288;
                                <el-input
                                v-model="code"
                                minlength="4"
                                maxlength="4"
                                style="width:100px"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="支付方式 " required>
                                &#12288;
                                <el-radio v-model="orderForm.pay" label="wechar">微信</el-radio>
                                <el-radio v-model="orderForm.pay" label="pay">支付宝</el-radio>
                            </el-form-item>
                            <el-form-item label="悬赏金额" required>
                                &#12288;
                                <el-input
                                v-model="orderForm.money"
                                minlength="1"
                                maxlength="10"
                                style="width:150px"
                                ></el-input>
                            </el-form-item>
                            <el-form-item style="text-align:center">
                                <el-button type="primary" @click="onSubmit" >发布悬赏</el-button>
                                <el-button @click="open">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col :span="6">
                        <div class="messageTips">
                            <el-collapse v-model="activeNames" accordion>
                                <el-collapse-item  name="1">
                                    <template slot="title">
                                        <el-badge :is-dot="message.noReadNumber!=''" >
                                            未读消息
                                        </el-badge>
                                    </template>
                                    <div>
                                        <el-card class="box-card">
                                            <div v-for="o in 4" :key="o" class="text item">
                                                {{'列表内容 ' + o }}
                                            </div>
                                        </el-card>
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item name="2">
                                    <template slot="title">
                                        <el-badge :is-dot="message.readNumber!=''" >
                                            已读消息
                                        </el-badge>
                                    </template>
                                    <div>
                                        <el-card class="box-card">
                                            <div v-for="o in 4" :key="o" class="text item">
                                                {{'列表内容 ' + o }}
                                            </div>
                                        </el-card>
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item name="3">
                                    <template slot="title">
                                        <el-badge :is-dot="message.havingTask!=''" >
                                            任务进行中 
                                        </el-badge>
                                    </template>
                                    <div>
                                        <el-card class="box-card">
                                            <div v-for="o in 4" :key="o" class="text item">
                                                {{'列表内容 ' + o }}
                                            </div>
                                        </el-card>
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item name="4">
                                    <template slot="title">
                                        <el-badge :is-dot="message.finishTask!=''" >
                                            任务已完成
                                        </el-badge>
                                    </template>
                                    <div>
                                        <el-card class="box-card">
                                            <div v-for="o in 4" :key="o" class="text item">
                                                {{'列表内容 ' + o }}
                                            </div>
                                        </el-card>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
    data() {
        return {
            action:'/api/data/upload',//上传文件路径
            activeNames:[''],
            code:'',
            orderForm:{//文件表单
                userId:'',
                type:'',
                content:'',
                phone:'',
                pay:'1',
                fileName:'',
                money:''
            },
            message:{
                readNumber:'',
                noReadNumber:'',
                finishTask:'',
                havingTask:'',
            },
            selects:[
               {key:1,value:'民间借贷'},{key:2,value:'婚姻家庭'},{key:3,value:'财产继承'},{key:4,value:'消费维权'},
               {key:5,value:'劳动仲裁'},{key:6,value:'交通事故'},{key:7,value:'刑事案件'},{key:8,value:'公司'},
               {key:9,value:'合同纠纷'},{key:10,value:'拆迁征收'},{key:11,value:'人身损害'},{key:12,value:'其他案件'}
           ],
           timer : null,//用来接收setInterval()返回的 ID 值
        }
    },
    methods: {
         handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            this.orderForm.fileName='';
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        beforeupload(file){
            
        },
        onSuccess(ref){
            this.orderForm.fileName=ref;
            console.log(ref+'上传成功');
        },
        onSubmit(){
            this.orderForm.userId=localStorage.getItem(userId);
            if(this.orderForm.userId===""){
               this.$$router.push('/login');
            }
            var order =JSON.stringify(this.orderForm);
            this.$http({
                    method: 'post',
                    url: '/data/uploadInfo',
                    data: order
                }).then(res => {
                    this.open();
                    console.log("订单生成");
                    this.$router.push('/pay');
                }).catch(error=>{
                    alert("发布失败!!!");
                })
        },
        initNumber: function () {//获取消息接口
            let seft=this;
            this.api({
            url: "/data/initNumber",
            method: "get",
            }).then(res => {
                seft.message.readNumber=res.data.readNumber;
                seft.message.noReadNumber=res.data.noReadNumber;
                seft.message.finishTask=res.data.finishTask;
                seft.message.havingTask=res.data.havingTask;
            })
        },
        getUserId: function (){
            return localStorage.getItem(userId);
        },
        open() {//支付接口
        const url=require('../../assets/img/pay.jpg');
        this.$confirm("<img src=" + url + ">", '扫码支付', {
          confirmButtonText: '确定已支付',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString:true,
          type: 'info',
          center: true,
        }).then(() => {
          this.$message({
            type: 'success',
            message: '支付成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消支付'
          });
        });
        },
        freshTable( ){

        },
    },
    mounted: function(){//定时访问接口
        let seft=this;
        function freshNumber (){//刷新消息数字
        if(this.getUserId===""){
            //用户未登录，不进行动作
        }else{
            this.initNumber();
        }

        }
        self.timer = setInterval(this.freshTable, 3000);//定时间隔，
    },
    //摧毁定时接口
    destroyed: function() { 
        clearInterval(this.timer);
        this.timer = null;
    },

}
</script>
<style lang="less" scoped>
.one{
  min-width: 1300px;
  background:  rgba(252, 252, 252, 0.973);
}
.main{
  width: 1200px;
  height: 900px;
  align-content: center;
  margin-left: 60px;
  background:rgba(252, 252, 252, 0.973);
}
.findAs{
    width: 1000px;
    height: 830px;
    text-align: left;
    margin-left: 100px;
    background: white;
    box-shadow: 10px 10px 5px rgb(236, 235, 235);
}
.formContent{
    width: 90%;
    margin-left: 100px;
}
.tagInfo{
    margin-top: 10px;
    margin-right: 40px;
}
.messageTips{
    align-content: center;
    margin-right: 30px;
}
.collapse{
    color: aqua;
}
.text {
    font-size: 14px;
  }

  .item {
    padding: 10px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
