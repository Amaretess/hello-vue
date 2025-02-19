<script setup>
import Jumbotron from '../components/Jumbotron.vue'
import Reviews from '../components/Reviews.vue'
import Section from '../components/Section.vue'
import Section2 from '../components/Section2.vue'
import Carousel from '../components/Carousel.vue'
import HowItWorks from '../components/HowItWorks.vue'
import FAQ from '../components/FAQ.vue'
</script>
<template>
  <Jumbotron />
  <Reviews />
  <Carousel />
  <Section title="Your Skills Deserve the Fastest PC." subtitle="Optimize. Accelerate. Dominate." />
  <Section2 title="Miliseconds Matter" subtitle="We Make Them Count"/>
  <HowItWorks />
  <FAQ />
</template>

<style scoped>
h1 {
  font-weight: bold;
  color: black;
}
</style>
