// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import wcInicio from '../components/wcInicio/wcInicio.vue';
import wcBienvenida from '../components/wcBienvenida/wcBienvenida.vue';
import wcAmigos from '../components/wcAmigos/wcAmigos.vue';

const routes = [
  { path: '/', name: 'inicio', component: wcInicio },
  { path: '/bienvenida', name: 'bienvenida', component: wcBienvenida },
  { path: '/amigos', name: 'amigos', component: wcAmigos }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
