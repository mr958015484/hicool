<template>
    <div class="top_bar">
        <img @click="fungoback()" class="arrow" src="../../../static/fayimg/leftarrow.png" >
        <span class="per_center">{{word}}</span>
        <img class="home" src="../../../static/fayimg/home.png" >
    </div>
</template>

<script>
export default {
    props:{
        word:String,
    },
    methods:{
        fungoback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    .top_bar{
        height:.525rem;
        width:100%;
        background-color:#373737;
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
         margin-left:.74rem;
     }
    .home{
        margin-left:1.02rem;
    }
    
</style>