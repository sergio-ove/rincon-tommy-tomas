// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import wcInicio from '../components/wcInicio/wcInicio.vue';
import wcBienvenida from '../components/wcBienvenida/wcBienvenida.vue';
import wcAmigos from '../components/wcAmigos/wcAmigos.vue';
import wcFamilia from '../components/wcFamilia/wcFamilia.vue';
import wcAficiones from '../components/wcAficiones/wcAficiones.vue';
import wcJuego from '../components/wcJuego/wcJuego.vue';


const routes = [
  { path: '/', name: 'inicio', component: wcInicio },
  { path: '/bienvenida', name: 'bienvenida', component: wcBienvenida },
  { path: '/amigos', name: 'amigos', component: wcAmigos },
  { path: '/familia', name: 'familia', component: wcFamilia },
  { path: '/aficiones', name: 'aficiones', component: wcAficiones },
  { path: '/juego', name: 'juego', component: wcJuego },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
