<template>
    <div class="carousel-wrapper relative">
      <div class="carousel-track flex" ref="track">
        <div class="carousel-slide bg-indigo-400 flex justify-center items-center h-64 text-white text-2xl"> <img src="/src/assets/grupo.jpg" alt=""></div>
        <div class="carousel-slide bg-indigo-500 flex justify-center items-center h-64 text-white text-2xl"><img src="/src/assets/carrito.jpg" alt=""></div>
        <div class="carousel-slide bg-indigo-600 flex justify-center items-center h-64 text-white text-2xl">Slide 3</div>
      </div>
      <button @click="prevSlide" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
        &#10094;
      </button>
      <button @click="nextSlide" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
        &#10095;
      </button>
    </div>
  </template>
<script src="./wcAmigos.js"></script>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 217px;

}
.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
}
button {
  font-size: 1.5rem;
}
</style>