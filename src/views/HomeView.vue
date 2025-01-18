<script setup>
import Jumbotron from '../components/Jumbotron.vue'
import Reviews from '../components/Reviews.vue'
import AboutUs from '../components/AboutUs.vue'
import Carousel from '../components/Carousel.vue'
import HowItWorks from '../components/HowItWorks.vue'
import FAQ from '../components/FAQ.vue'
</script>
<template>
  <Jumbotron />
  <Reviews />
  <Carousel />
  <AboutUs />
  <HowItWorks />
  <FAQ />
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-weight: bold;
  color: black;
}
</style>
