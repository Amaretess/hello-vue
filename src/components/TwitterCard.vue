<template>
  <div class="tweet-card" v-on:click="openTweet">
    <div class="profile">
      <img :src="avatar" alt="User Avatar" class="avatar" />
      <div>
        <p class="display-name">{{ author }}</p>
        <p class="handle">{{ handle }}</p>
      </div>
    </div>

    <div class="tweet-text" @click.stop>
      <template v-for="thisText in text">
        <span v-if="typeof thisText == 'object'">
          <a target="_blank" :href="thisText.url">{{ thisText.text }}</a>
        </span>
        <span v-else>
          {{ thisText }}
        </span>
      </template>
    </div>

    <p class="timestamp">{{ timestamp }}</p>
  </div>
</template>

<script setup>
var props = defineProps({
  url: { type: String, required: true},
  avatar: { type: String, required: true },
  author: { type: String, required: true },
  handle: { type: String, required: true },
  text: { type: Array, required: true },
  timestamp: { type: String, required: true }
});

function openTweet() {
  window,open(props.url, "_blank");
}
</script>

<style scoped>
.tweet-card {
  height: 100%;
  width: 100%;
  background-color: #0d1117;
  color: white;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #2f3336;
  cursor: pointer;
}

.profile {
  display: flex;
  gap: 10px;
  height: 44px;
  overflow: hidden;
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.display-name {
  font-weight: 600;
  color: #e6edf3;
  margin-bottom: 0;
}

.handle {
  color: #8b949e;
  font-size: 0.875rem;
  margin-top: 0;
}

.tweet-text {
  overflow: hidden;
  height: calc(100% - 44px - 1rem - 15px);
  margin-top: 0.75rem;
  font-size: 15px;
  line-height: 1.4;
  color: #c9d1d9;
  cursor: default;
}

.mention {
  color: #1d9bf0;
  font-weight: 600;
}

.timestamp {
  color: #8b949e;
  font-size: 0.875rem;
  margin-top: 0.75rem;
  line-height: 10px;
}
</style>
