<template>
  <div>
    <!-- 头部 -->
      <div class="header">
        <div class="header-inner">
            <i class="iconfont icon-goback" @click="backfun()"></i>
            <a href="#/reg">注册</a>
        </div>
      </div>

    <!-- 表单部分 -->
      <div class="container">
          <!-- 子组件配合槽口实现切换 -->
        <Logitem v-if="lgway"  ptext="请输入验证码" ntext="请输入手机号" @logpao2="titfun">  
          <span slot="slota" class="iconfont icon-shouji-copy"></span>
          <span slot="slotb" class="iconfont icon-yanzhengma"></span>
          <span slot="slotc" class="code-txt" v-if="code" @click="timefun()" >获取验证码</span>
          <input  v-else-if="timestr!=''" type="text" slot="slotc" class="code-txt inputbox"  v-model="timestr"/>
        </Logitem>

        <Logitem v-else ptext="请输入密码" ntext="请输入用户名/邮箱" :intype="str" @logpao1="titfun">  
          <span slot="slota" class="iconfont icon-shouji-copy"></span>
          <span slot="slotb" class="iconfont icon-mm"></span>
          <span slot="slotc" class="iconfont icon-mimabukejian" v-if="icostyle" @click="changeIco()"></span>
          <span slot="slotc" class="iconfont icon-mimakejian" v-else @click="changeIco()"></span>
        </Logitem>


          <!-- 登录方式切换 -->
        <div class="login-way">
          <p v-if="lgway" @click="changeWay()">账号密码登录</p>
          <p v-else  @click="changeWay()">手机验证码登录</p>
          <p>忘记密码？</p>
        </div>
      </div>
      <!-- 提示框 -->
      <Titbox v-if="titbool" :titext="titcon"></Titbox>
  </div>
</template>

<script>
import Logitem from "../components/loginAndreg/logitem"
import Titbox from "../components/loginAndreg/titbox"
export default {
  data(){
    return{
      lgway:false,  //控制登录方式 lgway:true----手机验证码登陆    lgway:false----邮箱密码登陆  
      icostyle:true,  //控制密码可见、不可见
      str:"password",    //控制密码框类型
      code:true,     //控制获取验证码
      m:10,          //验证码倒计时长
      timestr:"",    //验证码倒计时框显示与否
      titbool:false,  //控制登陆提示信息显示与否
      titcon:""       //控制登陆提示内容
    }
  },
  components:{
      Logitem,
      Titbox
  },
  methods:{
    backfun(){
      this.$router.go(-1); //登陆界面回退，待定
    },
    changeWay(){
      this.lgway=!this.lgway;
    },
    changeIco(){
      this.icostyle=!this.icostyle;
      if(this.icostyle==true){ //icostyle=ture 密码不可见
        this.str="password";
      }else{
        this.str="text"; 
      }
      
    },
    timefun(){  //验证码倒计时
      this.m=10;
      this.code=!this.code;
      let colock =null;
      clearInterval(colock);
      colock=window.setInterval(()=>{
       if(this.m==0){
        clearInterval(colock);
        this.code=!this.code;
        this.timestr="";
      }else{
        this.timestr=this.m+"S 后重新获取";
        this.m--;
      }
     },1000)
    },
    titfun(val){  //控制登录信息提示框
     //console.log("log",val);
      this.titbool = val.tit;
      this.titcon = val.content;
      setTimeout(()=>{
        this.titbool = false;
      },5000)
    }
  }
};
</script>

<style scoped>
/* 头部 */
.header{
    height:1.45rem;
    width:100%;
    background:url(../../static/img/log_head.jpg) no-repeat;
    background-size:100% 1.45rem;
    position:relative;
}
.header-inner{
    width:80%;
    padding:0  0.375rem;
    position:absolute;
    top:.25rem;
    height:.26rem;
    display:-webkit-flex;
    -webkit-justify-content:space-between;
    -webkit-align-items: center;
}
.header-inner .icon-goback{
    font-size:.24rem;
    color:#fff;
}
.header-inner a{
    font-size:.14rem;
    color:#fff;
    border: 1px solid #fff;
    border-radius:.15rem;
    color: #fff;
    height: .24rem;
    line-height: .24rem;
    text-align: center;
    width: .53rem;
}
 /* 表单部分 */
.container{
  padding:0 10%;
  width:80%;
}
.iconfont,.code-txt{
  display:block;
}
.code-txt{
  font-size:.08rem;
  color:#fff;
  padding:.05rem;
  background-color:#b0b0b0;
  border-radius:.12rem;
}
.container .inputbox{
  margin-left:2rem;
  font-size:.12rem;
  border:none;
  max-width:28%;
  height:.16rem;
  border-radius:.12rem;
  padding:.05rem;
  text-align: center;
}
/* 登录方式切换 */
.login-way{
  display:-webkit-flex;
  -webkit-justify-content:space-between;
  font-size:.12rem;
}
.login-way p{
  width:50%;
  line-height:.38rem;
}
.login-way p:last-child{
  text-align: right;
}
.container .icon-mimabukejian,.container .icon-mimakejian{
  color:#e0e0e0;
}
</style>
