<script setup>
import Card from '../ReusableComponents/Card.vue';

</script>

<template>
  <div class="container">
    <h1 class="heading">How Does It Work?</h1>
    <div class="cards-container">
      <Card number="1" title="Open a Ticket" description="Using Discord open either a Pro Service ticket or Normal Service ticket"/>
      <Card number="2" title="Share your Specs" description="Fill out our form with your core system specs as well as peripherals and OS" />
      <Card number="3" title="Connect to technician!" description="Watch as your PC gets tweaked before your very eyes!" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}


.heading {
  color: white;
}

.cards-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; /* Controls spacing in row layout */
}

@media (max-width: 993px) {
  .cards-container {
    flex-direction: column;
    align-items: stretch; /* Ensures cards take full width */
    gap: 0; /* Removes extra spacing */
  }
}


</style>
