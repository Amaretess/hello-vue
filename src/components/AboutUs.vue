<script setup></script>
<template>
  <div class="container">About us section</div>
</template>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  border: 2px solid var(--main);
  position: relative;
}

@media (max-width: 768px) {
  .container {
    height: 10vh;
    border: 2px solid blue;
  }
}
</style>
