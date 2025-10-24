<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="partners-section" id="partners">
    <div class="partners-intro">
      <h3 class="partners-subheading">{{ t('partners-title') }}</h3>
    </div>

    <div class="partners-scroll-wrapper">
      <div class="partners-logos">
  <img v-for="(logo, index) in logos" :key="index" :src="logo.src" />
  <img v-for="(logo, index) in logos" :key="index+logos.length" :src="logo.src" />
</div>
    </div>
  </section>
</template>
<script setup>
import { useLangStore } from '@/stores/lang'
const langStore = useLangStore()
const t = langStore.t

import part3 from '@/assets/partners/part3.png'
import part1 from '@/assets/partners/part1.png'
import univee from '@/assets/partners/univee.png'
import part5 from '@/assets/partners/part5.png'
import part7 from '@/assets/partners/part7.png'
import part4 from '@/assets/partners/part4.png'
import ortodok from '@/assets/partners/ortodok.png'
import fc1 from '@/assets/partners/astana.png'

const logos = [
  { src: part3, altKey: 'partner-inmotion' },
  { src: part1, altKey: 'partner-idsport' },
  { src: univee, altKey: 'partner-medcenter' },
  { src: part5, altKey: 'partner-trauma' },
  { src: part7, altKey: 'partner-hospital2' },
  { src: part4, altKey: 'partner-greenclinic' },
  { src: ortodok, altKey: 'partner-ortodok' },
  { src: fc1, altKey: 'partner-fc-astana' }
]
</script>
<style scoped>
.partners-section {
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #e9f0fa, #ffffff);
  text-align: center;
  overflow: hidden;
  position: relative;
}

.partners-subheading {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #222;
}

.partners-scroll-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.partners-logos {
  display: inline-flex;
  gap: 3.5rem;
  align-items: center;
  animation: scroll 20s linear infinite;
  will-change: transform; /* Optimize animation performance */
  padding: 1rem 0;
  position: relative;
  left: 0;
}

/* Logo styling */
.partners-logos img {
  height: 80px;
  max-width: 180px;
  object-fit: contain;
  filter: brightness(0) grayscale(1) contrast(0.2);
  transition: transform 0.3s ease, filter 0.3s ease;
  flex-shrink: 0; /* Prevent shrinking */
}

/* Hover effects */
.partners-logos img:hover {
  transform: scale(1.1);
  filter: brightness(0.3) grayscale(0.5) contrast(0.8);
}

/* Edge fade effect (optional) */
.partners-scroll-wrapper::before,
.partners-scroll-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
}

.partners-scroll-wrapper::before {
  left: 0;
  background: linear-gradient(to right, #e9f0fa, transparent);
}

.partners-scroll-wrapper::after {
  right: 0;
  background: linear-gradient(to left, #e9f0fa, transparent);
}

/* Animation keyframes */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 1.75rem)); /* Half the gap */
  }
}

/* Pause on hover */
.partners-logos:hover {
  animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .partners-section {
    padding: 3rem 1rem;
  }

  .partners-logos {
    gap: 2rem;
    animation-duration: 15s;
  }

  .partners-logos img {
    height: 60px;
    max-width: 120px;
  }

  .partners-scroll-wrapper::before,
  .partners-scroll-wrapper::after {
    width: 50px;
  }
}

@media (max-width: 480px) {
  .partners-logos {
    gap: 1.5rem;
    animation-duration: 12s;
  }
}
</style>