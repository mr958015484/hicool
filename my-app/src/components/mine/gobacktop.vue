<template>
    <div>
         <!-- 退出，回到顶部  -->
       
       <div class="go_top">
           Hi,
           <span class="niname"> 昵称</span>
            <span class="goback" @click="goback()">退出</span> 
            <span class="go_to_top" @click="backTop()">回到顶部</span> 
            <span class="toparrow"></span>
       </div>
       <!-- footer -->
       <footer class="foot"> 
        CopyRight©2007-2019 南京新与力文化传播有限公司
       </footer>
    </div>
</template>
<script>

export default {
    components:{
      
    },
    methods:{
         // 点击图片回到顶部方法，加计时器是为了过渡顺滑
        backTop(){
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        // let that = this
        // let timer = setInterval(() => {
        //     let ispeed = Math.floor(-that.scrollTop / 5)
        //     document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        //     if (that.scrollTop === 0) {
        //     clearInterval(timer)
        //         }
        //     }, 16)
        },
        goback(){  //退出
            window.localStorage.setItem("loginStatus",""); //清空登录状态
            this.$router.push("/login")
            },
        }
}
</script>

<style scoped>
 .go_top{
    display:-webkit-flex;
    height:.7rem;
    -webkit-align-items: center;
    font-size:.14rem;
    padding-left:.15rem;
    background:#fff;
    border-top:.01rem solid #e0e0e0;
    }
    .foot{
        height:.6rem;
        text-align:center;
        line-height:.6rem;
        font-size:.12rem;
        background:#eee;
    }
    .niname{
        width:1.17rem;
        border-right:2px solid #eee;
    }
    .goback{
        width:1.1rem;
        padding-left:.05rem;
    }
    .go_to_top{
     width:.6rem;
   }
  .toparrow{
    height:.05rem;
    width:.05rem;
    margin-left:.05rem;
    border-top:2px solid #0e0d0d;
    border-left:2px solid #0e0d0d;
    -webkit-transform: rotate(45deg);
  }
</style>