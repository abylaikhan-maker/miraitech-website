<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <Hero />
    <ProblemSlider />
    <TechFeatures />
    <TechFeatureHelps />
    <HowItWorks />
    <MetricsCarousel />
    <ApplicationCards />
    <PublicationsList />
    <VideoCarousel />
    <NewsList />
    <Testimonials />
    <Partners />
    <MadeInKZ />
    <Events />
    <PreOrderNow />
  </main>
</template>

<script setup>
// Use relative imports for GitHub Pages deployment
import Hero from './Hero.vue';
import ProblemSlider from './ProblemSlider.vue';
import TechFeatures from './TechFeatures.vue';
import TechFeatureHelps from './TechFeatureHelps.vue';
import HowItWorks from './HowItWorks.vue';
import MetricsCarousel from './MetricsCarousel.vue';
import ApplicationCards from './ApplicationCards.vue';
import PublicationsList from './PublicationsList.vue';
import VideoCarousel from './VideoCarousel.vue';
import NewsList from './NewsList.vue';
import Testimonials from './Testimonials.vue';
import Partners from './Partners.vue';
import MadeInKZ from './MadeInKZ.vue';
import Events from './Events.vue';
import PreOrderNow from './PreOrderNow.vue';
</script>


<style scoped>
main {
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px; /* Adjust based on header height */
}

@media (max-width: 768px) {
  main {
    padding-top: 100px;
  }
}
</style>