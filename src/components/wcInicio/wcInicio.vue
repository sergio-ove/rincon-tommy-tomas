<template>
  <div class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-5 max-w-md mx-4 sm:mx-6 lg:mx-8">
      <!-- Contenedor para la imagen -->
      <div class="relative w-32 h-32 mx-auto mb-3">
        <img class="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg" src="/src/assets/pastel.jpg" alt="tommy-thomas">
      </div>
      <h1 class="text-lg text-gray-700">Tommy Thomas</h1>
      <h3 class="text-sm text-gray-400">Disfrutón</h3>
      <wcMotorista></wcMotorista>
      <p class="text-xs text-gray-400 mt-4">Bienvenidos a mi página donde podréis disfrutar de mis aficiones, familia y amigos.</p>
      <button @click="pagBienvenida" class="hover:bg-blue-400 bg-indigo-600 px-6 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Acceder</button>
    </div>
   
  </div>
</template>
<script src="./wcInicio.js"></script>

<style scoped>


</style>