<template>

    <transition name = "fade">
        <div v-show = "show" class = "styleobj">
            <div class="choice">
                <p>确定删除订单吗?</p>
                <div class="select-way">
                    <span @click="cancelFun()">取消</span>
                    <span style="color:red;" @click="confirmFun()">确定</span>
                </div>
            </div>

        </div>
    </transition> 

</template>

<script>
export default {
    props:{
        show:Boolean,
    },
    methods:{
        cancelFun(){   //将值抛出给父组件中的数据，操作弹框出现或消失
            this.$emit("delpao",{isdel:false,style:this.show});
        },
        confirmFun(){
            this.$emit("delpao",{isdel:true,style:this.show});
        }
    }
    
}
</script>

<style scoped>
.styleobj{
    width:100%;
    height:100%;
    background:rgba(2,2,2,0.3);
    position:absolute;
    top:0;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s
}
/* .fade-leave-active, 2.1.8 版本以下 */
.fade-enter, .fade-leave-to  {  
    opacity: 0
}
.choice{
    width:80%;
    height:1.35rem;
    font-size:.18rem;
    color:#000;
    background:rgba(255, 255, 255, 0.9);
    border-radius:.1rem;
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
}
.choice p{
    line-height:.9rem;
    text-align: center;
}
.select-way{
    display:-webkit-flex;
}
.select-way span{
    font-size:.17rem;
    display:block;
    width:50%;
    text-align: center;
    line-height:.44rem;
    border-top:.01rem solid #ddd;
}
.select-way span:last-child{
    border-left:.01rem solid #ddd;
}
</style>
