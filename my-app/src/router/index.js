import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/home"
import Classify from "../pages/classify"
import ShopCart from "../pages/shopCart"
import Main from "../pages/main"
import Guang from "../pages/guang"
import Login from "../pages/login"
import Reg from "../pages/reg"

import Myorder from "../components/mine/myorder/myorder"
import Orderall from "../components/mine/myorder/orderall/orderall"
import Orderpay from "../components/mine/myorder/orderall/orderpay"
import Orderdeliver from "../components/mine/myorder/orderall/orderdeliver"
import Ordertake from "../components/mine/myorder/orderall/ordertake"

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
      path:"/myorder",
      name:"Myorder",
      component:Myorder,
      children:[
        {path:"/myorder/orderall",
        name:"Orderall",
        component:Orderall
        },
        {path:"/myorder/orderpay",
        name:"Orderpay",
        component:Orderpay
        },
        {path:"/myorder/orderdeliver",
        name:"Orderdeliver",
        component:Orderdeliver
        },
        {path:"/myorder/ordertake",
        name:"Ordertake",
        component:Ordertake
        },
        {path:"/*",
        redirect:"/myorder/orderall"
        }
      ]
    },
    {
      path: '/*',
      redirect:"/home"
    }
  ]
})
