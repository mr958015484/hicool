<template>
  <div id="app">
	  <div class="bottomCon">
            <div class="bottomList" v-for="(v,i) in arr" :key="i" @click="fun(i)">
				<router-link :to="v.routerurl">
					<img :src="v.imgurl" alt="">
					<p>{{v.title}}</p>
				</router-link>
            </div>
        </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
        return{
            arr:[
                {"imgurl":"../../static/img/bottom1.png","title":"首页","routerurl":"/home"},
                {"imgurl":"../../static/img/bottom2.png","title":"分类","routerurl":"/classify"},
				{"imgurl":"../../static/img/bottomLog.png","routerurl":"/ball"},
                {"imgurl":"../../static/img/bottom3.png","title":"社区","routerurl":"/community"},
                {"imgurl":"../../static/img/bottom4.png","title":"我的","routerurl":"/main"},
			],
			 arr2:[
                {"imgurl":"../../static/img/bottom1.2.png"},
                {"imgurl":"../../static/img/bottom2.2.png"},
				{"imgurl":"../../static/img/bottomLog.png"},
                {"imgurl":"../../static/img/bottom3.2.png"},
                {"imgurl":"../../static/img/bottom4.2.png"},
			],
			num:""
        }
	},
	methods: {
		fun(id){
			var oP = document.getElementsByTagName("p");
			var oImg = document.getElementsByTagName("img");
			for(var i=0; i<oP.length; i++){
				oP[i].style.color="#b0b0b0";
				oImg[i].src=this.arr[i].imgurl;
			}
			oP[id].style.color="#414141";
			oImg[id].src=this.arr2[id].imgurl;
			if(id!=0){
				oImg[0].src=this.arr2[0].imgurl;
			}else{
				oImg[0].src=this.arr[0].imgurl;
			}
			
		}
	},
}
</script>

<style>
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,td,input,textarea,select,option{
	margin: 0;
	padding: 0;
}
html,body{
	height:100%;
}
html{
	font-size:26.67vw;
}
body{
	font-family: "微软雅黑";
	background:white;
}
ul,ol,li{
	list-style:none;
}
a{
	text-decoration: none;
}
img{
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
.bottomList:nth-child(3) img{
	width: .8rem;
	height: .65rem;
	margin-top:0;
}
.bottomList:nth-child(1) p{
	color: #414141;
}
</style>
