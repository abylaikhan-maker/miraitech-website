<template>
  <section class="how-it-works" id="how">
    <div class="container">
      <h2 class="section-title">{{ t('how-title') }}</h2>
      <p class="section-subtitle">{{ t('how-subtitle') }}</p>

      <div class="steps-grid">
        <div class="step-card" v-for="(step, index) in steps" :key="index">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-icon">
            <svg-icon type="mdi" :path="step.path" />
          </div>
          <h3>{{ t(step.title) }}</h3>
          <p>{{ t(step.text) }}</p>
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
import { mdiShoePrint, mdiBluetooth, mdiWalk, mdiFileChart } from '@mdi/js';

const steps = [
  {
    path: mdiShoePrint,
    title: 'how-step1-title',
    text: 'how-step1-text'
  },
  {
    path: mdiBluetooth,
    title: 'how-step2-title',
    text: 'how-step2-text'
  },
  {
    path: mdiWalk,
    title: 'how-step3-title',
    text: 'how-step3-text'
  },
  {
    path: mdiFileChart,
    title: 'how-step4-title',
    text: 'how-step4-text'
  }
];
</script>

<style scoped>
.how-it-works {
  background: linear-gradient(to bottom right, #0b102a, #131c3c);
  color: white;
  padding: 80px 20px;
  text-align: center;
  border-radius: 20px;
  margin: 40px 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
}

.section-subtitle {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #c7c7d5;
}

.steps-grid {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.step-card {
  background: radial-gradient(circle at top left, #122445, #0a1a38);
  padding: 24px;
  border-radius: 16px;
  width: 220px;
  box-shadow: 0 0 20px rgba(77, 235, 201, 0.08), 0 12px 32px rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border: 1px solid rgba(77, 235, 201, 0.15);
}

.step-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 8px 32px rgba(77, 235, 201, 0.3);
}

.step-number {
  width: 36px;
  height: 36px;
  background: #36d1dc;
  border-radius: 50%;
  color: #0b102a;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 255, 255, 0.5);
}

.step-icon {
  font-size: 3rem;
  color: #4debc9;
  filter: drop-shadow(0 0 8px #4debc977);
  margin-bottom: 16px;
  transition: transform 0.3s ease;
}

.step-card:hover .step-icon {
  transform: scale(1.3) rotate(8deg);
}

.step-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.step-card p {
  font-size: 0.95rem;
  color: #d4d4d4;
}
</style>