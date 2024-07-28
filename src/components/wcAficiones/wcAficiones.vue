<template>
    <div class="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-800">
        <div class="carousel-wrapper relative">
            <div class="carousel-track flex" ref="track">
                <div class="carousel-slide bg-indigo-400 flex justify-center items-center h-64 text-white text-2xl">
                    <img src="/src/assets/isidro.jpg" alt="">
                </div>
                <div class="carousel-slide bg-indigo-500 flex justify-center items-center h-64 text-white text-2xl">
                    <img src="/src/assets/sombrero.jpg" alt="">
                </div>
                <div class="carousel-slide bg-indigo-600 flex justify-center items-center h-64 text-white text-2xl">
                    <img src="/src/assets/barsa.jpg" alt="">
                </div>
                <div class="carousel-slide bg-indigo-600 flex justify-center items-center h-64 text-white text-2xl">
                    <img src="/src/assets/tortitas.jpg" alt="">
                </div>
                <div class="carousel-slide bg-indigo-600 flex justify-center items-center h-64 text-white text-2xl">
                    <img src="/src/assets/motorista.jpg" alt="">
                </div>
                <div class="carousel-slide bg-indigo-600 flex justify-center items-center h-64 text-white text-2xl">
                    <img src="/src/assets/granjero.jpg" alt="">
                </div>
            </div>
            <button @click="prevSlide"
                class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                &#10094;
            </button>
            <button @click="nextSlide"
                class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                &#10095;
            </button>
        </div>
    </div>
</template>
<script src="./wcAficiones.js"></script>

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
    height: 400px;
    min-width: 100%;
    box-sizing: border-box;
}

button {
    font-size: 1.5rem;
}
</style>