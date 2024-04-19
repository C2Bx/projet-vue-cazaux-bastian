<template>
    <div>
      <h1>À propos</h1>
      <p>Nom: CAZAUX</p>
      <p>Prénom: Bastian</p>
      <div class="game-container">
        <h2>Devinez le nombre</h2>
        <p>Essayez de deviner le nombre entre 1 et 100 :</p>
        <input v-model.number="guess" @keyup.enter="checkGuess" type="number" min="1" max="100" />
        <button @click="checkGuess">Vérifier</button>
        <p v-if="feedback">{{ feedback }}</p>
        <button v-if="gameOver" @click="resetGame">Recommencer</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        randomNumber: this.generateRandomNumber(),
        guess: null,
        feedback: '',
        gameOver: false,
      };
    },
    methods: {
      generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
      },
      checkGuess() {
        if (this.guess === this.randomNumber) {
          this.feedback = 'Félicitations! Vous avez trouvé le nombre!';
          this.gameOver = true;
        } else if (this.guess < this.randomNumber) {
          this.feedback = 'Plus grand!';
        } else {
          this.feedback = 'Plus petit!';
        }
      },
      resetGame() {
        this.randomNumber = this.generateRandomNumber();
        this.guess = null;
        this.feedback = '';
        this.gameOver = false;
      }
    }
  }
  </script>
  
  <style>
  .game-container {
    margin-top: 20px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    text-align: center;
  }
  input[type="number"] {
    margin: 10px;
  }
  </style>
  