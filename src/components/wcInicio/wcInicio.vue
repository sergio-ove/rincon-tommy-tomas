<template>
<!-- component -->
<div class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
   <div class="bg-orange-400 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
     <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="/src/assets/pastel.jpg" alt="product designer">
     <h1 class="text-lg text-gray-700"> Tommy Thomas </h1>
     <h2 class="text-sm text-black "> Un Tipo disfrutón </h2>
     <wcMotorista></wcMotorista>

     <p class="text-xs text-black mt-4">  Bienvenidos a mi rinconcito </p>
     <button @click="pagBienvenida" class="hover:bg-blue-400 bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Acceder</button>
   </div>
 </div>
</template>
<script src="./wcInicio.js"></script>

<style scoped>
img {
  object-fit: cover;
  width: 160px; /* O cualquier tamaño mayor que prefieras */
  height: 160px; /* O cualquier tamaño mayor que prefieras */
}

</style>