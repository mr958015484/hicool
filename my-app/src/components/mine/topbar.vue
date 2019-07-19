<template>
    <div class="top_bar">
        <i class="iconfont icon-fanhui2" @click="fungoback()"></i>
        <span class="per_center">{{word}}</span>
        <img class="home" src="../../../static/fayimg/home.png" >
    </div>
</template>

<script>
export default {
    props:{
        word:String,
        type:String
    },
    methods:{
        fungoback(){
            if(this.type=="myorder"){
                this.$router.push("/main");
            }else{
                this.$router.go(-1);
            }
           
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
        margin-left:1.2rem;
    }
    .icon-fanhui2{
        color:#fff;
        font-size:.26rem;
        padding:.14rem 0 0 .2rem;
    }
</style>