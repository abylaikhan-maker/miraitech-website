<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="made-section dark-layout" id="made-tech">
    <div class="made-container">
      <div class="made-text">
        <h2 class="made-title">
          {{ t('made-title-line1') }}<br />
          {{ t('made-title-line2') }}
        </h2>
        <p class="made-description">
          {{ t('made-description') }}
        </p>
      </div>
      <div class="made-logos">
        <img src="@/assets/madeinkz.png" alt="Made in Kazakhstan" class="made-logo" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLangStore } from '@/stores/lang';
const langStore = useLangStore();
const t = langStore.t;
</script>

<style scoped>
.made-section {
  padding: 4rem 1rem;
  background: linear-gradient(145deg, #0c1127 0%, #172248 100%);
  color: white;
  text-align: left;
}

.made-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.made-title {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.4;
}

.made-description {
  margin-top: 1rem;
  font-size: 1.1rem;
  max-width: 500px;
}

.made-logo {
  max-height: 100px;
  object-fit: contain;
}
</style>
