<script setup>
import './assets/base.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div class="primaryBody">
    <div class="navbar">
      <NavBar />
    </div>
    <RouterView />
    <div>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  height: 10vh;
}


.primaryBody {
  width: 100vw;
  background-image: url('./images/PT_BG.png');
  background-size: 100% 100%;
}

</style>

<style>
:root {
  --main: #bc312a;
}

* {
  background-color: var(--bg-color);
  box-sizing: border-box;
}
</style>
