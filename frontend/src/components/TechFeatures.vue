<template>
  <section class="technology-section" id="solution">
    <div class="tech-container">
      <div class="tech-header">
        <div class="tech-info">
          <p class="tech-label">{{ t('solution-label') }}</p>
          <h2>{{ t('solution-title') }}</h2>
          <p class="tech-desc">
            {{ t('solution-desc') }}
          </p>
          <a
            href="https://youtu.be/FYdaoMKvWgM?si=i2eZqBrzlG_G4fMS"
            class="cta-button tech-button"
            target="_blank"
          >{{ t('solution-cta') }}</a>
        </div>
        <img class="tech-gif" src="@/assets/images/insoles.png" alt="Smart Insole" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLangStore } from '@/stores/lang'
const langStore = useLangStore()
const t = langStore.t
</script>

<style scoped>
.technology-section {
  padding: 5rem 2rem;
  background: #fff;
  color: #111;
}

.tech-container {
  max-width: 1200px;
  margin: 0 auto;
}

.tech-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.tech-info {
  max-width: 600px;
}

.tech-label {
  font-weight: 600;
  color: #555;
  margin-bottom: 0.5rem;
}

.tech-desc {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #444;
}

.tech-button {
  display: inline-block;
  margin-top: 2rem;
  background: linear-gradient(to right, #005eff, #36d1dc);
  color: #fff;
  padding: 14px 28px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 14px;
  box-shadow: 0 12px 24px rgba(0, 94, 255, 0.25);
  transition: 0.3s;
  text-decoration: none;
}

.tech-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 32px rgba(0, 94, 255, 0.3);
}

.tech-gif {
  max-width: 500px;
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>