<template>
  <div class="coming-soon">
    <div id="logo">
      <img :src="image" />
    </div>
    <div class="container">
      <p id="subtitle">We are working hard to bring something amazing</p>
      <h1>COMING SOON</h1>
      <div class="timer">
        <div class="countdown">
          <div class="time-box">
            <span class="number">{{ days }}</span>
            <span class="label">Days</span>
          </div>
          <div class="time-box">
            <span class="number">{{ hours }}</span>
            <span class="label">Hours</span>
          </div>
          <div class="time-box">
            <span class="number">{{ minutes }}</span>
            <span class="label">Minutes</span>
          </div>
          <div class="time-box">
            <span class="number">{{ seconds }}</span>
            <span class="label">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import image from "../images/gradient-logo.png";
import { ref, onMounted, onUnmounted } from "vue";

const targetDate = new Date("2025-04-10T00:00:00").getTime();
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
let intervalId;

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  days.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeLeft % (1000 * 60)) / 1000);
};

onMounted(() => {
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
  .coming-soon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 90vh;
  font-family: Amenti-bold, sans-serif;
  padding: 20px;
}

#logo img {
  width: 300px; /* Default size for mobile */
  height: auto;
  margin-bottom: 4rem;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
  margin-bottom: 9rem;
}

h1 {
  font-size: 2rem; /* Smaller heading for mobile */
  letter-spacing: 0.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 15px;
  letter-spacing: 1px;
}

.countdown {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.time-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  width: 60px; /* Smaller width for mobile */
  text-align: center;
}

.number {
  font-size: 2rem; /* Smaller numbers for mobile */
  font-weight: bold;
  color: var(--main);
}

.label {
  font-size: 0.9rem;
  margin-top: 5px;
  color: white;
}

/* Desktop View */
@media (min-width: 600px) {

  #logo {
    margin-bottom: 2rem; 
  }

  #logo img {
    width: 500px;
  }


  h1 {
    font-size: 4rem;
    letter-spacing: 1rem;
  }

  p {
    font-size: 18px;
  }

  .countdown {
    gap: 20px;
  }

  .time-box {
    width: 100px; /* Bigger boxes for desktop */
  }

  .number {
    font-size: 3rem; /* Bigger numbers */
  }

  .label {
    font-size: 1rem;
  }
}

</style>
