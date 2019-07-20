<template>
    <div class="container" >
       <!-- 有订单 -->
        <div class="order-list" v-for="(v,i) in ordearr" :key="i">
            <div class="top-title">
                <p>订单编号：{{v.ordercode}}</p>
                <p>{{v.orderstatus}}</p>
            </div>
            <div class="content-infor" v-for="(k,m) in v.products" :key="m">
                <div class="left-img">
                    <img :src="k.imgsrc"  class="images">
                </div>
                <div class="right-content">
                    <div class="describle">
                        <h4>{{k.name}}</h4>
                        <p>颜色：{{k.color}}     尺码：{{k.size}}</p>
                    </div>
                    <div class="pricenum">
                        <p>￥ {{k.saleprice}}
                            <span class="orgin-price">￥ {{k.bargprice}}</span>
                        </p>
                        <p class="num">{{k.num}}</p>
                    </div>
                </div>
            </div>
            <div class="bottom-title">
                <span>共{{v.totalnum}}件商品  实付</span>
                <span class="price-total">￥{{v.totalprice}}</span>
            </div>
            <div class="footer-btn">
                <p>删除订单</p>
                <p>再次购买</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   props:{
       ordearr:Array
   }
}
</script>

<style scoped>

/* 有订单 */
.order-list{
    margin-top: .3rem;
    display:-webkit-flex;
    flex-direction:column;
    background: #fff;
}
.top-title{
    display:-webkit-flex;
    justify-content:space-between;
    align-items: center;
    font-size: .16rem;
    line-height: .5rem;
    border-top:.01rem solid #e0e0e0;
    border-bottom:.01rem solid #e0e0e0;
    padding:0 .2rem;
}
.content-infor{
    padding:.1rem .2rem;
    border-bottom:.01rem solid #e0e0e0;
    display:-webkit-flex;
}
.left-img{
    width:25%;
    height:1.1rem;
    /* background: gray; */
}
.images{
    width:95%;
}
.right-content{
    width:75%;
    display:-webkit-flex;
}
.describle{
    width:69%;
    padding:.1rem 0 0 .05rem;
}
.describle h4{
    font-size:.16rem;
    font-weight:100;
    padding-bottom:.1rem;
}
.describle p{
    font-size:.14rem;
    color:#b6b6b6;
}
.pricenum{
    padding:.1rem 0 0 .08rem;
    font-size: .14rem;
    line-height: .22rem;
}
.orgin-price{
    text-decoration:line-through;
    color:#999;
    display:block;
}
.pricenum p{
    padding-bottom:.1rem;
}
.num{
    text-align:right;
}
.bottom-title{
    padding-right:.2rem;
    font-size:.16rem; 
    text-align: right;
    line-height:.5rem;
    border-bottom:.01rem solid #e0e0e0;
    display:-webkit-flex;
    -webkit-justify-content: flex-end;
}
.bottom-title span{
    display: block;
}
.price-total{
    color:red
}
.footer-btn{
    font-size:.13rem; 
    padding:.1rem 0;
    display:-webkit-flex;
    align-items:center;
    -webkit-justify-content:flex-end;
}
.footer-btn p{
    padding:.08rem .15rem;
    border:.01rem solid #333; 
    border-radius:.08rem;
    margin-right:.18rem;
}
</style>