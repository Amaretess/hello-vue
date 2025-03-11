<script setup>
import Tulantro from '../../images/pfp/Tulantro.jpg';
import Jurnin from '../../images/pfp/Jurnin.jpg';
import Keytonn from '../../images/pfp/Keytonn.jpg';
import Paragon from '../../images/pfp/Paragon.jpg';
import Niko from '../../images/pfp/Niko.jpg';

const teamMembers = [
  { name: "The BIG Paragon", role: "The Eyes", image: Paragon, twitter: "https://twitter.com/ParagonTweaks" },
  { name: "Jurnin", role: "The Brains", image: Jurnin, twitter: "https://twitter.com/Jurnin" },
  { name: "Tulantro", role: "The Brawns", image: Tulantro, twitter: "https://twitter.com/TheTulantro" },
  { name: "Keytonn", role: "The Hands", image: Keytonn, twitter: "https://twitter.com/Keytonnbtw" },
  { name: "Niko", role: "The Spine", image: Niko, twitter: "https://twitter.com/undefinedniko" },
];
</script>

<template>
  <div class="team-container">
    <h2 class="team-title">Meet the team</h2>
    <div class="team-grid">
      <a 
        v-for="member in teamMembers" 
        :key="member.name" 
        :href="member.twitter" 
        target="_blank" 
        rel="noopener noreferrer"
        class="team-member"
      >
        <img :src="member.image" :alt="member.name" class="team-image" />
        <p class="team-name">{{ member.name }}</p>
        <p class="team-role">{{ member.role }}</p>
      </a>
    </div>
  </div>

  <div class="header">
    <h1>HISTORY OF <span class="highlight">PARAGON</span></h1>
  </div>
</template>

<style scoped>
/* Mobile-First Design */
.team-container {
  text-align: center;
  padding: 40px 20px;
}

.team-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
}

/* Team Member Styling */
.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-member:hover {
  transform: scale(1.05);
}

.team-image {
  width: 60vw;
  max-width: 180px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.team-name {
  margin-top: 10px;
  font-weight: bold;
  font-size: 1rem;
}

.team-role {
  font-size: 0.9rem;
  color: gray;
  text-align: center;
}

/* Tablet View (≥ 600px) */
@media (min-width: 600px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop View (≥ 900px) */
@media (min-width: 900px) {
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    max-width: 1200px;
  }
}

/* Header */
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  text-align: center;
}

.highlight {
  color: var(--main);
}
</style>
