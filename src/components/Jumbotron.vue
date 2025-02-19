<script setup>
import paragon from '../images/gradient-wmark.png';
import paragonTop from '../images/gradient-logo.png';


</script>
<template>
  
  <div class="container">
    <div class="paragon-top-container">
      <img class="paragon-top" :src="paragonTop" />
    </div>
    <div class="header">
      <h1>Max Performance. Zero Lag. Ultimate Gaming.</h1>
      <p class="description">
        Struggling with low FPS, stuttering, or input lag? We optimize your PC for peak speed, stability, and responsiveness—so you can focus on winning, not troubleshooting
      </p>
      <div class="buttons">
        <button class=" button">Book Now</button>
        <button class=" button">Learn more</button>
      </div>
    </div>
    <div class="paragon-container">
      <img class="paragon" :src="paragon" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 70vh;
  width: 100%;
  margin-top: 1rem;
}

.branding {
  margin: 2rem;
}

.paragon-top {
  margin-top: 2rem;
  max-width: 100%;
  height: auto;
}


@media (min-width: 1000px) {
  .paragon-top-container {
    display: none;
  }
}

@media (max-width: 600px) {
  .paragon-top-container {
    width: 395px;
    height: 60px;
  }
}

.paragon {
  width: 585px;
  height: 135px;

}
.paragon-container {
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 60%;
  height: 100%;
}

@media (max-width: 1050px) {
  .paragon {
    width: 497px;
    height: 115px;
  }
}


@media (max-width: 1000px) {
  .paragon {
    display: none;
  }
}


@media (max-width: 1000px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
  .header {
    margin-top: 5rem;
  }
}

.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
  height: 100%;
}



.block {
  padding: 1rem;
}




.sub-heading {
  font-size: 4rem;
  color: var(--main);
}

.description {
  width: 80%;
}

.buttons {
  display: flex;
  width: 70%;
  gap: 1rem;
}


.button {
  border: 2px solid var(--main);
  color: white;
  padding: 8px;
  border-radius: 6px;
}

</style>
