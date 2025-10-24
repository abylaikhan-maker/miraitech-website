<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="events-section" id="events">
    <div class="publications-wrapper">
      <h2 class="publications-title">{{ t('events-title') }}</h2>
      <div class="events-scroll-wrapper">
        <div class="events-track">
          <div class="event-card" v-for="(event, index) in events" :key="index">
            <img :src="event.image" :alt="t(event.alt)" class="event-image" />
            <a :href="event.link" class="event-link">{{ t('events-read-more') }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLangStore } from '@/stores/lang';
const langStore = useLangStore();
const t = langStore.t;

import event1 from '@/assets/events/events1.png';
import event2 from '@/assets/events/events2.1.png';

const events = [
  {
    image: event1,
    alt: 'events-seminar-1',
    link: 'https://www.instagram.com/p/DJ6UStLzhCc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    image: event2,
    alt: 'events-seminar-4',
    link: 'https://www.instagram.com/p/DJ6UrQOz9Hp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  }
];
</script>

<style scoped>
.events-section {
  padding: 4rem 2rem;
  background: #ffffff;
  text-align: center;
}

.publications-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #0c1127;
  position: relative;
  display: inline-block;
}

.publications-title::after {
  content: "";
  width: 60%;
  height: 4px;
  background: linear-gradient(to right, #16f2b3, #2264ff);
  position: absolute;
  bottom: -0.5rem;
  left: 20%;
}


.events-scroll-wrapper {
  overflow-x: auto;
  padding: 1rem 0;
}

.events-track {
  display: flex;
  justify-content: center; /* Center the tiles horizontally */
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1rem 0;
}

.event-card {
  flex: 0 0 auto;
  width: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  margin-right: 1.5rem;
}

.event-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}


.event-image {
  width: 100%;
  height: auto;
  display: block;
}

.event-link {
  padding: 1rem;
  color: #2264ff;
  font-weight: 700;
  text-decoration: none;
}

.event-link:hover {
  text-decoration: underline;
}
</style>