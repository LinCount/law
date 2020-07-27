<template>
<!--法律查找主页-->
<div class="one">
    <div class="main">
        <!--查询条件-->
        <br>
        <div class="findAs">
            <el-row>
                <el-col :span="17">
                    <div class="findCondition"><h3>&#12288;法规搜索</h3>
                        <el-form :model="lawForm" style="margin-left: 50px;">
                            <el-form-item>
                                关键词：
                                <el-input v-model="lawForm.world" style="width:250px"></el-input>
                                选择法规数据库：
                                <el-select v-model="lawForm.lawDB" placeholder="" style="width:250px">
                                <el-option :label="1" :value="1"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                选择类别：
                                <el-select v-model="lawForm.type" placeholder="" style="width:80px">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                选择地域：
                                <el-select v-model="lawForm.area" placeholder="" style="width:80px">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                状态：
                                <el-radio v-model="lawForm.state" label="全部">全部</el-radio>
                                <el-radio v-model="lawForm.state" label="有效">有效</el-radio>
                                <el-radio v-model="lawForm.state" label="失效">失效</el-radio>
                                <el-radio v-model="lawForm.state" label="被修订">被修订</el-radio>
                                <el-radio v-model="lawForm.state" label="被修正">被修正</el-radio>
                            </el-form-item>
                            <el-form-item>
                                发布日期范围：
                                <el-input placeholder="请选择日期" suffix-icon="el-icon-date" style="width:130px"></el-input>
                                -到-
                                <el-input placeholder="请选择日期" suffix-icon="el-icon-date" style="width:130px"></el-input>
                                查询范围：
                                <el-radio v-model="lawForm.range" label="标题">标题</el-radio>
                                <el-radio v-model="lawForm.range" label="全文">全文</el-radio>
                            </el-form-item>
                            <el-form-item style="text-align: center;">
                                <el-button type="primary">开始查询</el-button>
                                <el-button type="primary">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
                <el-col :span="7">
                    <!--广告图片区域-->
                    <div>
                        
                    </div>
                </el-col>
            </el-row>
        </div>
        <!--查询结果-->
        <div class="resultAs">

        </div>
    </div>
</div>
</template>
<script>

export default {
    data() {
        return {
           lawForm:{
               world:'',
               lawDB:'',
               type:'',
               area:'',
               state:'全部',
               range:'标题',
           },
           options:[],
        }
    },
    methods: {
        
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
  align-content: center;
  margin-left: 60px;
  background:rgba(252, 252, 252, 0.973);
}
.findAs{
    width: 1100px;
    height: 380px;
    text-align: left;
    margin-left: 100px;
    background: rgba(252, 252, 252, 0.973);
}
.resultAs{
    width: 1000px;
    height: 800px;
    text-align: left;
    margin-left: 100px;
    margin-top: 10px;
    background: rgb(215, 220, 223);
}
.findCondition{
    height: 360px;
    border-width: 50px;
    background: white;
    box-shadow: 10px 10px 5px rgb(236, 235, 235);
}
</style>
