<template>
  <div class="empList">
    <table border="1">
      <tr>
        <th>Full Name</th>
        <th>Email</th>
        <th>DOB</th>
        <th>Gender</th>
        <th>Country</th>
        <th>State</th>
        <th>Mobile Number</th>
        <th>Hobbies</th>
        <th>Address</th>
      </tr>

      <tr v-for="ledata in ledata_list" :key="ledata.firstname">
        <td>{{ledata.firstname}} {{ledata.lastname}}</td>
        <td>{{ledata.email}}</td>
        <td>{{ledata.dob}}</td>
        <td>{{ledata.gender}}</td>
        <td>{{ledata.country}}</td>
        <td>{{ledata.state}}</td>
        <td>{{ledata.mobile}}</td>
        <td>{{ledata.hobbies}}</td>
        <td>{{ledata.address}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "ListComponent",
  computed: {
    ledata_list() {
      return this.$store.state.empList;
    }
  },
  methods: {
    printDate() {
      this.ledata.dob = this.ledata.dob
        .split("-")
        .reverse()
        .join("-");
      return this.ledata.dob;
    }
  }
};
</script>