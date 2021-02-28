const { Game } = require("../../bowling-score/bowling");

const gameScore = (frames) => {
  const scores = [];
  const game = Game.fromArrays(frames);
  try {
    for (const i of Array(10).keys()) {
      scores.push((scores[i - 1] || 0) + game.frames[i].score());
    }
  } catch (e) {
    if (e.message !== "this.next is undefined") throw e;
    scores.push(undefined);
  }
  return scores;
};

module.exports = gameScore;
