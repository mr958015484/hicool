<template>
    <div class="container">
        <Topbar word="我的订单" type="myorder" class="topbar"></Topbar>
        <div class="main-content">
            <Orderwarn></Orderwarn>
            <div class="router-menu">
                <router-link to="/myorder/orderall" class="item">全部</router-link>
                <router-link to="/myorder/orderpay" class="item">待付款</router-link>
                <router-link to="/myorder/orderdeliver" class="item">待发货</router-link>
                <router-link to="/myorder/ordertake" class="item">待收货</router-link>
            </div>
            <router-view ></router-view>
        </div>
        <Gobacktop></Gobacktop>
        
    </div>
</template>
<script>
import Topbar from "../topbar"
import Gobacktop from "../gobacktop"
import Orderwarn from "./orderall/orderlist/orderwarn"
export default {
    components:{
        Topbar,
        Gobacktop,
        Orderwarn
    }
}
</script>

<style scoped>
.container{
    margin-top:.5rem;
    background:#f0f0f0;
    position:relative;
}
.main-content{
    display:-webkit-flex;
    flex-direction:column;
    overflow-y:auto;
    background:#f0f0f0;
}
.router-menu{
    display:-webkit-flex;
    border-top:.01rem solid #e0e0e0;
    border-bottom:.01rem solid #e0e0e0;
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
.topbar{
    z-index:100;
}
</style>