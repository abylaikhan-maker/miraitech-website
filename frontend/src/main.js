// src/main.js
import { createApp } from 'vue';
import App from './App.vue';

// Import router and store
import router from './router';
import { createPinia } from 'pinia';

// Create Vue app
const app = createApp(App);

// Register global plugins
app.use(createPinia());
app.use(router);

// Mount the app
app.mount('#app');
