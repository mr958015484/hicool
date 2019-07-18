<template>
<!-- 提示框 -->
    <div class="titbox">
        {{titext}}
    </div>
</template>

<script>
export default {
    props:{
        titext:String
    }
}
</script>

<style scoped>
.titbox{
    width:2rem;
    color:#fff;
    font-size:.14rem;
    text-align: center;
    background: rgba(7,7,7,0.5); 
    border-radius: .1rem;
    padding:.08rem;
    position:absolute;
    top:35%;
    left:0;
    right:0;
    margin:0 auto;
}
</style>