<template>
  <div class="form-table">
    <div class="input-list">
        <span class="icon-img"><slot name="slota"></slot></span>
        <input type="text" placeholder="请输入邮箱" v-model="inemail">
    </div>
    <div class="input-list">
        <span class="icon-img"><slot name="slotb"></slot></span>
        <input :type="intype" :placeholder="ptext" v-model="incode">
        <span class="icon-tit"><slot name="slotc"></slot></span>
    </div>
     
    <input type="button" value="登录" class="login-btn" @click="loginSubmit()">
  </div>
</template>

<script>

export default {
    data(){
        return{
            inemail:"",  //登陆输入的邮箱
            incode:""     //登陆输入的邮箱验证码或密码
        }
    },
    props:{
        ptext:String,   //placeholder提示信息：请输入邮箱验证码/密码
        intype:String  //密码框类型 type=text 密码可见，type=password 密码不可见
    },
    methods: {
        loginSubmit(){
            console.log(this.ptext);
            //1.校验邮箱
            var regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            var flemail = false;//标记登陆输入的邮箱验证是否通过
            flemail = regEmail.test(this.inemail)?true:false;

            //2.密码校验
            var regPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
            var flpwd = false;//标记登陆输入的密码是否合法

            // 3.邮箱验证码校验
            var flcode =  false;//标记验证码是否一致

            if(this.ptext=="请输入密码"){   //登陆方式1：邮箱、密码登陆————数据库查找用户信息
                flpwd = regPwd.test(this.incode)?true:false;
                if(!flemail){
                    this.$emit("logpao1",{tit:true,content:"登陆邮箱格式错误"});
                }else if(!flpwd){
                    this.$emit("logpao1",{tit:true,content:"邮箱或密码有错误，请重新输入"});
                }else{   //将用户输入的登陆信息发送，在数据库查找匹配信息
                    var paramlog = new URLSearchParams();
                    paramlog.append("email",this.inemail);
                    paramlog.append("pwd",this.incode);
                    this.axios({
                        url:"",  //存储用户信息接口！！！！！！！！！！！！！！
                        method:"post",
                        data:paramlog
                    }).then((ok)=>{
                        // 1.用户名与密码一致，登陆成功
                        // 2.用户名存在，密码不一致，密码有误
                        // 3.用户名不存在，邮箱或密码有错误，请重新输入
                    })
                } 
            }else{         
                //登陆方式2：邮箱、邮箱验证码登陆————验证邮箱验证码是否一致
                this.axios({   
                    url:"",  //获取生成验证码的地址！！！！！！！！！！！！！！！！！！！！！！
                    method:"get"
                }).then((ok)=>{
                    // flcode=(this.incode==xxx)?true:false;
                })
                if(!flemail){
                    this.$emit("logpao2",{tit:true,content:"登陆邮箱格式错误"});
                }else if(!flcode){
                     this.$emit("logpao2",{tit:true,content:"邮箱验证码有误"});
                }else {
                    //使用邮箱验证码登录成功  将用户邮箱存入用户信息库，密码为空
                    var paramshort = new URLSearchParams();
                    paramshort.append("email",this.inemail);
                    this.axios({
                    url:"",  //保存用户注册信息的地址！！！！！！！！！！！！！
                    method:"post",
                    data:paramshort
                    }).then((regstr)=>{
                        // 登录成功
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
.icon-tit{
    position:absolute;
    right:0;
}
.login-btn{
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