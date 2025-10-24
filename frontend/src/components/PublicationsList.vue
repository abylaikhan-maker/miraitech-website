<template>
  <section class="publications-list" id="publications">
    <h2 class="title">{{ t('our-publications') }}</h2>
    <div class="cards">
      <a
        v-for="(pub, index) in publications"
        :key="index"
        class="card"
        :href="pub.link"
        target="_blank"
        @mouseover="hovered = index"
        @mouseleave="hovered = null"
        :class="{ active: hovered === index }"
      >
        <p class="year">{{ pub.year }}</p>
        <p class="source">{{ pub.source }}</p>
        <h3 class="headline">{{ pub.title }}</h3>
        <span class="link">{{ t('read-more') }} →</span>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useLangStore } from '@/stores/lang'
const langStore = useLangStore()
const t = langStore.t
const hovered = ref(null);

const publications = [
  {
    year: '2025',
    source: 'IEEE Xplore',
    title: 'Noise-Optimized Signal Processing for TENG-Based Touch Sensing Using I2C Integrated Circuits',
    link: 'https://ieeexplore.ieee.org/document/11006356'
  },
  {
    year: '2024',
    source: 'The Advanced Materials Technologies',
    title: 'AI-Enhanced Gait Analysis Insole with Self-Powered Triboelectric Sensors for Flatfoot Condition Detection',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/admt.202401282'
  },
  {
    year: '2024',
    source: 'Wiley Online Library',
    title: 'Recycling Polyvinyl Chloride (PVC) Pipe Wastes intoPVC/ZnO Nanofiber-Based Triboelectric Nanogenerators',
    link: 'https://onlinelibrary.wiley.com/doi/epdf/10.1002/eem2.12884'
  },
  {
    year: '2024',
    source: 'IEEE Xplore',
    title: 'A Novel Pattern Recognition Method for Self-Powered TENG Sensor Embedded to the Robotic Hand',
    link: 'https://ieeexplore.ieee.org/abstract/document/10843698'
  },
  {
    year: '2024',
    source: 'The Advanced Sensor Research',
    title: 'Incorporating MIL-125 Metal-Organic Framework for Flexible Triboelectric Nanogenerators and Self-Powered Sensors for Robotic Grippers',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adsr.202300163'
  },
  {
    year: '2024',
    source: 'National Library of Medicine',
    title: 'Structural and Chemical Modifications Towards High-Performance of Triboelectric Nanogenerators',
    link: 'https://pubmed.ncbi.nlm.nih.gov/34328566/'
  }
];
</script>

<style scoped>
.title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #ffffff;
  position: relative;
  display: inline-block;
}
.publications-list {
  padding: 4rem 2rem;
  text-align: center;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  max-width: 300px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: inherit;
}
.card.active {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid #00e0d0;
}
.year {
  color: #00a8cc;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.source {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 1rem;
}
.headline {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}
.link {
  color: #007bff;
  font-weight: 600;
  text-decoration: none;
}
</style>