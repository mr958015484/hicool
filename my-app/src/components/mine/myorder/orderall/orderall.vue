<template>
    <div  class="outer-content">
         <Orderitem v-if="ordermun" :ordearr="list"></Orderitem>
         <Orderspace v-else></Orderspace>
    </div>
</template>
<script>
import Orderspace from "./orderlist/orderspace"
import Orderitem from './orderlist/orderitem'
export default {
    data(){
        return {
            ordermun:true,
            list:[
                { id:"1",
                ordercode:"60027525973",
                orderstatus:"已取消",
                products:[ 
                    {productid:"0123",name:"Dickies 箱包 字母学院双肩包",color:"黑色",size:"F",saleprice:128.91,bargprice:210.34,num:1,imgsrc:"static/imgorder/2.jpg"},
                    {productid:"0131",name:"TEEBACCO 字母印花短袖T恤",color:"白色",size:"F",saleprice:131.90,bargprice:198.00,num:2,imgsrc:"static/imgorder/3.jpg"}
                    ],
                totalnum:"3",
                totalprice:"391.8",
                },
                { id:"2",
                ordercode:"60027525894",
                orderstatus:"已付款",
                products:[ 
                    {productid:"0141",name:"VANS Old Skool 36 DX 安纳海姆",color:"绿色/蓝色",size:"38 1/2码",saleprice:210.00,bargprice:299.00,num:1,imgsrc:"static/imgorder/4.jpg"},
                    {productid:"0148",name:"Boy x QQ合作款 青蛙刺绣短袖T恤",color:"紫色",size:"L",saleprice:141.90,bargprice:219.00,num:1,imgsrc:"static/imgorder/5.jpg"}
                    ],
                totalnum:"2",
                totalprice:"351.9",
                }
            ] 
        } 
    },
    components:{
     Orderspace,
     Orderitem
    },
    created(){
        //必须为登录用户
        //发送axios请求查询登陆用户全部订单，若订单为空,ordermun为false
                //订单不为空，将请求的数据赋给data里的空数组，生成全部订单信息
        
    }
}
</script>

<style scoped>
.outer-content{
    background:#fff;
}

</style>