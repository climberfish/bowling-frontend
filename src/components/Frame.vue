<template>
  <div class="frame">
    <div class="header">{{ position }}</div>
    <div class="scores">
      <div class="score first">{{ firstScore }}</div>
      <div class="score">{{ secondScore }}</div>
      <div class="score" v-if="position === 10" >{{ thirdScore }}</div>
    </div>
    <div class="total-score">{{ totalScore }}</div>
  </div>
</template>

<script>
export default {
  props: {
    position: Number,
    scores: Array,
    totalScore: Number
  },
  computed: {
    firstScore() {
      const [first] = this.scores;
      if (first === 0) return '-';
      if (first === 10) return 'X';
      return first;
    },
    secondScore() {
      const [first, second] = this.scores;
      if (second === 0) return '-';
      if (first + second === 10) return '/';
      if (first === 10 && second === 10) return 'X';
      return second;
    },
    thirdScore() {
      const [,, third] = this.scores;
      if (third === 10) return 'X';
      return third;
    }
  }
}
</script>

<style scoped>
.frame {
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: lightyellow;
  border: 1px solid gray;
}
.header {
  background-color: goldenrod;
  border: 1px solid gray;
  border-left: none;
  border-right: none;
  font-weight: bold;
}
.score {
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  flex: 1;
}
.score.first {
  border: none;
}
.scores {
  display: flex;
  flex: 1;
}
.total-score {
  flex: 1;
}
</style>
