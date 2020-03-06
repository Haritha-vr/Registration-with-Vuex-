<template>
    <div class="Preview">
        <form id="previewForm">
      <div class="preview-form-class">
        <h2>PREVIEW</h2>
        <!-- {{pedata}} -->
        <div class="labels">
          <label>
            <b>Full Name:</b>
          </label>
          <!-- {{pedata}} -->
          {{ empObj.firstname }} {{empObj.lastname}}
        </div>
        <div class="labels">
          <label>
            <b>Email id:</b>
          </label>
          {{ empObj.email }}
        </div>
        <div class="labels">
          <label>
            <b>DOB:</b>
          </label>
          {{empObj.dob.split("-").reverse().join("-")}}
        </div>
        <div class="labels">
          <label>
            <b>Gender:</b>
          </label>
          {{ empObj.gender }}
        </div>

        <div class="labels">
          <label>
            <b>Country:</b>
          </label>
          {{ empObj.country }}
        </div>
        <div class="labels">
          <label>
            <b>State:</b>
          </label>
          {{ empObj.state }}
        </div>
        <div class="labels">
          <label>
            <b>Mobile Number:</b>
          </label>
          {{ empObj.mobile }}
        </div>
        <div class="labels">
          <label>
            <b>Hobbies:</b>
          </label>
          <ul v-for="hobbie in empObj.hobbies" :key="hobbie">
            <li>{{hobbie}}</li>
          </ul>
        </div>
        <div class="labels">
          <label>
            <b>Address:</b>
          </label>
          {{empObj.address}}
        </div>
      </div>
    </form>
    </div>
</template>

<script>
export default {
  name: "Preview",
   computed:{
    empObj(){
      return this.$store.state.empObj 
    }
  }
 }
</script>

