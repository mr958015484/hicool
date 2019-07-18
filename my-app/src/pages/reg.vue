<template>
  <div class="container">
    <!-- 头部标题 -->
    <div class="top-title">
        <i class="iconfont icon-fanhui" @click="funLogin()"></i>
        <span>注册</span>
    </div>
    <!-- 注册信息部分 -->
    <Regitem :mtype="str" @zipao="funtit">
        <span v-if='icostyle' slot="slota" class="iconfont icon-mimabukejian" @click="changeIco()"></span>
        <span v-else slot="slota" class="iconfont icon-mimakejian" @click="changeIco()"></span>
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