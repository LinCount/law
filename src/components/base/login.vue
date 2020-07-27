<template>
<div class="one">
    <el-row :gutter="10">
        <el-col :span="6">&#12288;</el-col>
        <el-col :span="6">&#12288;</el-col>
        <el-col :span="10">
            <div class="loginbox">
                <el-row :gutter="10">
                    <el-col :span="2">&#12288;</el-col>
                    <el-col :span="18">
                        <br><br><br>
                        <el-form :mode="loginFrom"  ref="loginFrom" label-width="80px">
                            <el-form-item label="账户">
                                <el-input v-model="loginFrom.account"  placeholder="请输入账户" maxlength="12" ></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input v-model="loginFrom.password"  show-password  placeholder="请输入密码" maxlength="12" ></el-input>
                            </el-form-item>
                            <el-form-item label="验证码">
                                <el-row :gutter="10">
                                    <el-col :span="10">
                                        <el-input v-model="loginFrom.code" placeholder="请输入验证码" maxlength="4" />
                                    </el-col>
                                    <el-col :span="12">
                                        <s-identify :identifyCode="identifyCode"></s-identify>
                                    </el-col>
                                </el-row>
                            </el-form-item>
                            <el-form-item >
                                <el-button type="primary" @click="login('loginFrom')">登录</el-button>
                                <router-link to="/register"><el-button>注册</el-button></router-link>
                            </el-form-item>
                            <el-form-item>
                            &#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288; 
                            &#12288;&#12288;&#12288;&#12288;&#12288;&#12288; 
                            <router-link to="/forget">忘记密码</router-link>
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
            loginFrom:{
            account:"",
            password:"",
            code:''//输入的code
            },
            
            identifyCodes: "1234567890",
            identifyCode: "",
        }
        
    },
    methods: {
        //验证码
        randomNum(min, max) {//返回随机号码
        return Math.floor(Math.random() * (max - min) + min);
        },
        
        refreshCode() {//更新验证码
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
        },
        makeCode(o, l) {//获取验证码
        for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
        this.randomNum(0, this.identifyCodes.length)
        ];
        }
        console.log(this.identifyCode);
        },
        login(){
            let  _this=this;
            if(this.loginFrom.account===''||this.loginFrom.password===''||this.loginFrom.code===''){
                alert('账户、密码、验证码不能为空！！！');
            }
            if(this.loginFrom.code===this.identifyCode){
                this.$http({
                    method: 'post',
                    url: '/user/login',
                    data: _this.loginForm
                }).then(res => {
                    console.log(res.data);
                    _this.userToken = res.data.data.body.token;
                    // 将用户token保存到vuex中
                    _this.changeLogin({ Authorization: _this.userToken });
                    _this.$router.push('/home');
                    alert('登陆成功');
                    }).catch(error => {
                    alert('账号或密码错误');
                    console.log(error);
                    });
                }else{
                    alert("验证码不正确");
                }
            console.log(JSON.stringify(this.loginFrom));
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

.loginbox{
width: 500px;
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
