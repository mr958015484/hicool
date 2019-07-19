import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        consignee:"",
        phone:"",
        area:"",
        address:"",
       
    },
    mutations:{
        textup(state,payload){
           
            state.consignee=payload.textname
            state.phone=payload.phone
            state.area=payload.area
             state.address=payload.address
             state.contbool=payload.contbool
          
        }   
    },

})