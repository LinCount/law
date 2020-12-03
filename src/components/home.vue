<template>
  <!--基础组件-->
  <div>
    <!--头部-->
    <div>
      <headComponent :uName="userName" :uId="userId">
      </headComponent>
    </div>
    <div>
    <!--中间-->
    <router-view @tuserName="getUserName" @tuserId="getUserId">
    </router-view>
    </div>
    <div>
    <!--脚部-->
    <footComponent></footComponent>
    </div>
  </div>
</template>
<script>
import headComponent from './base/header.vue'
import footComponent from './base/footer.vue'
export default {
  data(){
    return{
      userName: '',
      userId: '',
    }
  },
  components:{
    headComponent,
    footComponent
    },
  methods:{
    getUserName:function(msg){
      this.userName=localStorage.getItem('userName');
      console.log("uu传值成功"+this.userName);
    },
    getUserId:function(msg){
      this.userId=localStorage.getItem('userId');
      console.log("传值成功"+this.userId);
    }
  },
  created(){
    this.userName=localStorage.getItem('userName');
    this.userId=localStorage.getItem('userId');
  }
  
}
</script>
<style lang="less" scoped>

</style>