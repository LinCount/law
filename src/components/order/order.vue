<template>
<div class="one">
    <div>
        <!--付费咨询-->
        <template>
            <div class="orderContent">
                <el-row type="flex" justify="center">
                   
                    <el-col :span="4">
                        <div class="sight">
                            <el-select v-model="type" placeholder="请选择类型">
                                <el-option
                                v-for="item in selects"
                                :key="item.value"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <br>
                            价格筛选
                            <br>
                            附件筛选
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="sight">
                            咨询展示
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="sight">
                            个人金库
                        </div>
                    </el-col>
                </el-row>
            </div>
        </template>
    </div>
    <div>
        <!--免费咨询-->
        <template>

        </template>
    </div>
</div>
</template>
<script>

export default {
    data() {
        
        return {
            type:'',
            selects:[
               {key:1,value:'民间借贷'},{key:2,value:'婚姻家庭'},{key:3,value:'财产继承'},{key:4,value:'消费维权'},
               {key:5,value:'劳动仲裁'},{key:6,value:'交通事故'},{key:7,value:'刑事案件'},{key:8,value:'公司'},
               {key:9,value:'合同纠纷'},{key:10,value:'拆迁征收'},{key:11,value:'人身损害'},{key:12,value:'其他案件'}
           ],
        }
        
    },
    methods: {
    goBack(){
        history.back();
        console.log('退出律师专属');
    },
    mounted(){
        
    },
    created(){
        
    }
    }
}
</script>
<style lang="less" scoped>
.one{
  min-width: 1300px;
  margin-top: 0px;
  background: white;
  height: 550px;
}
.orderContent{
    width: 100%;
    background: white;
}
.sight{
    background: rgba(251, 251, 251, 0.973);
}
</style>
