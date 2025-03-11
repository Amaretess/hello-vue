<script setup>
import { ref, nextTick } from "vue";

// Sample FAQ data
const faqs = ref([
  {
    question: "How do I open a support ticket?",
    answer: "You can open a support ticket through our Discord server by selecting either a Pro Service or Normal Service ticket.",
    open: false
  },
  {
    question: "What information do I need to share?",
    answer: "You'll need to provide your system specs, including peripherals and OS details, via our form.",
    open: false
  },{
    question: "What does your PC optimization service include?",
    answer: "You'll need to provide your system specs, including peripherals and OS details, via our form.",
    open: false
  },{
    question: "Do you offer a free initial analysis or consultation?",
    answer: "Answer here",
    open: false
  },{
    question: "How can your optimization services improve my gaming performance?",
    answer: "Answer here",
    open: false
  },{
    question: "Do you offer ongoing maintenance and support after the optimization?",
    answer: "Answer here",
    open: false
  },
  {
    question: "How long does the process take?",
    answer: "Service times vary depending on the complexity of the optimization. On average, our standard service is completed within 30 minutes, while our Pro service typically takes 45 minutes, ensuring a thorough and efficient performance enhancement.",
    open: false
  }
]);

// Function to toggle FAQ items while ensuring only one stays open
const toggleFAQ = async (index) => {
  faqs.value.forEach((faq, i) => {
    faq.open = i === index ? !faq.open : false;
  });

  // Wait for Vue to update the DOM, then adjust the max-height dynamically
  await nextTick();
  document.querySelectorAll(".faq-answer-wrapper").forEach((el, i) => {
    el.style.maxHeight = faqs.value[i].open ? el.scrollHeight + "px" : "0px";
  });
};
</script>

<template>
  <div class="faq-container">
    <h2 class="faq-title">Frequently Asked Questions</h2>
    <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
      <div class="faq-question" @click="toggleFAQ(index)">
        <span>{{ faq.question }}</span>
        <span class="faq-icon">{{ faq.open ? "−" : "+" }}</span>
      </div>
      <div class="faq-answer-wrapper">
        <div class="faq-answer">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #1a1a1a;
  border-radius: 10px;
  color: white;
}

.faq-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.faq-item {
  border-bottom: 1px solid #444;
  padding: 15px 0;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.faq-question:hover {
  color: rgb(163, 32, 32);
}

.faq-icon {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Smooth expand/collapse effect */
.faq-answer-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: 0;
  transform: translateY(-10px);
  will-change: max-height, opacity, transform;
}

/* Open state */
.faq-answer-wrapper[style*="max-height"] {
  opacity: 1;
  transform: translateY(0);
}

.faq-answer {
  font-size: 1rem;
  color: #ddd;
  padding-top: 10px;
}
</style>
