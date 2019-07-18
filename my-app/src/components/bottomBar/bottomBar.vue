<template>
    <div>
        <div class="bottomCon">
            <div class="bottomList" v-for="(v,i) in arr" :key="i" @click="fun(i)">
				<router-link :to="v.routerurl">
					<img :src="v.imgurl" alt="" class="bottomPic">
					<p>{{v.title}}</p>
				</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {"imgurl":"../../../static/img/bottom1.png","title":"首页","routerurl":"/home"},
                {"imgurl":"../../../static/img/bottom2.png","title":"分类","routerurl":"/classify"},
				{"imgurl":"../../../static/img/bottom5.png","title":"逛","routerurl":"/guang"},
                {"imgurl":"../../../static/img/bottom3.png","title":"购物车","routerurl":"/shopCart"},
                {"imgurl":"../../../static/img/bottom4.png","title":"我的","routerurl":"/main"},
			],
			 arr2:[
                {"imgurl":"../../../static/img/bottom1.2.png"},
                {"imgurl":"../../../static/img/bottom2.2.png"},
				{"imgurl":"../../../static/img/bottom5.2.png"},
                {"imgurl":"../../../static/img/bottom3.png"},
                {"imgurl":"../../../static/img/bottom4.png"},
			],
			num:""
        }
	},
	methods: {
        fun(id){
            var oP = document.getElementsByTagName("p");
            var oImg = document.getElementsByClassName("bottomPic");
            for(var i=0; i<oP.length; i++){
                oP[i].style.color="#b0b0b0";
                oImg[i].src=this.arr[i].imgurl;
            }if(id==0 || id ==1 || id==2){
                oP[id].style.color="#414141";
                oImg[id].src=this.arr2[id].imgurl;
            }
            if(id ==1 || id==2){
                oImg[0].src=this.arr2[0].imgurl;
            }else if(id==0){
                oImg[0].src=this.arr[0].imgurl;
            }
        }
    },

}
</script>

<style scoped>
.bottomPic{
	border: none;
	display:block;
	margin-top: .1rem;
	width: .23rem;
	height: .23rem;
}
/* 底部的盒子 */
.bottomCon{
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #b0b0b0;
  background: white;
}
p{
  font-size: .12rem;
  padding-top:.1rem;
  text-align: center;
  color: #b0b0b0;
}
.bottomList{
  height: .68rem;
}
.bottomList:nth-child(1) p{
	color: #414141;
}
.bottomList:nth-child(3) img{
	width: .28rem;
	height: .23rem;
}
</style>
