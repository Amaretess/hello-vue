<script setup>
import logo from '../images/gradient.png'
</script>

<template>
  <nav class="navbar">
    <div>
      <img :src="logo" class="logo" />
    </div>
    <ul class="nav-links">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/services">Services</RouterLink>
      </li>
      <li>
        <RouterLink to="/partners">Our Partners</RouterLink>
      </li>
    </ul>
    <div class="signin-button">
      <button><RouterLink class="link" to="/signin">Sign In</RouterLink></button>
    </div>
  </nav>
</template>

<style scoped>
/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Navbar Styling */

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--bg-color);
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.logo {
  width: 50px;
  height: 50px;
  z-index: 1;
}

.nav-links {
  display: flex;
  list-style-type: none;
}

.nav-links li {
  margin: 0 1rem;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: white;
}

.signin-button button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: var(--main);
  color: white;
  border-radius: 5px;
}

.signin-button button:hover {
  background-color: var(--main);
}

.link {
  color: white;
  background-color: var(--main);
}
</style>
