<template>
    <div>
      <!-- Elemento de audio con reproducción automática y en bucle -->
      <audio ref="audio" loop>

        <source :src="musicSrc" type="audio/wav" />
   
      </audio>
    </div>
  </template>
<script src="./wcMusica.js"></script>

<style scoped>
.music-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    background-color: red;
}

.play-button,
.pause-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
}

.play-button:hover,
.pause-button:hover {
    background-color: #45a049;
}
</style>