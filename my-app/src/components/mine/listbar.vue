<template>
    <div class="list_bar">
        <span class="title">{{title}}</span><span class="word">{{word}}</span><span class="little_arrow"></span>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        word:String
    }
}
</script>
<style scoped>
    .little_arrow{
        height:.1rem;
        width:.1rem;
        font-weight:900;
        border-top:1px solid #e0e0e0;
        border-right:1px solid #e0e0e0;
        -webkit-transform: rotate(45deg);
    }
    .list_bar {
        display:flex;
        height:.36rem;
        background:white;
        -webkit-align-items: center;
    }

    .list_bar .title{
        font-size:14px;
        width:1.8rem;
        padding-left:.15rem;

    }
    .list_bar .word{
       font-size:12px;
       width:1.5rem;
      text-align: right;

    }
</style>