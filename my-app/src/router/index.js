import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/home"
import Classify from "../pages/classify"
import ShopCart from "../pages/shopCart"
import Main from "../pages/main"
import Guang from "../pages/guang"
import Login from "../pages/login"
import Reg from "../pages/reg"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/home",
      name:"Home",
      component:Home
    },
    {
      path:"/classify",
      name:"Classify",
      component:Classify
    },
    {
      path:"/guang",
      name:"Guang",
      component:Guang
    },
    {
      path:"/shopCart",
      name:"ShopCart",
      component:ShopCart
    },
    {
      path:"/main",
      name:"Main",
      component:Main
    },
    {
      path:"/login",
      name:"Login",
      component:Login
    },
    {
      path:"/reg",
      name:"Reg",
      component:Reg
    },
    {
      path: '/*',
      redirect:"/home"
    }
  ]
})
