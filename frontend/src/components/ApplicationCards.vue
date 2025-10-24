<template>
  <section class="application-cards">
    <h2 class="section-title">{{ t('app-title') }}</h2>
    <p class="section-description">
      {{ t('app-desc-1') }}<br />
      {{ t('app-desc-2') }}
    </p>
    <div class="cards-container">
      <div class="card" v-for="(app, index) in applications" :key="index">
        <img :src="app.image" class="background-image" alt="Application image" />
        <div class="card-overlay">
          <h3>{{ t(app.title) }}</h3>
          <p v-html="t(app.description)"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLangStore } from '@/stores/lang';
const langStore = useLangStore();
const t = langStore.t;

import sportImage from '@/assets/images/applications-sports.png';
import rehabImage from '@/assets/images/applications-rehab.png';

const applications = [
  {
    title: 'app-sports-title',
    description: 'app-sports-desc',
    image: sportImage
  },
  {
    title: 'app-rehab-title',
    description: 'app-rehab-desc',
    image: rehabImage
  }
];
</script>

<style scoped>

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
}
.application-cards {
  padding: 4rem 1rem;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
}

.section-description {
  font-size: 1rem;
  max-width: 700px;
  margin: 1rem auto 2rem;
  color: #ffffff;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.card {
  position: relative;
  width: 100%;
  max-width: 550px;
  height: 256px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(70%) sepia(30%) hue-rotate(180deg) saturate(120%);
  transition: filter 0.3s ease;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem;
  color: white;
  text-align: left;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 50, 0.3);
  backdrop-filter: blur(2px);
}

.card-overlay h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.card-overlay p {
  font-size: 1rem;
  line-height: 1.4;
}
</style>