// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'; // Changed import
import Home from '../components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes,
});

export default router;