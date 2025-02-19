<script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ""
    }
  })
</script>
<template>
  <div class="container">
    <div class="heading">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
    <div class="card">
      

    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100vw;
  height: 60vh;
  position: relative;
  display: flex; 
  justify-content: space-between;
}

.heading {
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .container {
    height: 10vh;
    border: 2px solid blue;
  }
}


.card {
  width: 400px;
  height: 400px;
  opacity: 0.1;
}
</style>
