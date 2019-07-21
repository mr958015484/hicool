<template>
    <div  class="outer-content">
        <!-- 待收货 -->
       <Orderitem v-if="ordermun" :ordearr="listtake" ></Orderitem>
        <Orderspace v-else></Orderspace>
    </div>
</template>
<script>
import Orderspace from './orderlist/orderspace'
import Orderitem from './orderlist/orderitem'
export default {
    data(){
        return {
            ordermun:true,
            listtake:[]
        } 
    },
    components:{
        Orderspace,
        Orderitem
    },
    created(){
        //发送axios请求查询登陆用户全部订单，若订单为空,ordermun为false
                //订单不为空，将请求的数据赋给data里的空数组，生成全部订单信息
        this.axios({
            url:"/Hicool/order",
            method:"get"
        }).then((ok)=>{
             if(ok.data.orderlist.length==0){ //没有订单
                this.ordermun=false;
            }else{
               let arr =ok.data.orderlist;
               this.listtake=arr.filter((v,i)=>{
                    //根据订单状态（orderstatus）过滤到 对应的类型的数据展示
                   if(v.orderstatus=="待收货"){
                        return v;
                    }
               })
                    if(this.listtake.length==0){ //若过滤后的数组长度为0，没有代收货订单
                        this.ordermun=false;
                    }
            }
        }) 
    }
}
</script>

<style scoped>
.outer-content{
    background:#fff;
}


</style>