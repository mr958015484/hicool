<template>
  <div class="form-table">
    <div class="input-list">
        <span class="ico-image iconfont icon-mine-gray"></span>
        <input type="text" placeholder="请输入用户名" v-model="setname" >
    </div>
    <div class="input-list">
        <span class="icon-img iconfont icon-youxiang"></span>
        <input type="text" placeholder="请输入邮箱" v-model="setemail">
    </div>
    <div class="input-list">
        <span class="icon-img iconfont icon-mm"></span>
        <input :type="mtype" placeholder="请输入密码" v-model="setpwd">
        <span class="icon-tit"><slot name="slota"></slot></span>
    </div>

    <input type="button" value="注册" class="reg-btn" @click="regSubmit()">
  </div>
</template>

<script>

export default {
  data(){
    return {
      // titbool:false
      setname:"",   //用户名
      setemail:"",  //邮箱
      setpwd:"",    //密码
    }
  },
  props:{
      mtype:String
    },
  methods:{
    regSubmit(){
      //1.用户名校验
        //以英文字母开头，只能包含英文字母、数字6-20位
      var regName =/^[a-zA-Z][a-zA-Z0-9]{5,19}$/;
      var frname = false;//标记用户名验证是否通过
      frname = regName.test(this.setname)?true:false;

      //2.校验邮箱
            // 邮箱：以数字字母开头，
            // 中间可以是多个数字字母下划线或“—”，
            // 然后是@符号，后面是数字和字母，
            // 然后是"."符号 后加2~4个字母结尾
      var regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      var fremail = false;//标记邮箱验证是否通过
      fremail = regEmail.test(this.setemail)?true:false;

      //3.密码校验
          //长度6~20，字母、数字组合，不能为纯字母或纯数字
          // (?![0-9]+$) 该位置后面不全是数字
          // (?![a-zA-Z]+$) 该位置后面不全是字母
          // [0-9A-Za-z] {6,20} 由6-20位数字或这字母组成
      var regPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
      var frpwd = false;//标记设置密码是否合法
      frpwd = regPwd.test(this.setpwd)?true:false;

      if(this.setemail==""||this.setname==""||this.setpwd==""){ 
        this.$emit("zipao",{tit:true,content:"请填写完整的注册信息！"});
      }else if(!frname){ 
        this.$emit("zipao",{tit:true,content:"用户名需以字母开头，且长度在6~20个字符之间"});
      }else if(!fremail){
        this.$emit("zipao",{tit:true,content:"请确认邮箱是否正确！"});
      }else if(!frpwd){
        this.$emit("zipao",{tit:true,content:"密码需包含字母和数字，且长度在6~20个字符之间"});
      }else{  //用户名、邮箱、密码格式都无误后，发送给服务器，存储用户注册信息
            var paramreg = new URLSearchParams();
            paramreg.append("uname",this.setname);
            paramreg.append("email",this.setemail);
            paramreg.append("pwd",this.setpwd);
            this.axios({
              url:"",  //保存用户注册信息的地址！！！！！！！！！！！！！
              method:"post",
              data:paramreg
            }).then((regstr)=>{
              //1.注册成功---this.$emit("zipao",{tit:true,content:"请前往邮箱激活后登陆"});
              //2.用户名已存在，注册失败
            })
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