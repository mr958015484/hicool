<template>
    <div class="mine_body">
        <!-- 顶部棒 -->
        <Topbar></Topbar>
        <!-- 没登录的时候的头部 -->
        <!-- <Notlogin></Notlogin> -->
        <Loginhead></Loginhead>
        <!-- 默认购物频道 -->
        <Listbar class="first_list"　title="默认购物频道" word="男士MEN"></Listbar>
        <Listbar title="我的订单" word="全部订单"></Listbar>
       <div class="cont_list">
           <div class="icon_box">
                <span class="iconfont icon-ziyuan iconimg iconimg1"></span>
                <span class="icon_word">待付款</span>
           </div>
            <div class="icon_box">
                <span class="iconfont icon-daifahuo iconimg"></span>
                <span class="icon_word">待发货</span>
           </div>
            <div class="icon_box"> 
                <span class="iconfont icon-daishouhuo iconimg"></span>
                <span class="icon_word">待收货</span>
           </div>
       </div>
       <div class="cont_list">
            <div class="icon_box">
                <span class="icon_word">0</span>
                <span class="icon_word">商品收藏</span>
           </div>
            <div class="icon_box">
                <span class="icon_word">0</span>
                <span class="icon_word">品牌收藏</span>
           </div>
            <div class="icon_box"> 
                <span class="icon_word">0</span>
                <span class="icon_word">浏览记录</span>
           </div>
       </div>
   <!-- 优惠券 -->

   <div class="icon_big_box">
      <div class="icon_bar"><span class="iconfont icon-coupon icon_img"></span><div class="icon_bar_right"><span class="icon_des">优惠券</span><span class="little_arrow"></span></div></div>
        <div class="icon_bar"><span class="iconfont icon-juyouhuobishuxing icon_img"></span><div class="icon_bar_right"><span class="icon_des">有货币</span><span class="little_arrow"></span></div></div>
   </div>
    <div  class="icon_big_box">
      <div class="icon_bar"><span class="iconfont icon-xiaoxi icon_img"></span><div class="icon_bar_right"><span class="icon_des">消息</span><span class="little_arrow"></span></div></div>
        <div class="icon_bar"><span class="iconfont icon-erji icon_img"></span><div class="icon_bar_right"><span class="icon_des">服务与反馈</span><span class="little_arrow"></span></div></div>
   </div>

   <!-- 广告图片 -->
  <img class="ad_img" src="static/fayimg/mine_ad_pic1.jpg" >
  <img class="ad_img" src="static/fayimg/mine_ad_pic2.jpg" >

       
    </div>
</template>

<script>
import BottomBar from "../components/bottomBar/bottomBar"
import Topbar from "../components/mine/topbar"
import Notlogin from "../components/mine/notloginHead"
import Loginhead from "../components/mine/loginhead"
import Listbar from "../components/mine/listbar"

export default {
    components: {
      BottomBar,
      Topbar,
      Notlogin,
      Loginhead,
      Listbar,
     
  }
}
</script>

<style scoped>
.mine_body{
    background:#f0f0f0;
}
.first_list{
    margin-bottom:.1rem;
}
.mine_body .cont_list{
    display:-webkit-flex;
    align-items:center;
    height:.72rem;
    background:white;
    border-top:1px solid #f0f0f0;
}
.icon_box .iconimg1{
    font-size:.18rem;
}
.iconimg{
    font-size:.26rem;
    text-align:center;
}
.icon_word{
    font-size:.14rem;
     text-align:center;
}
.icon_box{
    width:33%;
}
.little_arrow{
        height:.1rem;
        width:.1rem;
        font-weight:900;
        border-top:2px solid #e0e0e0;
        border-right:2px solid #e0e0e0;
        -webkit-transform: rotate(45deg);
    }
.icon_des{
    font-size:.16rem;
}
.icon_bar{
    display:flex;
    background:white;
    height:.44rem;
    align-items: center;
    padding-left:.15rem;
}
.icon_bar_right{
    display:flex;
    border-bottom:1px solid #f0f0f0;
    width:3.3rem;
    margin-left:.15rem;
    -webkit-justify-content: space-between;
    padding-right:.3rem;
    }
.icon_big_box{
    margin-top:.15rem;
}
 .icon_img{
     font-size:.18rem;
 }
 .ad_img{
     width:100%;
     margin-top:.15rem;
 }

</style>
