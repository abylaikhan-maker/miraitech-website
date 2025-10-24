<template>
  <section class="news-list-section">
    <h2 class="section-title">{{ t('news-title') }}</h2>
    
    <!-- Recents Subsection -->
    <div class="recents-subsection">
      <h3 class="subsection-title">{{ t('recents-title') }}</h3>
      <div class="recents-container">
        <div
          v-for="(recent, index) in recentItems"
          :key="'recent-'+index"
          class="recent-card"
        >
          <img :src="recent.image" alt="Recent news image" />
          <div class="recent-content">
            <p class="date">{{ recent.date }}</p>
            <h3>{{ recent.title }}</h3>
            <p class="description">{{ recent.description }}</p>
            <a :href="recent.link" class="watch-link" target="_blank" rel="noopener">{{ recent.linkText }}</a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Original News Scroll -->
    <h3 class="subsection-title">{{ t('all-news-title') }}</h3>
    <div class="news-scroll-container">
      <div
        v-for="(news, index) in allNewsItems"
        :key="index"
        class="news-card"
      >
        <img :src="news.image" alt="News image" />
        <div class="news-content">
          <p class="date">{{ news.date }}</p>
          <h3>{{ news.title }}</h3>
          <p>{{ news.description }}</p>
          <a :href="news.link" class="watch-link" target="_blank" rel="noopener">{{ news.linkText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLangStore } from '@/stores/lang';
import { computed } from 'vue';

const langStore = useLangStore();
const t = langStore.t;

const rawRecentItems = [
  {
    date: '14.07.2025',
    titleKey: 'triatlon-title',
    descKey: 'triatlon-desc',
    linkTextKey: 'news-read-more',
    image: new URL('@/assets/news/recent1.png', import.meta.url).href,
    link: 'https://www.instagram.com/miraitech.ai/p/DMFucP5NC65/?img_index=1'
  },
  {
    date: '02.07.2025',
    titleKey: 'fc1-title',
    descKey: 'fc1-desc',
    linkTextKey: 'news-read-more',
    image: new URL('@/assets/news/recent2.png', import.meta.url).href,
    link: 'https://www.instagram.com/er10.kz/p/DLm5TLESipX/?img_index=1'
  }
];

const rawNewsItems = [
  {
    date: '23.04.2025',
    titleKey: 'news-digital-title',
    descKey: 'news-digital-desc',
    linkTextKey: 'news-read-more',
    image: new URL('@/assets/news/news1.png', import.meta.url).href,
    link: 'https://digitalbusiness.kz/2025-04-23/kazahstanskie-uchenie-pridumali-umnie-stelki-rasskazivaem-v-chem-ih-unikalnost/'
  },
  {
    date: '05.03.2025',
    titleKey: 'news-steppe-title',
    descKey: 'news-steppe-desc',
    linkTextKey: 'news-read-more',
    image: new URL('@/assets/news/news2.png', import.meta.url).href,
    link: 'https://the-tech.kz/mirai-tech-a-startup-transforming-rehabilitation-in-medicine-and-sports/'
  },
  {
    date: '20.12.2025',
    titleKey: 'news-forbes-title',
    descKey: 'news-forbes-desc',
    linkTextKey: 'news-read-more',
    image: new URL('@/assets/news/news3.png', import.meta.url).href,
    link: 'https://seds.nu.edu.kz/news/tpost/i16i0udoc1-seds-professors-and-students-project-mir'
  },
  {
    date: '18.01.2025',
    titleKey: 'news-startup-title',
    descKey: 'news-startup-desc',
    linkTextKey: 'news-watch',
    image: new URL('@/assets/news/news6.png', import.meta.url).href,
    link: 'https://www.instagram.com/reel/DFwRqiqo2fA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    date: '05.03.2025',
    titleKey: 'news-umc-title',
    descKey: 'news-umc-desc',
    linkTextKey: 'news-watch',
    image: new URL('@/assets/news/news5.png', import.meta.url).href,
    link: 'https://www.instagram.com/p/DI3MgimASUN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    date: '10.05.2025',
    titleKey: 'news-feedback-title',
    descKey: 'news-feedback-desc',
    linkTextKey: 'news-watch',
    image: new URL('@/assets/news/news6.png', import.meta.url).href,
    link: 'https://www.instagram.com/p/DHWOFuWgcJz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    date: '05.03.2025',
    titleKey: 'news-pilot1-title',
    descKey: 'news-pilot1-desc',
    linkTextKey: 'news-watch',
    image: new URL('@/assets/news/news7.png', import.meta.url).href,
    link: 'https://www.instagram.com/p/DJThi_eza_O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    date: '05.03.2025',
    titleKey: 'news-pilot2-title',
    descKey: 'news-pilot2-desc',
    linkTextKey: 'news-watch',
    image: new URL('@/assets/news/news8.png', import.meta.url).href,
    link: 'https://www.instagram.com/p/DJThi_eza_O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    date: '05.03.2025',
    titleKey: 'news-motion-title',
    descKey: 'news-motion-desc',
    linkTextKey: 'news-watch',
    image: new URL('@/assets/news/news10.png', import.meta.url).href,
    link: 'https://www.instagram.com/reel/DIl0rlxA8nO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  }
];

const recentItems = computed(() =>
  rawRecentItems.map(item => ({
    ...item,
    title: t(item.titleKey),
    description: t(item.descKey),
    linkText: t(item.linkTextKey)
  }))
);

const allNewsItems = computed(() =>
  rawNewsItems.map(item => ({
    ...item,
    title: t(item.titleKey),
    description: t(item.descKey),
    linkText: t(item.linkTextKey)
  }))
);
</script>

<style scoped>
.news-list-section {
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
}

.news-scroll-container {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  margin-top: 1rem;
}

.news-card {
  flex: 0 0 auto;
  width: 300px;
  background-color: #0a1a3f;
  color: white;
  border-radius: 16px;
  overflow: hidden;
  scroll-snap-align: start;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: scale(1.05);
}

.news-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-content {
  padding: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #ffffff;
  position: relative;
  display: block;
  text-align: center;
}

/* Recents subsection styles */
.recents-subsection {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subsection-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
  text-align: center;
}

.recents-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  width: 100%;
}

.recent-card {
  background-color: #0a1a3f;
  color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  width: 400px;
  max-width: 100%;
}

.recent-card:hover {
  transform: scale(1.03);
}

.recent-card img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.recent-content {
  padding: 1.5rem;
}

.recent-content .description {
  margin: 1rem 0;
  line-height: 1.5;
}

.watch-link {
  color: #00ffa3;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .recents-container {
    flex-direction: column;
    align-items: center;
  }
  
  .recent-card {
    width: 100%;
    max-width: 400px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .subsection-title {
    font-size: 1.5rem;
  }
}
</style>