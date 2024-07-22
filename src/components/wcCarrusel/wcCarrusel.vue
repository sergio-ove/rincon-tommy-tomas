<template>
    <div>
        <Carousel :perPage="1" :navigationEnabled="true">
            <Slide v-for="(image, index) in images" :key="index">
                <img :src="image" alt="" class="w-full h-auto object-cover">
            </slide>
        </carousel>
      
    </div>
</template>
<script src="./wcCarrusel.js"></script>

<style scoped>
.vue3-carousel .vue3-carousel-slide img {
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>