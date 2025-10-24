<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="testimonials-section" id="testimonials">
    <h2 class="title">{{ t('testimonials-title') }}</h2>
    <div class="testimonial-scroll-wrapper">
      <div class="testimonial-grid">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
          <div class="testimonial-header">
            <img class="testimonial-avatar" :src="testimonial.avatar" :alt="testimonial.name" />
            <div class="testimonial-info">
              <p class="testimonial-name">{{ t(testimonial.name) }}</p>
              <p class="testimonial-role">{{ t(testimonial.role) }}</p>
            </div>
          </div>
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">{{ t(testimonial.text) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLangStore } from '@/stores/lang';
const { t } = useLangStore();

const testimonials = [
  {
    name: 'testimonial-name-1',
    role: 'testimonial-role-1',
    avatar: require('@/assets/images/sergei_olimp.png'),
    text: 'testimonial-text-1'
  },
  {
    name: 'testimonial-name-2',
    role: 'testimonial-role-2',
    avatar: require('@/assets/images/orys.png'),
    text: 'testimonial-text-2'
  },
  {
    name: 'testimonial-name-3',
    role: 'testimonial-role-3',
    avatar: require('@/assets/images/kazakh.png'),
    text: 'testimonial-text-3'
  },
  {
    name: 'testimonial-name-4',
    role: 'testimonial-role-4',
    avatar: require('@/assets/images/Bolat.png'),
    text: 'testimonial-text-4'
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
  display: block;
  text-align: center;
}

.testimonials-section {
  padding: 2rem;
  overflow-x: auto;
}

.testimonial-scroll-wrapper {
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 1rem;
}

.testimonial-grid {
  display: flex;
  gap: 1.5rem;
}

.testimonial-card {
  background-color: #0d1b3e;
  color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  min-width: 300px;
  flex-shrink: 0;
  border: 1px solid rgba(0, 255, 255, 0.2);
}

.testimonial-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 0.75rem;
  object-fit: cover;
}

.testimonial-info {
  display: flex;
  flex-direction: column;
}

.testimonial-name {
  font-weight: bold;
  color: #20e0c2;
}

.testimonial-role {
  font-size: 0.85rem;
  color: #c0c0c0;
}

.testimonial-stars {
  color: #ffd700;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.testimonial-text {
  font-style: italic;
  line-height: 1.4;
}
</style>
