export default class GameView {
  constructor() {}

  updateBoard(game) {
    const winningCombination = game.findWinningCombinations();

    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board__tile[data-index='${i}']`);

      tile.classList.remove("winner");
      tile.textContent = game.board[i];

      let tileType = game.board[i] == "X" ? "tile-x" : "tile-o";
      tile.innerHTML = `<span class="${tileType}">${
        game.board[i] ? game.board[i] : ""
      }</span>`;

      if (winningCombination && winningCombination.includes(i)) {
        tile.classList.add("winner");
      }
    }
    this.updateTurn(game);
  }

  updateTurn(game) {
    let playerX = document.querySelector(".player__o");
    let playerO = document.querySelector(".player__x");

    playerO.classList.remove("active");
    playerX.classList.remove("active");
    if (game.turn == "X") {
      playerO.classList.add("active");
    } else {
      playerX.classList.add("active");
    }
  }
}
