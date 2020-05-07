<template>
<!--z事务所主页-->
<div class="one">
    <div class="main">
        <div class="gdp">
            <el-row :gutter="10" type="flex"  justify="space-around">
                <!--选择地区，获取定位，默认北京-->
                <el-col :span="4">
                    <div class="leftSide"></div>
                </el-col>
                <!--显示查询结果-->
                <el-col :span="20">
                    <div class="rightSide">
                        <el-row :gutter="0" type="flex" class="row-bg" justify="space-around">
                            <el-col :span="6" class="adverThings">
                                <div class="grid-content"></div>
                            </el-col>
                            <el-col :span="6" class="adverThings">
                                <div class="grid-content"></div>
                            </el-col>
                            <el-col :span="6" class="adverThings">
                                <div class="grid-content"></div>
                            </el-col>
                            <el-col :span="6" class="adverThings">
                                <div class="grid-content"></div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="rightSide">
                        <el-row :gutter="0" type="flex" class="row-bg" justify="space-around">
                            <el-col :span="6" class="adverThings">
                                <div class="grid-content"></div>
                            </el-col>
                            <el-col :span="6" class="adverThings">
                                <div class="grid-content"></div>
                            </el-col>
                            <el-col :span="6" class="adverThings">
                                <div class="grid-content"></div>
                            </el-col>
                            <el-col :span="6" class="adverThings">
                                <div class="grid-content"></div>
                            </el-col>
                        </el-row>
                    </div>
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
           
        }
    },
    methods: {
        
    }
}
</script>
<style lang="less" scoped>
.one{
  min-width: 1400px;
  margin-top: 1px;
  background:  #ffffff;
}
.main{
  width: 1100px;
  align-content: center;
  margin-left: 140px;
  margin-right: 140px;
  background: rgba(252, 252, 252, 0.973);
  margin-top: 0px;
}
.gdp{
  width: 100%;
  height: 430px;
  background: rgba(251, 251, 251, 0.973);
  text-align: left;
}
.leftSide{
    width: 100%;
    height: 420px;
    background:rgb(77, 80, 74);
}
.rightSide{
    width: 100%;
    height: 205px;
    margin-top: 0px;
}
.row-bg {
    padding: 5px 0;
    background-color:  rgba(251, 251, 251, 0.973);
}
.adverThings{
  width: 225px;
  height: 200px;
  margin-top: 10px;
  margin-left: 0px;
}
</style>
