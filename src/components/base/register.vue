<template>
<div class="one">
    <el-row :gutter="10">
        <el-col :span="6">&#12288;</el-col>
        <el-col :span="3">&#12288;</el-col>
        <el-col :span="13">
            <div class="registerbox">
                <el-row :gutter="10">
                    <el-col :span="4">&#12288;</el-col>
                    <el-col :span="14">
                        <br><br><br>
                        <el-form  id='form' :model="registerForm" label-width="70px">
                            <el-form-item label="账户">
                                <el-input v-model="registerForm.account"  placeholder="请输入账户"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input v-model="registerForm.password"  show-password  placeholder="请输入密码"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码">
                                <el-input v-model="registerForm.password1"  show-password  placeholder="请再次输入密码"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码">
                                <el-row :gutter="10">
                                    <el-col :span="10">
                                        <el-input v-model="registerForm.code" placeholder="请输入验证码" />
                                    </el-col>
                                    <el-col :span="12" >
                                        <a @click="refreshCode"><s-identify :identifyCode="identifyCode"></s-identify></a>
                                    </el-col>
                                </el-row>
                            </el-form-item>
                            <el-form-item >
                                <el-button type="primary" @click="register('registerForm')">注册</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col :span="2">&#12288;</el-col>
                </el-row>
                
            </div>
        </el-col>
    </el-row>
</div>
</template>
<script>
import SIdentify from '../utils/sidentify.vue'

export default {
    components: { SIdentify },
    data() {
        return {
            registerForm:{
                account:'',
                password:'',
                password1:'',
                code:"",//text框输入的验证码
            },
            identifyCodes: "1234567890",
            identifyCode: "",
        }
    },
    methods: {
        register(){
            let  _this=this;
            if(this.registerForm.account===''||this.registerForm.password===''||this.registerForm.password1===''||this.registerForm.code===''){
                alert('账户、密码、验证码不能为空！！！');
            }else if(this.registerForm.password1!==this.registerForm.password){
                alert('密码不一致！！');
            }else if(this.registerForm.code===this.identifyCode){
                //同源下的访问方式
                this.$http({
                    method: 'post',
                    url: '/user/register',
                    data: {
                        'account':this.registerForm.account,
                        'password':this.registerForm.password,
                    },
                }).then(res => {
                    //检验code是否正确
                    _this.$router.push('/login');
                    alert('注册成功');
                    }).catch(error => {
                    alert('注册失败');
                    console.log(error);
                    });
                }else{
                    alert("验证码不正确");
                }
            console.log(JSON.stringify(this.registerForm));
        },
        //验证码
        randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
        },
        
        refreshCode() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
        },
        makeCode(o, l) {
        for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
        this.randomNum(0, this.identifyCodes.length)
        ];
        }
        console.log(this.identifyCode);
        },
        onSubmit(){
            console.log(this.registerForm.password);
        },
    },
    mounted(){
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    },
    created(){
        this.refreshCode()
    }
}
</script>
<style lang="less" scoped>
.one{
  min-width: 1300px;
  margin-top: 0px;
  background: url("../../assets/img/loginbg.jpg") no-repeat;
  height: 550px;
}

.registerbox{
width: 700px;
height: 400px;
background: rgba(251, 251, 251, 0.973);
margin-top: 50px;
border-radius: 20px;
box-shadow: 10px 10px 5px #888888;
}
/*验证码样式*/
.code{
 width:120px;
 height:31px;
 border:1px solid rgba(186,186,186,1);
}
.login-code{
 cursor: pointer;
}
</style>
