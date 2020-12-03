<template>
<!--律师申请主页-->
<div class="one">
    <div style="height: 50px;"></div>
    <div class="two">
        <el-row :gutter="10">
            <el-col :span="2">&#12288;</el-col>
            <el-col :span="20">
                <br><br><br>
                <el-form mode="loginFrom"  ref="loginFrom" label-width="80px">
                    <el-form-item label="姓名" required>
                        <el-input placeholder="请输入姓名" maxlength="12" ></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" required>
                        <el-input placeholder="请输入手机号" maxlength="12" ></el-input>
                    </el-form-item>
                    <el-form-item label="身份证" required>
                        <el-input placeholder="请输入身份证" maxlength="12" ></el-input>
                    </el-form-item>
                    <el-form-item label="执业证号" required>
                        <el-input placeholder="请输入执业证号" maxlength="12" ></el-input>
                    </el-form-item>
                    <el-form-item label="执业图片" required>
                        <el-upload 
                                    action="action"
                                    ref="upload"
                                    on-success="onSuccess"
                                    on-preview="handlePreview"
                                    on-remove="handleRemove"
                                    before-remove="beforeRemove"
                                    before-upload="beforeupload"
                                    limit="1"
                                    show-file-list
                                    accept=".jpg,.png"
                                    name="file"
                                    on-exceed="handleExceed">
                                    <el-button size="small" type="primary">上传附件<i class="el-icon-upload el-icon--right"></i></el-button>
                                    <div slot="tip" >请上传执业证图片(jpg或png格式)</div>
                                </el-upload>
                    </el-form-item>
                    <el-form-item label="律师简介" required>
                        <el-input
                                style="width:500px"
                                placeholder="请输入内容"
                                maxlength="400"
                                show-word-limit
                                rows="8"
                                type="textarea"
                                ></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" required>
                        <el-row :gutter="10">
                            <el-col :span="10">
                                <el-input  placeholder="请输入验证码" maxlength="4" />
                            </el-col>
                            <el-col :span="12">
                                <s-identify ></s-identify>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item >
                        <el-button type="primary" @click="login('loginFrom')">成为律师</el-button>
                    </el-form-item>
                </el-form>
                </el-col>
        </el-row>
    </div>
</div>
</template>
<script>

export default {
    data() {
        return {
           code:'',
        }
    },
    methods: {
        
    }
}
</script>
<style lang="less" scoped>
.one{
  min-width: 1300px;
  margin-top: 0px;
  background: rgba(251, 251, 251, 0.973);
  height: 1000px;
}
.two{
    width: 700px;
    height: 800px;
    background: white;
    box-shadow: 10px 10px 5px rgb(236, 235, 235);
    margin-left: 300px;
}
</style>
