<template>
    <!--轮播图组件-->
    <el-carousel height="520px" :interval="3000" arrow="always">
        <el-carousel-item>
            <img src="" alt="">
        </el-carousel-item>
        <el-carousel-item>
            <img src="" alt="">
        </el-carousel-item>
        <el-carousel-item>
            <img src="" alt="">
        </el-carousel-item>
    </el-carousel>
</template>
<script>
    export default {
        name: "Banner",
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }