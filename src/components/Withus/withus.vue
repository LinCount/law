<template>
<!--咨询页面-->
<div class="one">
    <div class="main">
        <div class="withus">
            <el-row :gutter="0" type="flex"  justify="space-around">
                <el-col :span="13">
                    <div class="withusform">
                        <br>
                        &#12288;&#12288;&#12288;<a class="text">免费法律咨询</a> &#12288;&#12288;
                        <a href="" style="color:rgba(181, 181, 189, 0.9);font-size:14px">更多咨询</a>
                        <br><br>&#12288;&#12288;&#12288;<a style="color:rgba(181, 181, 189, 0.9);font-size:16px">有法律疑惑，马上免费在线咨询，您的法律疑问我们来解决</a>
                        <br>
                        <br><br>
                        <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="请在这里详细输入您要咨询的问题(15-200字)"
                        v-model="textarea" 
                        show-word-limit
                        maxlength="200"
                        minlength="15"
                        style="width:470px;margin-left:50px">
                        </el-input>
                        <br>&#12288;&#12288;&#12288;
                        <el-select v-model="withtype" size="small" style="width:150px;margin-top:5px" clearable placeholder="请选择问题类型">
                            <el-option
                            v-for="item in withtypes"
                            :key="item.key"
                            :label="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <br><br>
                        <center><button class="btus">立即咨询</button></center>
                        <br>
                        <el-row :gutter="10" class="rowtest">
                            <el-col :span="8" >
                                &#12288;&#12288;&#12288;&#12288;<li class="el-icon-s-custom"></li><br>&#12288;&#12288;&#12288;专业律师团队
                            </el-col>
                            <el-col :span="8">
                                <li class="el-icon-s-custom" style="margin-left:25px"></li><br>&#12288;24小时在线
                            </el-col>
                            <el-col :span="8">
                               <li class="el-icon-s-custom" style="margin-left:10px"></li><br>多渠道回复
                            </el-col>
                        </el-row>
                   </div>
                </el-col>
                 <el-col :span="9">
                     <div class="withusrecom">
                         <!--查找的回复-->
                         <div class="text">论坛信息   &#12288;&#12288;<a style="font-size:7px">您的专属消息</a></div>
                         <div class="self">
                             <br>
                             <el-badge :value="12" class="tagInfo">
                                 <a href=""><el-tag type="success">已发帖</el-tag></a>
                             </el-badge>
                             <el-badge :value="12" class="tagInfo">
                                 <a href=""><el-tag type="warning">评论</el-tag></a>
                             </el-badge>
                             <el-badge :value="12" class="tagInfo">
                                 <a href=""><el-tag>回复</el-tag></a>
                             </el-badge>
                             <el-badge :value="12" class="tagInfo">
                                 <a href=""><el-tag type="success">点赞</el-tag></a>
                             </el-badge>
                             <el-badge :value="12" class="tagInfo">
                                 <a href=""><el-tag type="warning">点踩</el-tag></a>
                             </el-badge>
                             <el-badge :value="12" class="tagInfo">
                                 <a href=""><el-tag>律师评论</el-tag></a>
                             </el-badge>
                         </div>
                         <br>
                         <div class="text">查找帖子  &#12288;&#12288;<a style="font-size:7px">快速了解您的难点</a></div>
                         <br>
                         <div class="initiation">
                             <el-input placeholder="输入帖子关键词" v-model="findInitiation" class="input-with-select">
                                <el-select v-model="select" slot="prepend" placeholder="请选择" style="width:110px">
                                    <el-option :label="item.value" :value="item.key"  v-for="item in withtypes" :key="item.key"></el-option> 
                                </el-select>
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                         </div>
                         <br><br>
                         <div class="text"><a>按类型寻找</a>  &#12288;&#12288;<a style="font-size:7px">快速解决您的疑问</a></div>
                         <br>
                         <div class="findString">
                             <a href="" v-for="item in withtypes" :key="item.key"> <a v-if="item.key%2===0" style="color:rgb(130, 161, 201)">&#12288;{{item.value}}&#12288;&#12288;</a>
                             <a v-if="item.key%2===1" style="color:rgb(47, 233, 233)">&#12288;&#12288;{{item.value}}</a>&#12288;
                             <a v-if="item.key%3===0"><br></a>
                             </a>
                         </div>
                     </div>
                 </el-col>
            </el-row>
        </div>
        <div class="history">
            <el-row :gutter="0" type="flex"  justify="space-around">
                <el-col :span="17">
                    <div class="historyInfo">
                            <br>
                            <el-tabs v-model="activeName"  @tab-click="handleClick">
                                <el-tab-pane label="   精选咨询" name="one">
                                    <div class="historyContent" v-for="content in withuscontents" :key="content.id">
                                        <a style="font-size:23px;color:black;font-weight:bold">【{{content.type}}】{{content.title}}</a>
                                        <br><br>
                                        <el-row :gutter="10">
                                            <el-col :span="6">
                                            &#12288;{{content.time}}
                                            </el-col>
                                            <el-col :span="10"> &#12288;&#12288;</el-col>
                                            <el-col :span="8">
                                                {{content.analysenum}}人回复
                                                &#12288;&#12288;地区：{{content.area}}
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="历史咨询" name="two">
                                </el-tab-pane>
                            </el-tabs>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="historyRight"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</div>
