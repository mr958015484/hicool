<template>
    <div>
        <a href="#" class="warn-content">
            <span class="iconfont icon-fanhui2"></span>
            <span class="remind">关于防诈骗的重要提醒</span>
            <span>Hicool不会以任何理由要求您退货退款，请您提高警惕。</span>
        </a>
    </div>
   
</template>

<script>
export default {
    
}
</script>
<style scoped>
    .warn-content{
        padding:.12rem;
        color:#aaa;
        font-size:.12rem;
        position:relative;
        background: #fff;
        margin-bottom: .2rem;
        text-indent:.1rem;
    }
    .icon-fanhui2{
        display:block;
        position:absolute;
        transform: rotate(180deg);
        right:.15rem;
        top:.28rem;
    }
    .remind{
        
        color:#444;
        font-size:.14rem;
        line-height:.28rem;
    }
    span{
        display:block;
    }
</style>