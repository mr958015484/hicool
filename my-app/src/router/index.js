import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/home"
import Classify from "../pages/classify"
import Community from "../pages/community"
import Main from "../pages/main"
import Ball from "../pages/ball"

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
      path:"/ball",
      name:"Ball",
      component:Ball
    },
    {
      path:"/community",
      name:"Community",
      component:Community
    },
    {
      path:"/main",
      name:"Main",
      component:Main
    },
    {
      path:"/*",
      redirect:"/home"
    }
  ]
})
