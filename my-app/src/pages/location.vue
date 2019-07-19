
<template>
    <div>
         <router-view ></router-view>
          <Topbar class="top_bar" word="地址管理"></Topbar>
          <!-- 显示地址区域 -->
          <ul class="address_area" v-if='bool' >
               <li>
                   <p class="name"><span>{{textname}}</span><span>{{telphone}}</span></p>
                   <p class="add">{{area+address}}</p>
                   <p class="del"> <img src="../../static/fayimg/write.png"> <img class="delbtn"　src="../../static/fayimg/delete.png"></p>
               </li>
          </ul>
         

          <!-- 无地址的时候只显示 -->
          <div class="loc_manag_cont">
                <div class="noloc_notice">
                    为提高配送时效，请您尽量准确填写四级地址。
                </div>
                <!-- 添加新地址 -->
                <div class="add_loc" @click="addaddress()" >
                        添加新地址
                </div>
          </div>
          
    </div>
</template>
<script>
import Topbar from "../components/mine/topbar"
export default {
    data(){
        return {
         bool:true
        }
    },
    components:{
        Topbar,
    },
    // 转到修改地址的页面
    methods:{
        addaddress(){
            this.$router.push("/newaddress")
        }
    },

     computed:{ 
       textname(){
         
           return this.$store.state.consignee
       },
       telphone(){
            return this.$store.state.phone
       },
       area(){
            return this.$store.state.area
       },
        address(){
            return this.$store.state.address
       }
       
    },
}
</script>
<style scoped>
    .top_bar{
        z-index:10;
    }
    .loc_manag_cont{
        background: #eee;
        padding-bottom:5.3rem;
    }
    .noloc_notice{
        margin-top:.525rem;
        height:.42rem;
        text-align:center;
        line-height:.42rem;
        font-size:.14rem;
        color: #aeaeae;
        background:#eee;
    }
    .add_loc{
        height:.53rem;
        text-align:center;
        line-height:.53rem;
        font-size:.16rem;
        font-weight:900;
        color: #444;
        background:white;
    }
    .address_area{
        margin-top:.525rem;
    }
    .address_area p{
        display:-webkit-flex;
        padding-right:.15rem;
        padding-left:.15rem;
        height:.4rem;
        line-height:.4rem;
    }
    .address_area .name{
        font-size:.18rem;
        color:#444;
        font-weight:700;
         justify-content:space-between; 
    }
    .address_area .add{
        font-size:.16rem; 
        color:#b0b0b0;
    }
    .address_area .del{
        height:.27rem;
        padding-left:2.7rem;
        padding-bottom:.15rem;
    }
    .address_area .del .delbtn{
        margin-left:.35rem;
    }

</style>
