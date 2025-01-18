<script setup>
import Carousel from './Carousel.vue'
</script>

<template>
  <div class="container">
    <div class="header">
      <p id="sub-heading">Reviews</p>
      <h1><span id="sub-heading">#1</span> Choice for Pro Players</h1>
      <p class="sub-heading-2">
        Experience what it feels like to get your PC optimized by the same team who worked with your
        favorite pros.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
  height: 20vh;
}
.header {
  width: 70%;
}

#sub-heading {
  color: var(--main);
}
</style>
