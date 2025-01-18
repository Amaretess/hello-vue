<script setup>
import paragon from '../images/gradient.svg'
</script>
<template>
  <div class="container">
    <div class="header">
      <h1 class="heading">Low FPS? Input delay?</h1>
      <div class="branding">
        <img class="paragon" :src="paragon" />
      </div>
      <p class="description">
        It is time to make your computer feel brand new! With our PC optimization service, we can
        make your PC faster, fix input delay, and help you get higher FPS for smooth gaming.
      </p>
      <div class="buttons">
        <button class="btn btn-lg mt-3 button">Book Now</button>
        <button class="btn btn-lg mt-3 button">Learn more</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  border: 2px solid var(--main);
  height: 80vh;
  width: 80%;
  margin-top: 1rem;
}

.branding {
  margin: 2rem;
}

.paragon {
  width: 400px;
  height: 100px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.block {
  padding: 1rem;
}

.button {
  background-color: var(--main);
  color: white;
  margin: 1rem;
}

.heading {
  font-size: 4rem;
  font-family: 'Amenti-black';
}

.sub-heading {
  font-size: 4rem;
  color: var(--main);
}

.description {
  width: 60%;
}

.buttons {
  display: flex;
}
</style>
