
  <template>
    <div class="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-800">
      <div class="carousel-wrapper relative">
        <div class="carousel-track flex" ref="track">
          <div class="carousel-slide bg-indigo-700 flex justify-center items-center h-64 text-white text-2xl">
            <img src="/src/assets/grupo.jpg" alt="">
          </div>
          <div class="carousel-slide bg-indigo-500 flex justify-center items-center h-64 text-white text-2xl">
            <img src="/src/assets/carrito.jpg" alt="">
          </div>
          <div class="carousel-slide bg-indigo-600 flex justify-center items-center h-64 text-white text-2xl">
            <img src="/src/assets/comida.jpg" alt="">
          </div>
          <div class="carousel-slide bg-indigo-600 flex justify-center items-center h-64 text-white text-2xl">
            <img src="/src/assets/juego.jpg" alt="">
          </div>
          <div class="carousel-slide bg-indigo-600 flex justify-center items-center h-64 text-white text-2xl">
            <img src="/src/assets/oto.jpg" alt="">
          </div>
          <div class="carousel-slide bg-indigo-600 flex justify-center items-center h-64 text-white text-2xl">
            <img src="/src/assets/piano.jpg" alt="">
          </div>
        </div>
        <button @click="prevSlide" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
          &#10094;
        </button>
        <button @click="nextSlide" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
          &#10095;
        </button>
      </div>
    </div>
  </template>
<script src="./wcAmigos.js"></script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
  height: 400px;
}

button {
  font-size: 1.5rem;
}
</style>