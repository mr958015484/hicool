<template>
    <div  class="outer-content">
        <!-- 待发货 -->
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