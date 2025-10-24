<template>
  <section class="video-carousel" id="blog">
    <h2 class="carousel-title">{{ t('carousel-title') }}</h2>
    <p class="carousel-subtitle">{{ t('carousel-subtitle') }}</p>
    <div class="carousel">
      <button @click="prev" class="arrow left">&#8249;</button>
      <div class="video-frame" v-for="(video, index) in visibleVideos" :key="index">
        <video :src="video" controls muted playsinline />
      </div>
      <button @click="next" class="arrow right">&#8250;</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLangStore } from '@/stores/lang';
const { t } = useLangStore();

import video1 from '@/assets/videos/reels1.mp4';
import video2 from '@/assets/videos/reels2.mp4';
import video3 from '@/assets/videos/reels3.mp4';
import video4 from '@/assets/videos/reels4.mp4';

const videos = [video1, video2, video3, video4];
const current = ref(0);

const visibleVideos = computed(() => {
  const total = videos.length;
  const prev = (current.value - 1 + total) % total;
  const next = (current.value + 1) % total;
  return [videos[prev], videos[current.value], videos[next]];
});

function next() {
  current.value = (current.value + 1) % videos.length;
}

function prev() {
  current.value = (current.value - 1 + videos.length) % videos.length;
}
</script>

<style scoped>

.carousel-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
}
.carousel-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #ffffff;
}
.video-carousel {
  text-align: center;
  padding: 80px 20px;
}



.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  overflow: hidden;
}

.video-frame {
  width: 240px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  opacity: 0.4;
  transition: transform 0.3s, opacity 0.3s;
}

.video-frame:nth-child(2) {
  opacity: 1;
  transform: scale(1.1);
}

.video-frame video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.arrow {
  font-size: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #64dfdf;
}
</style>
