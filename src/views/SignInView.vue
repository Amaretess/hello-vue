<script setup>
import { ref } from 'vue'

// Define refs for form inputs
const email = ref('')
const password = ref('')

// Function for logging form data and switching components
const handleSubmit = (e) => {
  console.log({ email: email.value, password: password.value })

  // Clear form inputs
  email.value = ''
  password.value = ''
}

const userList = ref([])
async function getAllUsers() {
  const apiDetails = await fetch('https://jsonplaceholder.typicode.com/users')
  const userDetails = await apiDetails.json()

  userList.value = userDetails
}
getAllUsers()
</script>

<template>
  <div class="container">
    <div class="form">
      <h1 class="heading">Welcome</h1>
      <h1>Sign In!</h1>
      <div class="mb-3">
        <label>User</label>
        <select class="form-select">
          <option v-for="user in userList">{{ user.username }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label>Password</label>
        <input type="password" class="form-control" id="inputPassword1" v-model="password" />
      </div>
      <div class="mt-3 custom-btn">
        <button @click="handleSubmit" class="btn btn-primary w-25">Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: -50px;
}

.form {
  display: flex;
  width: 35%;
  padding: 2rem;
  border-radius: 25px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

div {
  display: flex;
  flex-direction: column;
}
button {
  font-weight: bold;
}
.heading {
  font-weight: bold;
}
</style>
