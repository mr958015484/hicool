<template>
    <div class="not_login_head">
        <div class="login_box">
            <span>登录</span><span>/</span><span>注册</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .not_login_head{
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
       width:1.15rem;
       height:.3rem;
       border:1px solid #fff;
       display:-webkit-flex;
       line-height: .3rem;
       -webkit-justify-content: center;
      
    }
    .login_box span{
        font-size:.14rem;
        color:white;
    }
</style>