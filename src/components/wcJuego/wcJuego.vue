<template>
    <div class="game-container">
      <h1>Encuentra el Sol</h1>
      <div class="grid">
        <div v-for="(item, index) in gridItems" :key="index" class="grid-item" @click="checkItem(item)">
          <img :src="item.image" :alt="item.name" />
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
  width: 300px;
}

.grid-item {
  width: 100px;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
}

.grid-item img {
  max-width: 80px;
  max-height: 80px;
}

.message {
  margin-top: 20px;
  font-size: 1.5rem;
  color: #32cd32;
}
</style>
