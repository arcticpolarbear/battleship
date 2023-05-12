import Ship from "./ship";

class Board {
  constructor(width, height, owner) {
    this.width = width;
    this.height = height;
    this.owner = owner;
    this.board = [];
  }

  createSquare(id, shipPresent = false, hit = false) {
    return {
      id: id,
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

  receiveAttack(id) {
    let tile = this.board[id - 1]; //should be shallow copy
    if (tile.hit) {
      return "You have already attacked this target!";
    }
    tile.hit = true;
    console.log(this.board[id - 1]);
    if (tile.shipPresent) {
      //need to get shipname and call shipName.hit
    } else {
      return "Miss!";
    }
  }
}

export default Board;
