<template>
  <section class="tech-helps-section">
    <div class="container">
      <h2 class="section-title">{{ t('helps-title') }}</h2>
      <div class="feature-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon">
            <svg-icon type="mdi" :path="feature.path" />
          </div>
          <h3 class="feature-title">{{ t(feature.title) }}</h3>
          <p class="feature-text">{{ t(feature.text) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import { useLangStore } from '@/stores/lang';

const langStore = useLangStore();
const t = langStore.t;

import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiBrain,
  mdiCellphoneLink,
  mdiRunFast,
  mdiCloudUploadOutline,
  mdiHomeCity,
  mdiAccountCircleOutline
} from '@mdi/js';
const features = [
  {
    path: mdiBrain,
    title: 'helps-ai-title',
    text: 'helps-ai-text'
  },
  {
    path: mdiCellphoneLink,
    title: 'helps-diagnosis-title',
    text: 'helps-diagnosis-text'
  },
  {
    path: mdiRunFast,
    title: 'helps-tracking-title',
    text: 'helps-tracking-text'
  },
  {
    path: mdiCloudUploadOutline,
    title: 'helps-reporting-title',
    text: 'helps-reporting-text'
  },
  {
    path: mdiHomeCity,
    title: 'helps-monitoring-title',
    text: 'helps-monitoring-text'
  },
  {
    path: mdiAccountCircleOutline,
    title: 'helps-interface-title',
    text: 'helps-interface-text'
  }
];
</script>


<style scoped>
.tech-helps-section {
  padding: 80px 20px;
  background: #f5f8fa;
  color: #0b102a;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
}

.feature-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

.feature-card {
  background: white;
  padding: 24px;
  width: 300px;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.animated-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  color: #14c9cb;
  transition: transform 0.4s ease;
}

.feature-card:hover .animated-icon {
  transform: rotateY(15deg) scale(1.2);
}

.feature-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.feature-text {
  font-size: 0.95rem;
  color: #444;
}
</style>

