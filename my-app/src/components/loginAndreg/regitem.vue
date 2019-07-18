<template>
  <div class="form-table">
    <div class="input-list">
        <span class="icon-img iconfont icon-shouji-copy"></span>
        <input type="text" placeholder="请输入邮箱" v-model="setemail">
    </div>
    <div class="input-list">
        <span class="icon-img iconfont icon-yanzhengma"></span>
        <input type="text" placeholder="请输入邮箱验证码" v-model="setcode">
        <span class="icon-tit"><slot name="slota"></slot></span>
    </div>
    <div class="input-list">
        <span class="icon-img iconfont icon-mm"></span>
        <input :type="mtype" placeholder="请输入密码" v-model="setpwd">
        <span class="icon-tit"><slot name="slotb"></slot></span>
    </div>
    <div class="input-list">
        <img src="static/img/login1.png" class="ico-image"/>
        <input type="text" placeholder="好友潮流口令（非必填）">
    </div>

    <input type="button" value="注册" class="reg-btn" @click="regSubmit()">
  </div>
</template>

<script>

export default {
  data(){
    return {
      // titbool:false
      setemail:"",  //邮箱
      setcode:"",   //邮箱验证码
      setpwd:"",    //密码
    }
  },
  props:{
      mtype:String
    },
  methods:{
    regSubmit(){
      //1.校验邮箱
            // 邮箱：以数字字母开头，
            // 中间可以是多个数字字母下划线或“—”，
            // 然后是@符号，后面是数字和字母，
            // 然后是"."符号 后加2~4个字母结尾
      var regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      var fremail = false;//标记邮箱验证是否通过
      fremail = regEmail.test(this.setemail)?true:false;

      //2.密码校验
          //长度6~20，字母、数字组合，不能为纯字母或纯数字
          // (?![0-9]+$) 该位置后面不全是数字
          // (?![a-zA-Z]+$) 该位置后面不全是字母
          // [0-9A-Za-z] {6,20} 由6-20位数字或这字母组成
      var regPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
      var frpwd = false;//标记设置密码是否合法
      frpwd = regPwd.test(this.setpwd)?true:false;

      //3.验证码校验
      var frcode = false;//标记输入的验证码是否与发送的验证码一致

      if(this.setemail==""||this.setcode==""||this.setpwd==""){ 
        this.$emit("zipao",{tit:true,content:"请填写完整的注册信息！"});
      }else if(!fremail){ 
        this.$emit("zipao",{tit:true,content:"请确认邮箱是否正确！"});
      }else if(!frpwd){
        this.$emit("zipao",{tit:true,content:"密码需包含字母和数字，且长度在6~20个字符之间"});
      }else{ //设置的邮箱、密码格式无误后，请求校验邮箱验证码（！！！！！！！！待与后端对接）
        this.axios({
          url:"",  //获取生成验证码的地址！！！！！！！！！！！！！！
          method:"get",
          }).then((ok)=>{
            console.log(ok);
          // frcode=(this.setcode==xxx)?true:false;
          })
          if(!frcode){
            this.$emit("zipao",{tit:true,content:"邮箱验证码不正确"});
          }else{  //邮箱、密码、验证码都无误后，发送给服务器，存储用户注册信息
            var paramreg = new URLSearchParams();
            paramreg.append("email",this.setemail);
            paramreg.append("pwd",this.setpwd);
            this.axios({
              url:"",  //保存用户注册信息的地址！！！！！！！！！！！！！
              method:"post",
              data:paramreg
            }).then((regstr)=>{
              //1.注册成功
              //2.邮箱已经注册过，注册失败
            })
          }
      }

    }
  }
};
</script>

<style scoped>
.input-list{
    width:100%;
    padding-top:.2rem;
    display:-webkit-flex;
    border-bottom:.01rem solid  #e0e0e0;
    -webkit-align-items:center;
    position: relative;
}
.input-list .icon-img{
    display:block;
    width:11%;
}
.input-list input{
    display:block;
    width:89%;
    height:.16rem;
    padding:.1rem 0;
    outline:none;
    border:none;
    font-size:.14rem;
}
.ico-image{
  display:block;
  width:4.5%;
  margin-right:.19rem;
}
.reg-btn{
    display:block;
    margin-top:.6rem;
    width:100%;
    font-size:.16rem;
    color:#fff;
    line-height:.36rem;
    text-align: center;
    background-color: #b0b0b0;
    border:none;
    outline:none;
    border-radius:.03rem;
}
.iconfont{
  color:#444;
}
</style>