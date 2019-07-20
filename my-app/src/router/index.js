import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/home"
import Classify from "../pages/classify"
import ShopCart from "../pages/shopCart"
import Main from "../pages/main"
import Guang from "../pages/guang"
import Basicinfo from "../pages/basicinfo"
import Location from "../pages/location"
import Newaddress from "../pages/newaddress"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/home",
      name:"Home",
      component:Home,
      
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
      path:"/location",
      name:"Location",
      component:Location
    },
    {
      path:"/basicinfo",
      name:"Basicinfo",
      component:Basicinfo,
    },
    {
      path:"/newaddress",
      name:"Newaddress",
      component:Newaddress,
    },
    {
      path:"/login",
      name:"Login",
      component:resolve => require(['../pages/login'],resolve)
    },
    {
      path:"/reg",
      name:"Reg",
      component:resolve => require(['../pages/reg'],resolve)
    },
    {
      path:"/myorder",
      name:"Myorder",
      component:resolve => require(['../components/mine/myorder/myorder'],resolve),
      children:[
        {path:"/myorder/orderall",
        name:"Orderall",
        component:resolve => require(['../components/mine/myorder/orderall/orderall'],resolve),
        },
        {path:"/myorder/orderpay",
        name:"Orderpay",
        component:resolve => require(['../components/mine/myorder/orderall/orderpay'],resolve),
        },
        {path:"/myorder/orderdeliver",
        name:"Orderdeliver",
        component:resolve => require(['../components/mine/myorder/orderall/orderdeliver'],resolve),
        },
        {path:"/myorder/ordertake",
        name:"Ordertake",
        component:resolve => require(['../components/mine/myorder/orderall/ordertake'],resolve),
        },
        {path:"/myorder/*",
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
