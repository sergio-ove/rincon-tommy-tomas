<template>

    <div class="w-100">
        <img src="/src/assets/motoristaAnimado.png" id="motorcycle" alt="Animated Motorcycle">
    </div>

</template>
<script src="./wcMotorista.js"></script>

<style scoped>
#motorcycle {
    position: absolute;
    bottom: 15px;
    /* Ajusta la posición según sea necesario */
    will-change: transform;
    /* Sugerencia al navegador para optimizar el rendimiento */
}


img {
    height: 80px;
    width: 80px;
}
</style>