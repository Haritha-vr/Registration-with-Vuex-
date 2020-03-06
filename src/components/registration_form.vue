<template>
    <div class="registration">
        <form id="registrationForm">
      <div class="form-class">
        <h2>EMPLOYEE REGISTRATION</h2>

        <div class="labels">
          <label>First Name</label>
        </div>
        <div class="field-values">
          <input v-model="empObj.firstname" />
        </div>
        <div class="labels">
          <label>Last Name</label>
        </div>
        <div class="field-values">
          <input v-model="empObj.lastname" />
        </div>
        <div class="labels">
          <label>Email id</label>
        </div>
        <div class="field-values">
          <input v-model="empObj.email" />
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
          <input type="date" v-model="empObj.dob" />
        </div>
        <div class="labels">
          <label>Gender</label>
        </div>
        <div class="field-values">
          <label for="male"> <input v-model="empObj.gender" type="radio" name="gender" value="male" />Male</label>
          <input v-model="empObj.gender" type="radio" name="gender" value="female" /><label for="female">Female</label>
        </div>
        <div class="labels">
          <label>Country</label>
        </div>
        <div class="field-values">
          <select v-model="empObj.country" @change="getStates()">
            <option v-for="c in empObj.countryObj" :key="c.id">{{c.country}}</option>
          </select>
        </div>
        <div class="labels">
          <label>State</label>
        </div>
        <div class="field-values">
          <select v-model="empObj.state">
          
            <option v-for="s in empObj.stateObj" :key="s">{{s}}</option>
          </select>
        </div>
        <div class="labels">
          <label>Mobile Number</label>
        </div>
        <div class="field-values">
          <input v-model="empObj.mobile" type="text" name="mobile" />
        </div>
        <div class="labels">
          <label>Hobbies</label>
        </div>
        <div class="field-values">
          <input v-model="empObj.hobbies" type="checkbox" value="Singing" />Singing
          <br />
          <input v-model="empObj.hobbies" type="checkbox" value="Dancing" />Dancing
          <br />
          <input v-model="empObj.hobbies" type="checkbox" value="Writing" />Writing
          <br />
          <input v-model="empObj.hobbies" type="checkbox" value="Painting" />Painting
          <br />
        </div>
        <div class="labels">
          <label>Address</label>
        </div>
        <div class="field-values">
          <textarea v-model="empObj.address" name="Address">Where is your house</textarea>
        </div>
        <div>
          <input type="button" class="reset" value="Reset" @click="resetForm()" />
          <input type="button" class="submit" value="Submit" @click="submitForm()" />
        </div>
      </div>
    </form>
    </div>
</template>
<script>
export default {
  name: "Registration",
  computed:{
    empObj(){
      return this.$store.state.empObj 
    }
  },
  methods:{
    getStates() {
      this.$store.dispatch('getStates');
    },
    resetForm(){
      this.$store.dispatch('reset');
    },
    submitForm(){
      this.$store.dispatch('addEmployee');
    }

  }
}
</script>
<style scoped>
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
</style>

