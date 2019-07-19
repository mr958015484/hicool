<template>
    <div class="space-content">
        <img src="static/img/order.jpg" width=100px;>
        <p class="order-tit">你还没有订单 !</p>
        <a href="#/home" class="route-link">随便逛逛</a>
    </div>
</template>

<script>
export default {
    components:{
    }
}
</script>

<style scoped>
.space-content{
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    padding-top:.2rem;
}
.order-tit{
    font-size:.14rem;
    color:#444;
    padding-top:.1rem;
    padding-bottom: .5rem;
}
.route-link{
    display:block;
    width:62%;
    padding:.13rem;
    border-radius:.05rem;
    background: #444;
    font-size: .16rem;
    color:#fff;
    text-align: center;
}

</style>