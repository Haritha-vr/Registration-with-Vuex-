<template>
  <div id="rapp">
    <Registration :redata="edata"></Registration>
    <Preview :pedata="edata"></Preview>
    <button @click="Save()">Register</button>
    <!-- {{empRouterList}} -->
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import Preview from "./Preview";
import Registration from "./registration_form.vue";
import {Countries} from "./constants";
var ed= {
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
};
export default {
  name:"RApp",
  components:{
    Preview,
    Registration
  },
  props:{
    EmpRouterList:Array
  },
  data(){
    return{
      edata:ed
    }
  },
  methods:{
    Save(){
        console.log(this.EmpRouterList)
  // if(this.EmpRouterList)
   this.EmpRouterList.push(this.edata)
    console.log(this.EmpRouterList)
    }
  }
}

</script>

<style>
  
.form-class {
  /* background-color: #d3d3d3;  */
  margin: 30px;
  padding: 10px;
}
.preview-form-class {
  /* background-color: #d3d3d3; */
  margin: 30px;
  padding: 10px;
  float: right;
}
.empList{
  margin: 30px;
  padding: 10px;
  /* float: right; */
}
.labels {
  margin: 0 0 2px 3px;
}
.field-values {
  margin: 0 0 6px 3px;
}
.reset {
  background-color: #808080;
}
.submit {
  background-color: #0000ff;
}
.form-class {
  float: left;
}
.preview {
  float: right;
}
</style>

