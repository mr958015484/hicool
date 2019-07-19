<template>
    <div>
        <!-- 头部 -->
        <div class="address_head">
        <img @click="fungoback()" class="arrow" src="../../static/fayimg/leftarrow.png" >
       
            <span class="per_center">添加地址</span>
        </div>
        <!-- 提示信息 -->
        <div class="address_content">
        <div class="noloc_notice">
            为提高配送时效，请您尽量准确填写四级地址。
        </div>

        <!-- 可编辑部分 -->
        <div class="write_address"> 

            <label  class="text"> <span>收货人：</span><input type="text" v-model="textval" ></label>
            <label  class="mobile"> <span>联系电话：</span><input type="text" v-model="phone"></label>
            <label class="area"> <span>所在地区：</span><input type="text"  class="city" @click="toAddress" :value="city"><span class="right_arrow"></span></label>
            <label class="address" style="height:1.03rem"> <span>详细地址：</span><textarea maxlength="255" v-model="address"></textarea></label>
            <span  v-if="msgbool" class="msgbox">{{alertmag}}</span>
       </div>
          <!-- 省市级联动组件 -->
          <div class="mask" v-show="mask"></div>
        <v-distpicker type="mobile" @selected='selected' v-show="addInp" class="province_map">
         </v-distpicker>
        

          <!-- 保存 -->
          <input class="save" @click="funsub()" type="button" value="保存">
       </div>
    </div>
</template>
<script>
import VDistpicker from "v-distpicker";
export default {
     data(){
         return{
        textval:"",
        phone:"",
        area:"",
        address:"",
        alertmag:"",
        msgbool:false,
        city:'',
       addInp :false,
        mask:false,
         }
     },
     components:{
          VDistpicker,
     },
    methods:{
        toAddress(){
         this.mask = true;
         this.addInp = true;
       },
  // 省市区三级联动
     selected(data){
         this.mask =false;
         this.addInp = false;
        //  把选择地址显示在地址栏
         this.city = data.province.value + ' ' + data.city.value +' ' + data.area.value
 
 }, 
        // 点箭头回退
        fungoback(){
            this.$router.go(-1)
        },
        // 保存地址
        funsub(){
            // 验证手机号
          
            let regphone=/^[1]\d{10}$/
            let fphone=false;
            fphone=regphone.test(this.phone)?true:false;
           //如果有信息为空，点击保存，会有弹出框提示，弹出框于2秒后消失
            if(this.textval==""){
                this.msgbool=true
                let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
                this.alertmag="收件人不能为空"
            }else if(this. phone==""){
                this.msgbool=true
                 this.alertmag="手机号不能为空"
                  let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
            }else if(this. city==""){
                this.msgbool=true
                 this.alertmag="省市区不能为空"
                  let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
            }else if (this.address==""){
                this.msgbool=true
                this.alertmag="地址不能为空"
                 let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
            }else if(fphone=false){
                this.msgbool=true
                this.alertmag="收件号码不正确"
                 let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
            }
            else{
                this.$store.commit("textup",{"textname":this.textval,"phone":this.phone,"area":this.city,"address":this.address,"contbool":this.contbool})
                this.$router.push("/location")
            }
            
    
        
        }
    },
    
}
</script>
<style scoped>
    .address_head{
        width:100%;
        height:.53rem;
       background: #414141;
       display:-webkit-flex;
       -webkit-align-items: center;
    }
     .per_center{
        font-size:.20rem;
        color:white;
        margin-left:.8rem;
    }
     .noloc_notice{
        height:.42rem;
        text-align:center;
        line-height:.42rem;
        font-size:.14rem;
        color: #aeaeae;
        background:#eee;
    }

    .write_address{
        font-size:.16rem;
        color:#d0d0d0;
        padding-left:.15rem;
        background:white;
        position:relative;
    }
    .write_address label{
        height:.52rem;
        display:-webkit-flex;
       -webkit-align-items: center;
       padding-left:.15rem;
        border-bottom:1px solid #eee;
        
    }
    .write_address label .address{
        height:1.5rem;
    }
    .write_address textarea{
        display:block;
        border:none;
        height:1.03rem;
        width:2.3rem;
        outline: none;
    }
     .write_address span{
         width:.8rem;
         height:.52rem;
         line-height:.52rem;
     }

     .write_address input{
        border:none;
        width:2.3rem;
        height:.52rem;
        outline: none;
     }

     .write_address .right_arrow{
        height:.08rem;
        width:.08rem;
        font-weight:900;
        border-top:3px solid #D0D0D0;
        border-right:3px solid #D0D0D0;
        -webkit-transform: rotate(45deg);
     }
     .address_content{
         padding-bottom:5.3rem;
         background:#eee;
         position:relative;
     }
    .save{
        display:block;
       width:2.3rem;
       height:.51rem;
       text-align:center;
       line-height:.51rem;
       background:#444;
       margin:0 auto;
       margin-top:.2rem;
       font-size:.18rem;
       color:white;
       cursor:pointer;
   }
   .write_address .msgbox{
       height:.52rem;
       width:1.0rem;
       background:#444;
       color:white;
       font-size:.12rem;
       text-align:center;
       line-height:.52rem;
       border-radius:.05rem;
       padding-right:.15rem;
       padding-left:.15rem;
       position: absolute;
       left:0;
       top:0;
       bottom:0;
       right:0;
       margin:auto;
   }
   .province_map{
       font-size:1px;
   }
   .mask{
       height:3rem;
       width:100%;
       background:black;
       opacity:.3;
       position:absolute;
       left:0px;
       top:0px;
   }
</style>