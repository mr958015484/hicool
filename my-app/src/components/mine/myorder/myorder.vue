<template>
    <div class="container">
        
        <div class="main-content">
            <div class="router-menu">
                <router-link to="/myorder/orderall" class="item">全部</router-link>
                <router-link to="/myorder/orderpay" class="item">待付款</router-link>
                <router-link to="/myorder/orderdeliver" class="item">待发货</router-link>
                <router-link to="/myorder/ordertake" class="item">待收货</router-link>
            </div>
            <router-view ></router-view>
        </div>
         
        
    </div>
</template>
<script>

export default {
    components:{
    },
    created(){
        //接收路由传参过来的登陆状态,未登录踢到登陆页面
        
    }
}
</script>

<style scoped>
.container{
    background:#f0f0f0;
}
.main-content{
   
}
.router-menu{
    display:-webkit-flex;
    border-top:.01rem solid #e0e0e0;
    border-bottom:.01rem solid #e0e0e0;
    margin-top: .1rem;
    background: #fff;
} 
.item{
    color:#b0b0b0;
    width:25%;
    text-align: center;
    font-size:.14rem;
    line-height: .5rem;
}
.router-link-active{
    color:#333;
}
</style>