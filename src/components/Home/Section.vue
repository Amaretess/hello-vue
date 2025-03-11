<script setup>
import {inject} from "vue";
import image from '../../images/graphic.png'


const isMobile = inject("isMobile");
</script>
<template>
  <div class="container" :class="{ mobile: isMobile }">
    <div class="heading">
      <h1>Your Skills Deserve the Fastest PC.</h1>
      <h2 class="subtitle">Optimize. Accelerate. Dominate.</h2>
      <p class="description">  
        At Paragon, we optimize PCs for peak performance, <b>resolving</b> issues like low
        FPS, high ping, and system lag. Our expert tuning enhances speed, stability, and network
        efficiency, giving gamers a competitive edge. With cutting-edge software, we boost performance
        while strengthening security, ensuring a fast and reliable system. Experience the next level of
        PC optimization with our industry-leading solutions.</p>
      </div>
      <div class="card">
        <img :src="image"/>
      </div>
  </div>
</template>


<style scoped>

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid white;
    height: 60vh;
  }


  .heading {
    width: 50%;
  }

  .heading h2 {
    color: var(--main)
  }

  .container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

.card {
  background-color: transparent;
  width: 400px;
  height: 400px;
  border: 2px solid white;
}

</style>
