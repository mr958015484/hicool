<template>
    <div  class="outer-content">
        <!-- 代付款订单 -->
         <Orderitem v-if="ordermun" :ordearr="listpay"></Orderitem>
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
            listpay:[]
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
              //console.log(ok.data.orderlist);
            if(ok.data.orderlist.length==0){ //没有任何订单
                this.ordermun=false;
            }else{
               let arr=ok.data.orderlist;
               this.listpay=arr.filter((v,i)=>{
                    //根据订单状态（orderstatus）过滤到 对应的类型的数据展示
                   if(v.orderstatus=="待付款"){
                        return v;
                    }
                })
                    if(this.listpay.length==0){ //若过滤后的数组长度为0，没有代付款订单
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