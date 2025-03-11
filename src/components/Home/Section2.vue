<script setup>
import {inject} from "vue";
import image from '../../images/graphic.png'


const isMobile = inject("isMobile");
</script>
<template>
  <div class="container" :class="{ mobile: isMobile }">
    <div class="card">
      <img :src="image"/>
    </div>
    <div class="heading">
      <h1>Miliseconds Matter</h1>
      <h2 class="subtitle">We Make Them Count</h2>
      <p class="description">  
        Unlike generic services, we go beyond basic tweaks, using <b>latency reduction</b>, <b>input lag minimization</b>, <b>network packet optimization</b>, and to give you the competitive edge. Our expert tuning of CPU, GPU, RAM, and networking ensures <b>higher FPS</b>, <b>lower input delay</b>, and <b>ultra-smooth gameplay</b>. If you want pro-level performance with zero compromises, we deliver results <b>no standard optimizer can match.</b>
      </p>
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
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  .heading {
    width: 50%;
  }


  .heading h2 {
    color: var(--main);
  }

  .container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    
  }

.card {
  background-color: transparent;
  border: 2px solid white;
  width: 400px;
  height: 400px;
  margin: 2rem;
}

</style>
