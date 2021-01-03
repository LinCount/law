<template>
  <div class="message">
      <el-row :gutter="20">
        <el-col :span="16">
            {{content}}     &#12288;&#12288;&#12288;&#12288;金额：{{money}}<br>
            {{author}} &#12288;{{time}}
        </el-col>
        <!--按钮区-->
        <el-col :span="8">
            <el-button type="primary" @click="tips">接受</el-button>
            <el-button @click="getDetail">查看详情</el-button>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name: 'message',
    
    props: [
        'id',
        'content',
        'money',
        'author',
        'time'
    ],
    data(){
        return{
            id: this.id,
            content: this.content,
            money: this.money,
            author: this.money,
            time: this.time,
        }
    },
    methods: {
        tips(){
            this.$confirm('此操作将接受用户请求, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            this.$message({
                type: 'success',
                message: '接受成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消'
            });          
            });
        },
        getDetail(id){//发起查询请求

        }
    }
}
</script>

<style>
.message{
    width: 100%;
    height: 40px;
    background: white;
}
</style>