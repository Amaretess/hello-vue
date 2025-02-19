<script setup>
import TwitterCard from './TwitterCard.vue';
import { ref } from 'vue';

const cardWidth = 300;
const cardMargin = 10;
const tweets = [
{"url":"https://x.com/swaywtw/status/1871768533161656705?s=46","avatar":"https://pbs.twimg.com/profile_images/1877361787319762945/glD2cju-_normal.jpg","handle":"@swaywtw","timestamp":"8:02 PM · Dec 24, 2024","author":"SG Sway","text":["SHOUTOUT ",{"url":"https://x.com/ParagonTweaks","text":"@ParagonTweaks"}," FOR THE PC TWEAK GAME FEELS CRAZY"]},
{"url":"https://x.com/ssikezz/status/1803837142843494417?s=46","avatar":"https://pbs.twimg.com/profile_images/1883387297938501632/gH5V_cGp_normal.jpg","handle":"@sSikezz","timestamp":"10:07 AM · Jun 20, 2024","author":"LG Sikezz","text":["Shoutout ",{"url":"https://x.com/ParagonTweaks","text":"@ParagonTweaks"}," for optimizing my pc and getting me a consistent 300 FPS "]},
{"url":"https://x.com/dezignfull/status/1764832780846846296?s=46","avatar":"https://pbs.twimg.com/profile_images/1860584655218499584/nY2t7_dS_normal.jpg","handle":"@Dezignfull","timestamp":"5:58 PM · Mar 4, 2024","author":"100T Dezignful","text":["Shoutout ",{"url":"https://x.com/ParagonTweaks","text":"@ParagonTweaks"}," for fixing the issues I was having w my pc and making my apex feel juicyyyy"]},
{"url":"https://x.com/zaptohh/status/1769861852949868889?s=46","avatar":"https://pbs.twimg.com/profile_images/1819323212930383872/jWl8XNFA_normal.jpg","handle":"@zaptohh","timestamp":"4:02 PM · Mar 18, 2024","author":"TSM zap","text":["Preciate ",{"url":"https://x.com/ParagonTweaks","text":"@ParagonTweaks"}," for optimizing my pc, if you want your game feeling insane hit him up"]},
{"url":"https://x.com/deyyfn/status/1751316463808299266?s=46","avatar":"https://pbs.twimg.com/profile_images/1707231436351164416/5SnckR3U_normal.jpg","handle":"@DeyyFN","timestamp":"10:49 AM · Jan 27, 2024","author":"Deyy","text":["thanks ",{"url":"https://x.com/ParagonTweaks","text":"@ParagonTweaks"}," ",{"url":"https://x.com/Jurnin","text":"@Jurnin"}," for the tweak game feels way better"]}
];

const tweetRef = ref(tweets);
const cardStyleWidth = ref(cardWidth + "px");
const cardStyleMargin = ref(cardMargin + "px");
const transformPixels = (((cardWidth + (cardMargin * 2)) * (tweets.length * 2)) / 2);
const transformStylePixels = ref("-" + (((cardWidth + (cardMargin * 2)) * (tweets.length * 2)) / 2) + "px");
const transformRate = transformPixels * 0.01621621621;
const transformStyleRate = ref(transformRate + "s");
</script>

<template>
  <div id="carousel-container">
    <div id="carousel-slider">
      <template v-for="index in 2" :key="index">
        <div class="carousel-card" v-for="tweet in tweetRef">
          <TwitterCard 
            :url="tweet.url"
            :avatar="tweet.avatar"
            :author="tweet.author"
            :handle="tweet.handle"
            :text="tweet.text"
            :timestamp="tweet.timestamp"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
#carousel-container {
  overflow: hidden;
  margin: 0 60px;
  margin-bottom: 7rem;
  overflow-y: scroll;
  position: relative;
  z-index: 0;
  -webkit-mask-image: linear-gradient(to right, transparent 2%, black 15%, black 85%, transparent 98%);
  mask-image: linear-gradient(to right, transparent 2%, black 15%, black 85%, transparent 98%);
}

#carousel-slider {
  display: inline-flex;
  width: auto;
  animation: slide-left-card v-bind(transformStyleRate) linear infinite;
}

.carousel-card {
  aspect-ratio: 2/1.2;
  width: v-bind(cardStyleWidth);
  margin: v-bind(cardStyleMargin);
}

@keyframes slide-left-card {
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(v-bind(transformStylePixels))
  }
}
</style>