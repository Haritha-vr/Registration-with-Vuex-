import Vuex from 'vuex'
import Vue from 'vue'
import { Countries } from "../components/constants.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    empObj:{
        firstname: "",
        lastname: "",
        email: "",
        dob: "",
        mobile: "",
        gender: "",
        state: "",
        country: "",
        hobbies: [],
        address: "",
        countryObj: Countries,
        stateObj: []
    },
    empList: []
  },

  getters: {

  },

  mutations: {
    addEmployee(state){
      state.empList.push({...state.empObj});
    },
    reset:state=>{
      let emp=state.empObj;
      state.empObj.firstname= "",
      emp.lastname= "",
      emp.email="",
      emp.dob= "",
      emp.mobile= "",
      emp.gende= "",
      emp.state="",
      emp.country= "",
      emp.hobbies= [],
      emp.address= "",
      emp.countryObj= Countries,
      emp.stateObj= []

    }
  },

  actions: {
    addEmployee(context){
      context.commit('addEmployee');
    },
    reset:context=>{
      context.commit('reset');
    }
  }
});