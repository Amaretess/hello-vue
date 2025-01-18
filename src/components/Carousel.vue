<script setup>
import Card from './Card.vue'
</script>
<template>
  <div class="container">
    <div class="cards">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 2px solid var(--main);
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
    border: 5px solid red;
    margin-bottom: 4rem;
  }
}

.cards {
  display: flex;
  align-items: center;
  width: 100%;
}
@media (max-width: 768px) {
  .cards {
    flex-direction: column;
    border: 2px solid blue;
    margin: 0;
  }
}
</style>
