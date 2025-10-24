<template>
  <section class="metrics-section">
    <h2 class="section-title">{{ t('metrics-title') }}</h2>
    <p class="section-subtitle">
      {{ t('metrics-subtitle') }}
    </p>
    <div class="metrics-grid">
      <div
        v-for="(metric, index) in metrics"
        :key="index"
        class="metric-tile"
      >
        <img :src="metric.icon" alt="icon" class="metric-icon-img" />
        <div class="metric-label">{{ t(metric.label) }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLangStore } from '@/stores/lang';
const langStore = useLangStore();
const t = langStore.t;

const metrics = [
  { label: 'metric-asymmetry', icon: new URL('@/assets/images/metrics_icon1.png', import.meta.url).href },
  { label: 'metric-step-length', icon: new URL('@/assets/images/metrics_icon2.png', import.meta.url).href },
  { label: 'metric-pressure', icon: new URL('@/assets/images/metrics_icon3.png', import.meta.url).href },
  { label: 'metric-dynamics', icon: new URL('@/assets/images/metrics_icon4.png', import.meta.url).href },
  { label: 'metric-contact-phases', icon: new URL('@/assets/images/metrics_icon5.png', import.meta.url).href },
  { label: 'metric-roll-phases', icon: new URL('@/assets/images/metrics_icon6.png', import.meta.url).href },
];
</script>

<style scoped>
.metrics-section {
  padding: 80px 20px;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/laptop.png') center/cover no-repeat;
  border-radius: 20px;
  margin: 40px 20px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #f8f9ff;
}

.section-subtitle {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #ffffff;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.metric-tile {
  background: rgba(0, 22, 60, 0.7);
  padding: 40px 20px;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.metric-tile:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.metric-icon-img {
  width: 256px;
  height: 160px;
  margin-bottom: 16px;
  filter: invert(74%) sepia(96%) saturate(332%) hue-rotate(122deg) brightness(94%) contrast(89%);
}

.metric-label {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
