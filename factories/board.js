import Ship from "./ship";

class Board {
  constructor(width, height, owner) {
    this.width = width;
    this.height = height;
    this.owner = owner;
    this.board = [];
    this.totalSquares = width * height;
  }

  createSquare(id, shipPresent = false, hit = false) {
    return {
      id: id,
      shipPresent: false,
      hit: false,
    };
  }

  fillBoard() {
    for (let i = 0; i < this.totalSquares; i++) {
      this.board.push(this.createSquare(i));
    }
  }

  placeShip(id, isVertical) {
    if (isVertical) {
    }
  }

  receiveAttack(id) {
    let tile = this.board[id]; //should be shallow copy
    if (tile.hit) {
      return "You have already attacked this target!";
    }
    tile.hit = true;
    if (tile.shipPresent) {
      //need to get shipname and call shipName.hit
    } else {
      return "Miss!";
    }
  }
}

export default Board;
