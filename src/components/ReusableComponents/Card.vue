<script setup>
defineProps({
    number: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="container">
        <div class="number-container">
            <span class="number">{{ number }}</span>
        </div>
        <div class="booger-aids">
            <span class="title">{{ title }}</span>
            <span class="description">{{ description }} </span>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 2rem;
    width: 100%;
    margin: 0; /* Ensures full width */
}

@media (max-width: 993px) {
  .container {
    padding: 0;
    margin: 0; /* Removes unwanted spacing */
    width: 100%;
  }
}

.container:hover {
    transform: scale(1.1); /* Makes it pop up */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.number {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}

.number-container {
    width: 100px;
    height: 100px;
    border: 3px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    background-color: rgb(163, 32, 32);
}

.title {
    height: 70px;
    margin-top: 10px;
    font-weight: bold;
    font-size: 2rem;
    line-height: 2rem;
}

.booger-aids {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.description {
    height: 100px;
    margin-top: 10px;
    text-align: center;
    line-height: 2rem;
}
</style>
