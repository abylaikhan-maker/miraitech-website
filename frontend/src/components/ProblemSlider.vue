<template>
  <section class="section" id="technology">
    <div class="container">
      <h2 class="section-title">{{ t('tech-title') }}</h2>
      <p class="section-subtitle">
        {{ t('tech-subtitle') }}
      </p>

      <div class="card-grid">
        <div class="card" v-for="(item, index) in problems" :key="index">
          <div class="card-image-wrapper">
            <img :src="item.image" :alt="`problem-${index}`" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLangStore } from '@/stores/lang'
const langStore = useLangStore()
const t = langStore.t

import problem1 from '@/assets/images/enpr1.png'
import problem2 from '@/assets/images/enpr2.png'
import problem3 from '@/assets/images/enpr3.png'
import problem4 from '@/assets/images/enpr4.png'
import problem5 from '@/assets/images/enpr5.png'

const problems = [
  { image: problem1 },
  { image: problem2 },
  { image: problem3 },
  { image: problem4 },
  { image: problem5 },
]
</script>

<style scoped>
.section {
  background: #f7f9fc;
  color: #0b102a;
  padding: 80px 20px;
  text-align: center;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
}
.section-subtitle {
  margin-top: 0.75rem;
  font-size: 1.1rem;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.card-grid {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;
  flex-wrap: wrap;
}
.card {
  width: 300px;
  height: 170px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  background: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}
.card-image-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

</style>
