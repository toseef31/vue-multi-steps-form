<template>
  <div class="user-detail">
    <div class="user-info">
      <h4 class="mb-4">Output</h4>
      <p class="msg">Form submit successfully !!</p>
      <div><p>Name: <span class="fs-4">{{ user.firstName }} {{ user.lastName }}</span></p></div>
      <div><p>Middle Name: <span class="fs-4">{{ user.middleName }}</span></p></div>
      <div><p>Date of Birth: <span class="fs-4">{{ user.dob }}</span></p></div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.user,
      responseData: {},
    }
  },
 
  computed: {
    userHasData() {
      return !(Object.keys(this.responseData).length === 0)
    },
  },
}
</script>

<style>
.header {
  border: 1 solid #dddddd;
  margin: 30px 0;
}
.header .welcome {
  margin: 10px 0;
  font-size: 1.75rem;
  font-weight: bold;
}
.user-detail{
  height: 40%;
  align-items: center;
}
.user-info {
  margin-bottom: 50px;
  background: aliceblue;
}
.avatar-image {
  max-width: 200px;
}
.footer {
  display: flex;
  margin: 50px auto;
}

.user-info {
  padding: 50px;
  margin: auto;
  background: aliceblue;
}
 .user-detail {
  display: grid;
}
.header {
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 3;
}
.footer {
  grid-column-start: 1;
  grid-column-end: 3;
}
.fs-4{
  font-size: 14px;
}
.mb-4{
  margin-bottom: 15px;
}
.msg{
  color:green;
}
</style>
