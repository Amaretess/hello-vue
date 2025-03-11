<script setup>
import RickRoll from '@/videos/RickRoll.MP4'
</script>

<template>
    <div id="RickRoll">
        <video controls autoplay>
            <source :src="RickRoll" type="video/mp4" />
            Your browser does not support the video tag. It was supposed to be a RickRoll. Touche.
        </video>
    </div>
</template>

<style scoped>
#RickRoll {
    display: flex;
    width: 100%;
    justify-content: center;
}
</style>