// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import wcInicio from '../components/wcInicio/wcInicio.vue';
import wcBienvenida from '../components/wcBienvenida/wcBienvenida.vue';

const routes = [
  { path: '/', component: wcInicio },
  { path: '/bienvenida', component: wcBienvenida }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
