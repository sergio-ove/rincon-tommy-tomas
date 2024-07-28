<template>
    <div class="game-container">
      <h1>Juego de Memoria: Encuentra las Parejas</h1>
      <div class="grid">
        <div 
          v-for="(item, index) in shuffledItems" 
          :key="index" 
          class="grid-item" 
          @click="flipCard(index)"
        >
          <div 
            :class="['card', { 'is-flipped': item.isFlipped, 'is-matched': item.isMatched }]"
          >
            <div class="card-face card-front"></div>
            <div class="card-face card-back">
              <img :src="item.isFlipped || item.isMatched ? item.image : defaultImage" :alt="item.name" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="message" class="message">{{ message }}</div>
    </div>
  </template>
<script src="./wcJuego.js"></script>

<style>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f8ff;
}

h1 {
  color: #ff6347;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
}

.grid-item {
  width: 100px;
  height: 100px;
  margin: 10px;
  perspective: 1000px;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-front {
  background-color: #eee;
}

.card-back {
  transform: rotateY(180deg);
}

.card-back img {
  max-width: 100%;
  max-height: 100%;
}

.message {
  margin-top: 20px;
  font-size: 1.5rem;
  color: #32cd32;
}
</style>
