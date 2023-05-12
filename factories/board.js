class Board {
  constructor(width, height, owner) {
    this.width = width;
    this.height = height;
    this.owner = owner;
    this.board = [];
  }

  createSquare(tileNumber, shipPresent = false, hit = false) {
    return {
      tileNumber: tileNumber,
      shipPresent: false,
      hit: false,
    };
  }

  fillBoard() {
    let totalSquares = this.width * this.height;
    for (let i = 0; i < totalSquares; i++) {
      this.board.push(this.createSquare(i + 1));
    }
  }
}

export default Board;
