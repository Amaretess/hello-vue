<script setup>
import './assets/base.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="navbar">
    <NavBar />
  </div>
  <div class="primaryBody">
    <RouterView />
  </div>
  <div>
    <Footer />
  </div>
</template>

<style scoped>
.navbar {
  height: 10vh;
}
.primaryBody {
  background-color: var(--bg-color);
  width: 100vw;
  border: 2px solid white;
}
</style>

<style>
:root {
  --main: #bc312a;
  --bg-color: #1e1e1e;
}

* {
  background-color: var(--bg-color);
  box-sizing: border-box;
}
</style>
