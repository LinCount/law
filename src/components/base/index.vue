<template>
  <div class="one">
    <div class="main">
      <div class="two">
        <!--广告区域-->
        <div class="advertise">
          <div class="adOne">
           <el-row :gutter="20">
              <el-col :span="14" class="adver1"></el-col>
              <el-col :span="7"  class="adver2"></el-col>
            </el-row>
          </div>
          <div class="adOne">
           <el-row :gutter="20">
              <el-col :span="14" class="adver1"></el-col>
              <el-col :span="7"  class="adver2"></el-col>
            </el-row>
          </div>
          <div class="adOne">
           <el-row :gutter="20">
              <el-col :span="14" class="adver1"></el-col>
              <el-col :span="7"  class="adver2"></el-col>
            </el-row>
          </div>
          <div class="adOne">
           <el-row :gutter="20">
              <el-col :span="14" class="adver1"></el-col>
              <el-col :span="7"  class="adver2"></el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="onfooter">

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
        
    },
}
</script>
<style lang="less" scoped>
.one{
  min-width: 1400px;
  margin-top: 0px;
  background:  #e9eef3;
}
.main{
  width: 1100px;
  height: 600px;
  align-content: center;
  margin-left: 140px;
  margin-right: 140px;
  background: white;
  margin-top: 30px;
}
.two{
  border-radius: 8px;
  background: white;
  width: 100%;
  align-content: center;
  margin-top: 0px;
}
.onfooter{
  width: 100%;
  height: 30px;
  background:  #e9eef3;
}
.adOne{
  width: 100%;
  margin-top: 20px;
  background: #ffffff;
  text-align: left;
}
.adver1{
  height: 100px;
  background:lightblue;
  margin-top: 20px;
  margin-left: 50px;
}
.adver2{
  height: 100px;
  background:lightcyan;
  margin-top: 20px;
  margin-left: 30px;
}
</style>