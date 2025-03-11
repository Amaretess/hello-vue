<script setup>
import { ref, onMounted } from 'vue'
import Jumbotron from '../components/Home/Jumbotron.vue'
import Reviews from '../components/Home/Reviews.vue'
import Section from '../components/Home/Section.vue';
import graphic from "..//images/graphic.png"
import Carousel from '../components/Carousel.vue'
import HowItWorks from '../components/Home/HowItWorks.vue'
import OurPartners from '../components/Home/OurPartners.vue'
import FAQ from '../components/Home/FAQ.vue'
import Section2 from '@/components/Home/Section2.vue';

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
  <div class="animate" :class="{ 'fade-in': isVisible[0] }">
    <Jumbotron />
  </div>

  <div class="animate" :class="{ 'fade-in': isVisible[1] }">
    <Reviews />
  </div>

  <div class="animate" :class="{ 'fade-in': isVisible[2] }">
    <Carousel />
  </div>

  <div class="animate" :class="{ 'fade-in': isVisible[3] }">
    <Section />
  </div>

  <div class="animate" :class="{ 'fade-in': isVisible[4] }">
    <Section2 />
  </div>

  <div class="animate" :class="{ 'fade-in': isVisible[5] }">
    <HowItWorks />
  </div>

  <div class="animate" :class="{ 'fade-in': isVisible[6] }">
    <OurPartners />
  </div>

  <div class="animate" :class="{ 'fade-in': isVisible[7] }">
    <FAQ />
  </div>
</template>

<style scoped>
.animate {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
