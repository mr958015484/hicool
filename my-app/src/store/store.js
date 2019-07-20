import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        consignee:localStorage.getItem("consignee"),
        phone:localStorage.getItem("phone"),
        area:localStorage.getItem("area"),
        address:localStorage.getItem("address"),
       
    },
    getters:{
       getconsignee(state){
             return state.consignee==null?"":state.consignee
       },
       getphone(state){
          return state.phone==null?"":state.phone
       },
       getarea(state){
        return state.area==null?"":state.area
      },
      getaddress(state){
        return state.address==null?"":state.address
      },
       
    },
    mutations:{
        textup(state,payload){
        //    把从修改地址页传过来的地址保存到本地
            state.consignee=payload.textname
            localStorage.setItem("consignee",payload.textname)
            state.phone=payload.phone
            localStorage.setItem("phone",payload.phone)
            state.area=payload.area
            localStorage.setItem("area",payload.area)
             state.address=payload.address
            localStorage.setItem("address",payload.address)
           
          
        }   
    },

})