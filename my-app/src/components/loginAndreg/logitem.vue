<template>
  <div class="form-table">
    <div class="input-list">
        <span class="icon-img"><slot name="slota"></slot></span>
        <input type="text" :placeholder="ntext" v-model="inname" @input="disableFun()">
    </div>
    <div class="input-list">
        <span class="icon-img"><slot name="slotb"></slot></span>
        <input :type="intype" :placeholder="ptext" v-model="inpwd" @input="disableFun()">
        <span class="icon-tit"><slot name="slotc"></slot></span>
    </div>
     
    <input type="button" value="登录" id="login-btn" :class="bool?'disbtn':'actbtn'"  :disabled="bool"  @click="loginSubmit()">
  </div>
</template>

<script>

export default {
    data(){
        return{
            bool:true,  ////控制登陆按钮禁用
            inname:"",  //登陆输入的邮箱或用户名
            inpwd:""     //登陆输入的邮箱验证码或密码
        }
    },
    props:{
        ptext:String,   //placeholder提示信息：请输入邮箱验证码/密码
        ntext:String,   //登陆用户名提示
        intype:String  //密码框类型 type=text 密码可见，type=password 密码不可见
    },
    methods: {
        disableFun(){
            if(this.inname!="" && this.inpwd!=""){
                this.bool=false;
            }
        },
        loginSubmit(){
            //console.log(this.ptext);
            //1.校验邮箱
            var regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            var flemail = false;//标记登陆输入的邮箱验证是否通过
            flemail = regEmail.test(this.inname)?true:false;

            //2.用户名校验
            var regName =/^[a-zA-Z][a-zA-Z0-9]{5,19}$/;
            var flname = false;//标记用户名验证是否通过
            flname = regName.test(this.inname)?true:false;

            //3.密码校验
            var regPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
            var flpwd = false;//标记登陆输入的密码是否合法
            flpwd = regPwd.test(this.inpwd)?true:false;


            if(this.ptext=="请输入密码"){   //登陆方式1：用户名/邮箱、密码登陆————数据库查找用户信息
                if(this.inname==""||this.inpwd==""){
                    this.$emit("logpao1",{tit:true,content:"请填写完整的登录信息"});
                }else if((flemail || flname) && flpwd){ //将用户输入的登陆信息发送，在数据库查找匹配信息
                    var paramlog = new URLSearchParams();
                    paramlog.append("userEmail",this.inname);
                    paramlog.append("userPwd",this.inpwd);  
                    
                    this.axios({
                        url:"http://192.168.43.224:8080/user/loginUser",  //保存用户注册信息的地址！！！！！！！！！！！！！
                        method:"post",
                        data:paramlog
                    }).then((ok)=>{
                        if(ok.data==1){
                            //登录成功将登录状态，用户id存在本地localStrong中
                            window.localStorage.setItem("loginStatus",true);
                            window.localStorage.setItem("userId",ok.data.userid);
                            this.$emit("logpao1",{tit:true,content:"登陆成功"});
                            this.$router.go(-1); //登陆成功回退
                        }else if(ok.data==0){
                            this.$emit("logpao1",{tit:true,content:"账号或密码有错误，请重新输入"});
                        }else if(ok.data==2){
                            this.$emit("logpao1",{tit:true,content:"非法请求，用户处于禁用状态"});
                        }
                        // 1.用户名或邮箱 与密码一致，登陆成功，登陆成功后将登陆状态保存到localStrong
                        // 2.用户禁用
                        // 0.用户名不存在，邮箱或密码有错误，请重新输入//用户名存在，密码不一致，密码有误
                    }) 
                }else if(!flpwd){
                    this.$emit("logpao1",{tit:true,content:"账号或密码有错误，请重新输入"});
                }else{  
                    this.$emit("logpao1",{tit:true,content:"用户名或邮箱格式错误"});
                } 
            }else{    
                //登陆方式2：手机号、手机验证码登陆 ，暂不考虑 
                this.$emit("logpao2",{tit:true,content:"请使用账号密码登陆"});
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
#login-btn{
    display:block;
    margin-top:.6rem;
    width:100%;
    font-size:.16rem;
    color:#fff;
    line-height:.36rem;
    text-align: center;
    border:none;
    outline:none;
    border-radius:.03rem;
}
.disbtn{
    background-color: #b0b0b0;
}
.actbtn{
    background-color: #444;
}
.iconfont{
  color:#444;
}
</style>