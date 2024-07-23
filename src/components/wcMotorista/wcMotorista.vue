<template>

    <div class="motorista-container">
        <img src="/src/assets/tommyMotero.png" id="motorcycle" alt="Animated Motorcycle">
    </div>

</template>
<script src="./wcMotorista.js"></script>

<style scoped>
.motorista-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    /* Centra la imagen horizontalmente */
}

.motorista-container img {
    height: 270px;
    width: 230px;
    /* Ajusta el tamaño de la imagen según sea necesario */
    margin-bottom: 0;
    /* Asegura que no haya margen inferior */
}
</style>