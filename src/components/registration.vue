<template>
 
  <div class="Employee">
    <!-- <Employee>  </Employee> -->
    <form id="registrationForm">
      <div class="form-class">
        <h2>EMPLOYEE REGISTRATION</h2>
        <div class="labels">
          <label>First Name</label>
        </div>
        <div class="field-values">
          <input v-model="firstname" />
        </div>
        <div class="labels">
          <label>Last Name</label>
        </div>
        <div class="field-values">
          <input v-model="lastname" />
        </div>
        <div class="labels">
          <label>Email id</label>
        </div>
        <div class="field-values">
          <input v-model="email" />
        </div>
        <div class="labels">
          <label>Password</label>
        </div>
        <div class="field-values">
          <input type="password" />
        </div>
        <div class="labels">
          <label>DOB</label>
        </div>
        <div class="field-values">
          <input type="date" v-model="dob" />
        </div>
        <div class="labels">
          <label>Gender</label>
        </div>
        <div class="field-values">
          <input v-model="gender" type="radio" name="gender" value="male" />Male
          <input v-model="gender" type="radio" name="gender" value="female" />Female
        </div>
        <div class="labels">
          <label>Country</label>
        </div>
        <div class="field-values">
          <select v-model="country" @change="getStates()">
            <option v-for="c in countryObj" :key="c.id">{{c.country}}</option>
          </select>
        </div>
        <div class="labels">
          <label>State</label>
        </div>
        <div class="field-values">
          <select v-model="state">
            <option v-for="s in stateObj" :key="s">{{s}}</option>
          </select>
        </div>
        <div class="labels">
          <label>Mobile Number</label>
        </div>
        <div class="field-values">
          <input v-model="mobile" type="text" name="mobile" />
        </div>
        <div class="labels">
          <label>Hobbies</label>
        </div>
        <div class="field-values">
          <input v-model="hobbies" type="checkbox" value="Singing" />Singing
          <br />
          <input v-model="hobbies" type="checkbox" value="Dancing" />Dancing
          <br />
          <input v-model="hobbies" type="checkbox" value="Writing" />Writing
          <br />
          <input v-model="hobbies" type="checkbox" value="Painting" />Painting
          <br />
        </div>
        <div class="labels">
          <label>Address</label>
        </div>
        <div class="field-values">
          <textarea v-model="address" name="Address">Where is your house</textarea>
        </div>
        <div>
          <input type="button" class="reset" value="Reset" @click="resetForm()" />
          <input type="button" class="submit" value="Submit" @click="submitForm()" />
        </div>
      </div>
    </form>
  
    <form id="previewForm">
      <div class="preview-form-class">
        <h2>PREVIEW</h2>
        <div class="labels">
          <label>
            <b>Full Name:</b>
          </label>
          {{ fullname() }}
        </div>
        <div class="labels">
          <label>
            <b>Email id:</b>
          </label>
          {{ email }}
        </div>
        <div class="labels">
          <label>
            <b>DOB:</b>
          </label>
          {{ printDate() }}
        </div>
        <div class="labels">
          <label>
            <b>Gender:</b>
          </label>
          {{ gender }}
        </div>

        <div class="labels">
          <label>
            <b>Country:</b>
          </label>
          {{ country }}
        </div>
        <div class="labels">
          <label>
            <b>State:</b>
          </label>
          {{ state }}
        </div>

        <div class="labels">
          <label>
            <b>Mobile Number:</b>
          </label>
          {{ mobile }}
        </div>
        <div class="labels">
          <label>
            <b>Hobbies:</b>
          </label>
          <ul v-for="hobbie in hobbies" :key="hobbie">
            <li>{{hobbie}}</li>
          </ul>
        </div>
        <div class="labels">
          <label>
            <b>Address:</b>
          </label>
          {{address}}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Countries } from "../components/constants.js";
// import Employee from "./componentPractice.vue";
export default {
  // components: Employee,
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
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
  },
  methods: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
    resetPreview() {
      (this.firstname = ""),
        (this.lastname = ""),
        (this.email = ""),
        (this.dob = ""),
        (this.mobile = ""),
        (this.gender = ""),
        (this.state = ""),
        (this.country = []),
        (this.hobbies = []),
        (this.address = "");
    },
    resetForm() {
      document.getElementById("registrationForm").reset();
      this.resetPreview();
    },

    submitForm() {
      document.getElementById("registrationForm").innerHTML =
        "Your data is submitted successfully..!!";
    },
    printDate() {
      this.dob = this.dob
        .split("-")
        .reverse()
        .join("-");
      return this.dob;
    },
    getStates() {
      var x = Countries.find(x => x.country == this.country);
      this.stateObj = x.states;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-class {
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
.preview-form-class {
  margin: 30px;
  padding: 1% 10% 10% 2%;
  float: right;
  border-style: solid;
}
</style>
