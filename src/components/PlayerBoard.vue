<template>
  <div class="board">
    <div class="header">{{ playerName }}</div>
    <Frame
      v-for="(frame, index) of [...frames, ...Array(10 - frames.length).fill([])]"
      v-bind:key="index"
      v-bind:position="index + 1"
      :scores="frame"
      :totalScore="totalScores[index]"
    />
    <!-- <div class="total">{{ playerName }}</div> -->
  </div>
</template>

<script>
import Frame from './Frame';
import gameScore from '../services/bowlingCalculator';

export default {
  components: { Frame },
  data() {
    return {
      playerName: 'Pava',
      frames: [[5, 4], [8, 2], [10, 0], [10, 0], [1, 0], [9, 1], [0, 10]],
    }
  },
  computed: {
    totalScores () {
      return gameScore(this.frames);
    }
  }
}
</script>

<style scoped>
.board {
  display: flex;
}
.frame {
  flex: 1;
}
.board > .header {
  align-items: center;
  background-color: lightyellow;
  border-bottom: 1px solid gray;
  display: flex;
  flex: 1.5;
  justify-content: center;
  padding: 16px;
}
</style>
