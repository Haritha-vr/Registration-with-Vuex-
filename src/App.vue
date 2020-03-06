<template>
  <div id="app">
    <Registration></Registration>
    <Preview></Preview>
    <ListComponent></ListComponent>
  </div>
</template>

<script>

//import {mapState} from 'vuex'
import Registration from './components/registration_form.vue'
import ListComponent from "./components/ListComponent.vue"
import Preview from './components/Preview.vue'
export default {
  name: 'App',
  components:{
      Registration,
      ListComponent,
      Preview
  },
  // computed: mapState({
  //   // 'count'
  //   count: x=>x.count,
  //   name: x=>x.name,

  //   firstname: x=>x.firstname,
  //   lastname: x=>x.lastname,
  //   email: x=>x.email,
  //   dob: x=>x.dob,
  //   mobile: x=>x.mobile,
  //   gender: x=>x.gender,
  //   state: x=>x.state,
  //   country: x=>x.country,
  //   hobbies: x=>x.hobbies,
  //   address: x=>x.address,
  //   countryObj: x=>x.countryObj,
  //   stateObj: x=>x.stateObj

  // })
}
</script>

<style scoped>
.registration {
  /* background-color: #d3d3d3; */
  margin: 30px;
  padding: 1%;
  float: left;
  border-style: solid;
}
.labels {
  margin: 0 0 2px 3px;
}
.field-values {
  margin: 0 0 6px 3px;
}
.reset {
  width: 20%;
  height: 4%;
  background-color: #808080;
}
.submit {
  width: 20%;
  height: 4%;
  background-color: #0000ff;
}
.Preview {
  margin: 30px;
  padding: 1% 10% 10% 2%;
  float: right;
  border-style: solid;
}
</style>

