<template>
    <div>

        <router-view ></router-view>

        <div class="router-menu">
            <router-link to="/orderall" class="item">全部</router-link>
            <router-link to="/orderpay" class="item">待付款</router-link>
            <router-link to="/orderdeliver" class="item">待发货</router-link>
            <router-link to="/ordertake" class="item">待收货</router-link>
        </div>


    </div>
</template>
<script>
export default {
    compontents:{

    }
}
</script>

<style scoped>
.router-menu{
    display:-webkit-flex;
} 
.item{
    color:#b0b0b0;
    width:25%;
    text-align: center;
    font-size:.14rem;
}
</style>