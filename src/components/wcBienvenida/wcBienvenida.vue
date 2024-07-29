<template>
  <div class="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-800">
    <div class="carousel-wrapper relative">
      <div class="carousel-track flex" ref="track">
        <!-- Familia -->
        <div class="carousel-slide flex justify-center items-center h-100 w-96 text-white text-2xl">
          <button @click="pagSeccion('familia')">
            <div class="relative h-full w-full overflow-hidden bg-orange-500 rounded-lg shadow-lg">
              <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
              </svg>
              <div class="relative pt-10 px-10 flex items-center justify-center h-full w-full">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                  style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
                </div>
                <img class="relative w-60 rounded-md" src="/src/assets/cumple.jpg" alt="">
              </div>
              <div class="relative text-white px-6 pb-6 mt-6">
                <div class="flex justify-between">
                  <span class="block font-semibold text-2xl">Mi familia</span>
                </div>
              </div>
            </div>
          </button>
        </div>

        <!-- Amigos -->
        <div class="carousel-slide flex justify-center items-center h-100 w-96 text-white text-2xl">
          <button @click="pagSeccion('amigos')">
            <div class="relative h-full w-full overflow-hidden bg-teal-500 rounded-lg shadow-lg">
              <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
              </svg>
              <div class="relative pt-10 px-10 flex items-center justify-center h-full w-full">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                  style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
                </div>
                <img class="relative w-60 rounded-md" src="/src/assets/grupo.jpg" alt="">
              </div>
              <div class="relative text-white px-6 pb-6 mt-6">
                <div class="flex justify-between">
                  <span class="block font-semibold text-2xl">Mis Amigos</span>
                </div>
              </div>
            </div>
          </button>
        </div>

        <!-- Aficiones -->
        <div class="carousel-slide flex justify-center items-center h-100 w-96 text-white text-2xl">
          <button @click="pagSeccion('aficiones')">
            <div class="relative h-full w-full overflow-hidden bg-purple-500 rounded-lg shadow-lg">
              <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
              </svg>
              <div class="relative pt-10 px-10 flex items-center justify-center h-full w-full">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                  style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
                </div>
                <img class="relative w-60 rounded-md" src="/src/assets/motorista.jpg" alt="">
              </div>
              <div class="relative text-white px-6 pb-6 mt-6">
                <div class="flex justify-between">
                  <span class="block font-semibold text-2xl">Mis Aficiones</span>
                </div>
              </div>
            </div>
          </button>
        </div>

        <!-- Juego -->
        <div class="carousel-slide flex justify-center items-center h-100 w-96 text-white text-2xl">
          <button @click="pagSeccion('juego')">
            <div class="relative h-full w-full overflow-hidden bg-purple-500 rounded-lg shadow-lg">
              <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
              </svg>
              <div class="relative pt-10 px-10 flex items-center justify-center h-full w-full">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                  style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
                </div>
                <video class="relative w-60 rounded-md" src="/src/assets/sonidos/dj.mp4" autoplay loop muted></video>
              </div>
              <div class="relative text-white px-6 pb-6 mt-6">
                <div class="flex justify-between">
                  <span class="block font-semibold text-2xl">Zona disfrutona</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- Botones de navegación -->
      <button @click="prevSlide" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg">
        &#10094;
      </button>
      <button @click="nextSlide" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg">
        &#10095;
      </button>
    </div>
  </div>
</template>

<script src="./wcBienvenida.js"></script>

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
}

button {
  font-size: 1.5rem;
}
</style>