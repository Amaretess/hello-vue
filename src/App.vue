<script setup>
import './assets/base.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import snakegame from './views/snakegame.vue';



import { ref, onMounted, onUnmounted, provide } from "vue";

const mobileWindowCutoff = 992;
const isMobile = ref(window.innerWidth <= mobileWindowCutoff);

const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= mobileWindowCutoff;
};

onMounted(() => {
  window.addEventListener("resize", checkScreenSize);
  document.title = 'Paragon Tweaks';
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});

provide("isMobile", isMobile);
</script>

<template>
  <div class="primaryBody">
    <div class="navbar">
      <NavBar />
    </div>
    <RouterView />
    <!-- <snakegame /> -->
    <div>
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<style scoped>
.navbar {
  height: 10vh;
}


.primaryBody {
  width: 100vw;
  font-family: 'Amenti';
}


</style>

<style >

body {
  background-image: url('./images/PT_BG.png');
  background-size: cover;
  background-color: #0c0c0c;
  background-attachment: fixed;
  -webkit-overflow-scrolling:touch;
}

html {
    overflow: hidden;
}


:root {
  --main: #bc312a;
}

* {
  background-color: var(--bg-color);
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
h1 {
  font-family: 'Amenti-Bold';
}

p {
  font-family: 'Amenti-Regular', serif;
}
</style>
