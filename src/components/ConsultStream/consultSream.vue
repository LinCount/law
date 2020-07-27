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
                                    action="http://localhost:8080/src/assets/img/"
                                    ref="upload"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    multiple
                                    show-file-list
                                    :limit="3"
                                    :on-exceed="handleExceed">
                                    &#12288;<el-button size="small" type="primary">上传附件<i class="el-icon-upload el-icon--right"></i></el-button>
                                    <div slot="tip" >tips</div>
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
                                v-model="orderForm.code"
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
                                <el-button type="primary" >发布悬赏</el-button>
                                <el-button>重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col :span="6">
                        <div class="messageTips">
                            <el-collapse v-model="activeNames" accordion>
                                <el-collapse-item name="1" title='未读消息'>
                                    <div></div>
                                </el-collapse-item>
                                <el-collapse-item name="2" title="已读消息">
                                    <div></div>
                                </el-collapse-item>
                                <el-collapse-item name="3" title="任务进行中">
                                    <div></div>
                                </el-collapse-item>
                                <el-collapse-item name="4" title="任务已完成">
                                    <div></div>
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
            activeNames:[''],
            orderForm:{
                type:'',
                content:'',
                phone:'',
                code:'',
                pay:'1',
                money:''
            },
            selects:[
               {key:1,value:'民间借贷'},{key:2,value:'婚姻家庭'},{key:3,value:'财产继承'},{key:4,value:'消费维权'},
               {key:5,value:'劳动仲裁'},{key:6,value:'交通事故'},{key:7,value:'刑事案件'},{key:8,value:'公司'},
               {key:9,value:'合同纠纷'},{key:10,value:'拆迁征收'},{key:11,value:'人身损害'},{key:12,value:'其他案件'}
           ],
           fileList:[
               {name:'',url:''},
               {name:'',url:''}
           ]
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
            return this.$confirm(`确定移除 ${ file.name }？`);
        }
    }
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
</style>
