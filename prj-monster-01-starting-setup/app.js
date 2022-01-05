const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      isStart: false,
      logs: []
    }
  },
  methods: {
    calDamage(max, min) {
      console.log(max, min)
      return Math.floor(Math.random() * (max - min)) + min
    },
    attackMonster(e, max = 12, min = 5) {
      this.currentRound++
      const val = this.calDamage(max, min)
      this.monsterHealth -= val
      this.addLogMessage('Player', 'attack', val)
      this.attackPlayer(15, 8);
    },
    attackPlayer(max = 8, min = 8) {
      const val = this.calDamage(max, min)
      this.playerHealth -= val
      this.addLogMessage('Monster', 'attack', val)
    },
    specialAttackMonster(e, max = 22, min = 12) {
      this.currentRound++
      const val = this.calDamage(max, min)
      this.monsterHealth -= val
      this.attackPlayer(17, 10)
      this.addLogMessage('Player', 'special-attack', val)
    },
    healPlayer(e, max = 15, min = 8) {
      this.currentRound++
      const val = this.calDamage(max, min)
      if (this.playerHealth + val > 100) {
        this.playerHealth = 100
      } else {
        this.playerHealth += val
      }
      this.attackPlayer(10, 8)
      this.addLogMessage('Player', 'heal', val)
    },
    newGame() {
      this.isStart = true
      this.currentRound = 0;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.logs = []
    },
    surrender() {
      this.playerHealth = 0;
    },
    addLogMessage(who, action, val) {
      this.logs.unshift({
        actionBy: who,
        action,
        val
      })
    }
  },
  computed: {
    playerHealthBar() {
      return { width: this.playerHealth + '%' }
    },
    monsterHealthBar() {
      return { width: this.monsterHealth + '%' }
    },
    newRound() {
      return this.winner ? 'New Game' : 'Start Game'
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.playerHealth = 0;
        this.monsterHealth = 0;
        this.winner = 'draw';
        this.isStart = false;

      } else if (value <= 0) {
        this.playerHealth = 0;
        this.winner = 'monster';
        this.isStart = false;

      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.playerHealth = 0;
        this.monsterHealth = 0;
        this.winner = 'draw';
        this.isStart = false;
      } else if (value <= 0) {
        this.monsterHealth = 0;
        this.winner = 'player';
        this.isStart = false;
      }
    }
  }
})

app.mount('#game')