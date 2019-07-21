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
            list:[]
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
            if(ok.data.orderlist.length==0){  //没有订单
                this.ordermun=false;
            }else{
               this.list=ok.data.orderlist;  //全部订单
            }
           
        }) 
    }
}
</script>

<style scoped>

</style>