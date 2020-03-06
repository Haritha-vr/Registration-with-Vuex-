import Vuex from 'vuex'
import Vue from 'vue'
import { Countries } from "../components/constants.js"
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    empObj: {
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
    addEmployee(state) {
      state.empList.push({ ...state.empObj });
    },
    reset: state => {
      let emp = state.empObj;
      state.empObj.firstname = "",
        emp.lastname = "",
        emp.email = "",
        emp.dob = "",
        emp.mobile = "",
        emp.gender = "",
        emp.state = "",
        emp.country = "",
        emp.hobbies = [],
        emp.address = "",
        emp.countryObj = Countries,
        emp.stateObj = []

    },
    getStates(state) {
      var x = state.empObj.countryObj.find(x => x.country == state.empObj.country);
      state.empObj.stateObj = x.states;
    }
  },

  actions: {
    addEmployee(context) {
      context.commit('addEmployee');
    },
    reset: context => {
      context.commit('reset');
    },
    getStates(context) {
      context.commit('getStates');
    },
    getEmployeeData(context) {
      axios.get("http://localhost:8080/data/EmployeeData.json").then(response => { context.state.empList = response.data });     
    }
  }
});
