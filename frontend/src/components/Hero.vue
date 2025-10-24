<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="hero" id="try">
    <div class="hero-text">
      <span class="mini-title">{{ t('hero-mini-title') }}</span>
      <h1 class="hero-title">
        {{ t('hero-title-1') }} 
      </h1>
      <p class="hero-subtitle">
        {{ t('hero-subtitle') }}
      </p>
      <a
        href="https://forms.gle/cZw4tjWsRddnAWAL6"
        class="hero-button"
        data-key="cta-button"
        target="_blank"
      >{{ t('hero-cta') }}</a>
    </div>
    <div class="hero-logo">
      <img src="@/assets/images/mirai4.png" alt="Logo" class="glow-image" />
    </div>
  </section>
</template>

<script setup>
import { useLangStore } from '@/stores/lang'
const langStore = useLangStore()
const t = langStore.t
</script>

<style scoped>
.hero {
  background: linear-gradient(120deg, #0b102a, #131c3c);
  color: white;
  padding: 100px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.hero-text {
  max-width: 600px;
  z-index: 2;
}
.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
}
.hero-title em {
  font-style: italic;
}
.hero-subtitle {
  margin-top: 1rem;
  font-size: 1.25rem;
  color: #d4d4d4;
}
.hero-button {
  margin-top: 2rem;
  background: linear-gradient(to right, #005eff, #36d1dc);
  color: white;
  border: none;
  padding: 18px 36px;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease-in-out;
}
.hero-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px #00f2ff;
}
.hero-logo {
  flex-shrink: 0;
  padding: 20px;
}
.hero-logo img.glow-image {
  max-width: 400px;
  transition: transform 0.4s ease, filter 0.4s ease;
  filter: drop-shadow(0 0 20px #00f2ff);
}
.hero-logo img.glow-image:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0 30px #00f2ff);
}
@media (max-width: 768px) {
  .hero {
    padding: 80px 20px;
    text-align: center;
    justify-content: center;
  }

  .hero-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-logo img.glow-image {
    max-width: 280px;
  }
}
</style>