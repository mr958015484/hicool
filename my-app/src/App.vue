<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,td,input,textarea,select,option,a,i,input,span,div{
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
	display:block;
}
img{
	border: none;
	display:block;
}
span{
	display:block;
}


</style>
