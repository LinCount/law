<template>
    <div class="footer">
        <!--切割线-->
      <div class="tableTitle"><span class="midText"></span></div>
      <div>
          <br>
      制作者：LinCount &#12288; &#12288;&#12288; &#12288;
      联系方式：xxxxx &#12288; &#12288;&#12288; &#12288;
      网站声明：仅供学习所用
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
<style lang="less" scope>
.footer{
  background-color: #ffffff;
  color: #e9eef3;
  text-align: center;
  margin-top: 3px;
  width: 100%;
  height: 100px;
}
.tableTitle {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 16px;
    color: rgba(101, 101, 101, 1);
    width: 100%;
  }
 .midText {
    position: absolute;
    left: 50%;
    background-color: #ffffff;
    padding: 0 15px;
    transform: translateX(-50%) translateY(-50%);
  }
</style>