<script setup>
import { ref } from 'vue'
import logo from '../images/gradient.png'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="navbar">
    <div>
      <img :src="logo" class="logo" />
    </div>

    <!-- Hamburger icon for mobile (pushed to the far right) -->
    <!-- <div class="hamburger" @click="isMenuOpen = !isMenuOpen">
      <div class="bar" v-bind:class="{ 'open': isMenuOpen }"></div>
      <div class="bar" v-bind:class="{ 'open': isMenuOpen }"></div>
      <div class="bar" v-bind:class="{ 'open': isMenuOpen }"></div>
    </div> -->

    <!-- Navigation Links (menu) -->
    <!-- <ul class="nav-links" v-bind:class="{ 'active': isMenuOpen }">
      <li><RouterLink class="nav-link" to="/" @click="isMenuOpen = false">Home</RouterLink></li>
      <li><RouterLink class="nav-link" to="/about" @click="isMenuOpen = false">About</RouterLink></li>
      <li><RouterLink class="nav-link" to="/services" @click="isMenuOpen = false">Services</RouterLink></li>
      <li><RouterLink class="nav-link" to="/partners" @click="isMenuOpen = false">Our Partners</RouterLink></li>
    </ul> -->

    <!-- Discord Button -->
    <div class="signin-button">
      <button class="button">
        <a class="link" target="_blank" href="https://t.co/lZbV5ECcMH">Join Our Discord</a>
      </button>
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
  backdrop-filter: blur(5px); /* Optional: Adds blur effect to the background */
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.logo {
  width: 38px;
  height: 50px;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  margin-left: auto; /* Pushes the hamburger to the far right */
}

.bar {
  height: 4px;
  width: 100%;
  background-color: white;
  transition: all 0.3s ease-in-out;
}

.bar.open:nth-child(1) {
  transform: rotate(45deg);
  position: relative;
  top: 7px;
}

.bar.open:nth-child(2) {
  opacity: 0;
}

.bar.open:nth-child(3) {
  transform: rotate(-45deg);
  position: relative;
  top: -7px;
}

/* Navigation Links */
.nav-links {
  display: flex;
  list-style-type: none;
  transition: all 0.3s ease;
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

/* Button Styles */
.signin-button button {
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: 2px solid var(--main);
  border-radius: 5px;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out, color 0.3s ease-in-out;
  line-height: 1;
}

.signin-button button:hover {
  background-color: var(--main); /* Preferred hover effect */
  color: white;
}

.signin-button button:active {
  transform: scale(0.95);
}

.link {
  color: white;
}

/* Mobile-first Media Queries */
@media (max-width: 700px) {
  /* Mobile Navigation Menu */
  .nav-links {
    display: none;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li {
    margin: 1rem 0;
  }

  .hamburger {
    display: flex;
  }

  /* Remove hover and transition effects for the button on mobile */
  .signin-button button {
    transition: none;
  }

  .signin-button button:hover {
    background-color: transparent;
    color: white; /* No color change on hover */
  }

  .signin-button button:active {
    transform: none; /* No transformation on click */
  }
}

/* Desktop Styles (min-width 701px) */
@media (min-width: 701px) {
  .hamburger {
    display: none;
  }

  .nav-links {
    display: flex;
  }
}
</style>
