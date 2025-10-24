<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* Add to your main global CSS file or layout wrapper */
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  background: #0b102a;
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

/* Remove extra section padding if present */
section {
  padding-left: 0;
  padding-right: 0;
  width: 100%;
}
</style>