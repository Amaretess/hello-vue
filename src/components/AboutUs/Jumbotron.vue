<script setup>
import paragon from '../../images/gradient-logo.png';
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>Who are we? We are</h1>
      <div class="image">
        <img :src="paragon" />
      </div>
    </div>
    <div class="description">
      <p>
        We’re a US-based team dedicated to making PC optimization and troubleshooting affordable for gamers worldwide. Gaming is a passion everywhere, but not everyone has the budget for the latest hardware. That’s where we come in—fine-tuning your system to squeeze out every drop of performance for the best FPS, lower latency, and smoother connections. With 20+ years of experience, our trusted experts have been at the forefront of performance tuning, ensuring your rig runs at top speed without breaking the bank.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60vh;
  width: 100%;
}

@media (max-width: 1100px) {
  .container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 7rem;
}

@media (max-width: 1100px) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-right: 0;
  }
  .description {
    text-align: center;
    width: 100%;
  }

  .header h1 {
    margin-bottom: 1rem;
  }

  .image img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
}

.header img {
  margin-top: 2rem;
  width: 95%;
  height: auto;
}

.description {
  font-size: 20px;
  margin-top: 2rem;
  line-height: 35px;
  width: 60%;
  height: auto;
}

.carousel-title {
  display: flex;
  justify-content: center;
  margin: 2rem;
  text-align: center;
}
</style>
