<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <a href="#" class="footer-link">Home</a>
      <a href="#" class="footer-link">About</a>
      <a href="#" class="footer-link">Products</a>
      <a href="#" class="footer-link">Contact</a>
      <a href="#" class="footer-link">Our Partners</a>
      <a href="#" class="footer-link">Privacy Policy</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 20vh;
  gap: 15px;
}

.footer-link {
  color: white; /* Blue link color */
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>
