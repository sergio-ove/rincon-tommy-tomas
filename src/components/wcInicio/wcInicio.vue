<template>
  <div
    class="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800 overflow-hidden relative">
    <div class="font-semibold text-center rounded-3xl border-double border-4 shadow-lg p-10 max-w-xs contenedor bg-red-500">
      <div>
        <video id="videoElement" src="/src/assets/sonidos/dj.mp4" loop muted class="rounded full"></video>
      </div>
      <button @click="pagBienvenida"
        class="hover:bg-blue-400 bg-indigo-800 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Acceder</button>
    </div>

    <div class="player-controls flex justify-center items-center space-x-4">
      <!-- Botón de Play -->
      <div @click="playMedia" class="control-button play-button">
        <img src="/src/assets/play.png" alt="Play" class="icon" />
      </div>

      <!-- Botón de Stop -->
      <div @click="stopMedia" class="control-button stop-button">
        <img src="/src/assets/stop.png" alt="Stop" class="icon" />
      </div>
    </div>

    <div>
      <!-- Elemento de audio -->
      <audio ref="audio">
        <source :src="musicSrc" type="audio/mp3" />
      </audio>
    </div>
  </div>

</template>

<script src="./wcInicio.js"></script>

<style scoped>
video {
  height: 280px;

}

.player-controls {
  margin-top: 20px;
}

.control-button {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
}

.control-button:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.icon {
  width: 24px;
  height: 24px;
}

.play-button {
  background-color: #4caf50;
  /* Color verde para el botón de play */
}

.stop-button {
  background-color: #f44336;
  /* Color rojo para el botón de stop */
}


</style>