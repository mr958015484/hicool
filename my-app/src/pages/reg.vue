<template>
  <div class="container">
    <!-- 头部标题 -->
    <div class="top-title">
        <i class="iconfont icon-fanhui" @click="funLogin()"></i>
        <span>注册</span>
    </div>
    <!-- 注册信息部分 -->
    <Regitem :mtype="str" @zipao="funtit">
        <span v-if="code" slot="slota" class="code-txt"  @click="timefun()">获取验证码</span>
        <input v-else-if="timestr!=''" type="text" slot="slota" class="code-txt inputbox"  v-model="timestr"/>
        <span v-if='icostyle' slot="slotb" class="iconfont icon-mimabukejian" @click="changeIco()"></span>
        <span v-else slot="slotb" class="iconfont icon-mimakejian" @click="changeIco()"></span>
    </Regitem>
    <!-- 底部信息 -->
    <div class="bottom-part">
       <p>注册即表示您已阅读并同意</p>
      <div class="other-txt">
        <a href="#">HiCool用户服务协议</a>
        <a href="#">HiCool隐私条款</a>
      </div>
    </div>
    <!-- 提示框 -->
    <Titbox v-if="titbool" :titext="titcon"></Titbox>
  </div>
</template>

<script>
import Regitem from "../components/loginAndreg/regitem"
import Titbox from "../components/loginAndreg/titbox"
export default {
  data(){
    return{
      icostyle:true,  //控制密码可见、不可见
      str:"password",  //控制密码框类型
      code:true,    //控制获取验证码
      m:10,       //验证码倒计时长
      timestr:"",    //验证码倒计时框显示与否
      titbool:false,  //控制注册提示信息框显示与否
      titcon:""       //控制注册提示内容
    }
  },
  components:{
    Regitem,
    Titbox
  },
  methods:{
    funLogin(){
      this.$router.push("/login");
    },
    changeIco(){
      this.icostyle=!this.icostyle;
      if(this.icostyle==true){ //icostyle=ture 密码不可见
        this.str="password";
      }else{
        this.str="text"; 
      } 
    },
    timefun(){
      //验证码倒计时
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
    funtit(val){  //控制提示框
      //console.log("bb",val);
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
.container{
  padding:0  10%;
  width:80%;
}
.top-title{
  color:#444;
  display:-webkit-flex;
 -webkit-justify-content:space-between;
  padding-top:.3rem;
  padding-bottom:.2rem;
}
.top-title i{
  display:block;
  width:44%;
  font-size:.21rem;
}
.top-title span{
  display:block;
  width:56%;
  font-size:.17rem;
}
.icon-mimabukejian,.icon-mimakejian{
  position:absolute;
  right:.1rem;
  bottom:.1rem;
}
.code-txt{
  display:block;
  width:.6rem;
  font-size:.08rem;
  color:#fff;
  padding:.05rem;
  background-color:#b0b0b0;
  border-radius:.12rem;
}
.container .inputbox{
  font-size:.12rem;
  border:none;
  height:.16rem;
  border-radius:.12rem;
  padding:.05rem;
  text-align: center;
}
 /* 底部信息 */
.bottom-part{
  margin-top: .1rem;
  font-size: .1rem;
  color:#444;
  letter-spacing:.012rem;
}
.other-txt{
  margin-top:.07rem;
}
.other-txt a{
  color:#c00;
  margin-right: .1rem;
  text-decoration:underline;
}
.container .icon-mimabukejian,.container .icon-mimakejian{
  color:#e0e0e0;
}
</style>