<template>
    <div class="top_bar">
        <img class="arrow" src="../../../static/fayimg/leftarrow.png" >
        <span class="per_center">个人中心</span>
        <img class="home" src="../../../static/fayimg/home.png" >
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    .top_bar{
        height:.525rem;
        width:3.75rem;
        background-color:#3e3e3e;
        position:fixed;
        top:0px;
        display:flex;
    }
    .per_center{
        font-size:.20rem;
        color:white;
     
    }
    .top_bar span{
         line-height:.525rem;
         margin-left:74px;
     }
    .home{
        margin-left:102px;
    }
    
</style>