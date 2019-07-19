<template>
    <div  class="outer-content">
        <!-- 代付款订单 -->
        <Orderspace ></Orderspace>
        <Orderitem ></Orderitem>
    </div>
</template>
<script>
import Orderspace from './orderlist/orderspace'
import Orderitem from './orderlist/orderitem'
export default {
    components:{
        Orderspace,
        Orderitem
    }
}
</script>

<style scoped>
.outer-content{
    background:#fff;
}
</style>