<template>
    <div>
        <router-view></router-view>
        <!-- 头部 -->
           <Topbar class="top_bar" word="基本资料"></Topbar>


          <!-- 基本信息部分 -->
   <div class="totle_info">
        <div class="basic_info">
           <Listbar class="basic_bar userimg"　title="头像" >
               <span slot="contslot" class="userp"></span>  
           </Listbar>
           <Listbar class="basic_bar"　title="昵称" >
               <span slot="contslot" ></span>  
           </Listbar>
            <Listbar class="basic_bar"　title="性别" >
              <span slot="contslot" ></span>  
           </Listbar>
            <Listbar class="basic_bar"　title="生日" >
               <span slot="contslot" ></span>   
           </Listbar>
        </div>

           <!-- 会员信息 -->
           <div class="vip_info">
                <Listbar class="basic_bar"　title="会员等级" >
                        <span slot="contslot" ></span>   
                </Listbar>
                <Listbar class="basic_bar "　title="我的二维码" >
                        <img slot="contslot" class="leftdis" src="../../static/fayimg/littlerwei.png">  
                </Listbar>
                <Listbar class="basic_bar"　title="我的潮口令" >
                        <span slot="contslot" ></span>   
                </Listbar>
           </div>
               <Listbar  class="basic_bar locat" title="地址管理" @click.native="funlocat()" >
                        <span slot="contslot" ></span>   
                </Listbar>
               
      </div>

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
import Topbar from "../components/mine/topbar"
import BottomBar from "../components/bottomBar/bottomBar"
import Listbar from "../components/mine/listbar"
export default {
    components:{
        Topbar,
      Listbar,
       BottomBar,
    },
//     mounted () { 
//     window.addEventListener('scroll', this.scrollToTop)
//    },
    // destroyed () {
    // window.removeEventListener('scroll', this.scrollToTop)
    // },
 
methods: {
  // 点击图片回到顶部方法，加计时器是为了过渡顺滑
  backTop () {
      let that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },

    goback(){
        this.$router.push("/login")
    },
    funlocat(){
        this.$router.push("/location")
    }
  }
 }
</script>
<style scoped>
    .top_bar{
        z-index:10;
    }
    .userp{
    width: .52rem;
    height: .52rem;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #eee;
    background-size: cover;
    background-image: url(../../static/fayimg/user-avatar.c163d87b5d.png);
    margin-left:.8rem;
    }
    .basic_info .userimg{
        height:.6rem;
    }
    
    .basic_bar{
        border-bottom:1px solid #e0e0e0;
    }
    .vip_info{
        padding-left:.15rem;
        border-top:.15rem solid #f0f0f0;
        border-bottom:.15rem solid #f0f0f0;
    }
    .basic_info{
        padding-left:.15rem;
        margin-top:.525rem;
        /* padding-left:.15rem; */
    }
    .locat{
          padding-left:.15rem;
    }
    .leftdis{
        margin-left:1.2rem;
    }
    .go_top{
      display:-webkit-flex;
      height:.7rem;
      -webkit-align-items: center;
       font-size:.14rem;
       padding-left:.15rem;
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
        /* font-weight:900; */
        border-top:3px solid black;
        border-left:3px solid black;
        -webkit-transform: rotate(45deg);
  }
</style>

