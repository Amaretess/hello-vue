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
        <RouterLink class="nav-link" to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/services">Services</RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/partners">Our Partners</RouterLink>
      </li>
    </ul>
    <div class="signin-button">
      <button class="button"><RouterLink class="link" to="/signin">Book Now</RouterLink></button>
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
  background-color: rgba(205, 90, 90, 0.1);/* Fully transparent */
  backdrop-filter: blur(5px); /* Optional: Adds blur effect to the background */
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.logo {
  width: 38px;
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
  font-size: 16px;
}

.signin-button button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  border-radius: 5px;
}

.signin-button button:hover {
  background-color: var(--main);
}

.link {
  color: white;
}

.button {
  border: 2px solid var(--main);
}

@media (max-width: 700px) {
  .button {
    display: none;
  }
  .nav-link {
    display: none;
  }
}

</style>
