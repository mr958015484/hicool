<template>
    <div class="login_head">
         <div class="login_box">
            <span  @click="funbasic()" class="user_photo"></span><span class="nick_name">昵称</span>
        </div>
        <img class="anima_img" src="../../../static/fayimg/family-entry.e4e44661ea.gif" >
        <img class="anima_img" src="../../../static/fayimg/arr-page.e4e44661ea.gif" >
    </div>
</template>
<script>
export default {
    methods:{
        funbasic(){
            this.$router.push("/basicinfo")
        }
    }
}
</script>
<style scoped>
.login_head{
    /* width:100%; */
       background-image: url(../../../static/fayimg/header-bg.b98d69725a.jpg);
        background-size: cover;
        margin-top:.5rem;
        height:.9rem;
        display:-webkit-flex;
        -webkit-justify-content: center;
        -webkit-align-items: center;
         padding-left:.16rem;
}
.login_box{
       width:100%;
       height:1.02rem;
       display:-webkit-flex;
       line-height: .3rem;
      -webkit-align-items: center;
    }
    .user_photo{
    width: .5rem;
    height: .5rem;
    background-size: cover;
    background-position: 50%;
    border-radius: 50%;
    overflow: hidden;
    background-image: url(../../../static/fayimg/user-avatar.c163d87b5d.png)
    }
    .nick_name{
        font-size:.16rem;
        color:white;
        margin-left:.20rem;
    }
    .anima_img{
        height:.68rem;
        width:.68rem;
        position:absolute;
        top:.70rem;
        left:3.05rem;
    }
    
</style>