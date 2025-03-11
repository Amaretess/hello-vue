<script setup>
import { ref, onMounted } from 'vue'
import Jumbotron from '@/components/AboutUs/Jumbotron.vue';
import Carousel from '@/components/Carousel.vue';
import TheTeam from '@/components/AboutUs/TheTeam.vue';
import OurStory from '../components/AboutUs/OurStory.vue';
const isVisible = ref([])

onMounted(() => {
  const elements = document.querySelectorAll('.animate')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = [...elements].indexOf(entry.target)
        isVisible.value[index] = true
      }
    })
  }, { threshold: 0.2 }) // Trigger when 20% of the element is visible

  elements.forEach(el => observer.observe(el))
})
</script>

<template>
    <Jumbotron />
    <Carousel />
    <TheTeam />
    <OurStory />
</template>

<style scoped>

</style>