</template>
<script>

export default {
    data() {
        return {
            color:["","",""],
           select:'',
           findInitiation:'',
           textarea:'',
           withtype:'',
           withtypes:[
               {key:1,value:'民间借贷'},{key:2,value:'婚姻家庭'},{key:3,value:'财产继承'},{key:4,value:'消费维权'},
               {key:5,value:'劳动仲裁'},{key:6,value:'交通事故'},{key:7,value:'刑事案件'},{key:8,value:'公司'},
               {key:9,value:'合同纠纷'},{key:10,value:'拆迁征收'},{key:11,value:'人身损害'},{key:12,value:'其他案件'}
           ],
            withuscontents:[
                {id:'1',title:'11111',type:'民间借贷',time:'45分钟之前',area:'广州',analysenum:'4'}
            ],
            activeName:'one',
            withLaw:[
                {lid:1,name:'小刘',imgUrl:'E:\\vue\\law\\src\\assets\\img\\uslaw.jpg',codeUrl:'E:\\vue\\law\\src\\assets\\img\\lawyer_code.jpg'}
            ],
        }
    },
    methods: {
        handleClick(tab, event) {
        }
    }
}
</script>
<style lang="less" scoped>
.one{
  min-width: 1300px;
  margin-top: 0px;
  background:  rgba(252, 252, 252, 0.973);
}
.main{
  width: 1200px;
  align-content: center;
  margin-left: 60px;
  background:rgba(252, 252, 252, 0.973);
  margin-top: 0px;
}
.withus{
    width: 100%;
    height: 480px;
    border-radius: 10px;
}
.withusform{
    width: 600px;
    height: 420px;
    text-align: left;
    margin-top: 20px;
    margin-left: 30px;
    border-radius: 20px;
    background: white;
    box-shadow: 10px 10px 5px rgb(236, 235, 235);
}
.withusrecom{
    width: 440px;
    height: 420px;
    margin-top: 20px;
    margin-left: 10px;
    text-align: left;
    border-radius: 20px;
    background: white;
    box-shadow: 10px 10px 5px rgb(236, 235, 235);
}
.text{
    font-size:20px;
    margin-left: 20px;
    font-weight: bold;
    color:rgb(130, 161, 201);
    text-align:left;
}
.self{
    width: 90%;
    height: 110px;
    margin-left: 20px;
    box-shadow: 5px 5px 2px rgb(236, 235, 235);
}
.tagInfo{
    margin-top: 10px;
    margin-right: 40px;
}
.findString{
    width:90%;
    margin-left: 30px;
    color: rgb(47, 233, 233);
}
.btus{
    width:120px;
    height:40px;
    border-radius: 6px;
    background:rgba(248, 226, 27, 0.767);
    color:white;
    font-weight: bold;
    font-size: 17px;
}
.el-icon-s-custom{
    font-size: 60px;
    color:rgb(144, 163, 163);
}
.rowtest{
    font-size:15px
}
.history{
    width: 100%;
    height: 800px;
    border-radius: 30px;
}
.historyInfo{
    height: 770px;
    border-radius: 20px;
    margin-left: 15px;
    background:white;
    box-shadow: 10px 10px 5px rgb(236, 235, 235);
}
.historyRight{
    height: 770px;
    border-radius: 20px;
    background:white;
    box-shadow: 10px 10px 5px rgb(236, 235, 235);
}
.historyContent{
    border: solid ;
    border-width: 1px;
    border-color: white white rgba(245, 245, 245, 0.973) white;
    width: 95%;
    height: 70px;
    margin-left: 20px;
    margin-top: 10px;
    text-align: left;
    font-size: 10px;
}
.el-tabs{
    font-size: 20px;
    color: black;
    margin-left: 20px;
    text-align: left;
}
.initiation{
    width: 90%;
    margin-left: 20px;
}
 .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
