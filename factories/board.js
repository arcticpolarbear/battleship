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

  horizontalPossible(id, shipLength) {
    //note this one uses "id" instead of "new id"
    if (id + shipLength > this.totalSquares) {
      return false;
    }
    //uses integer multiple to check if shipLength exceeds row length
    let quotient = Math.floor(id / this.width);
    let newId = id - quotient * this.width;
    if (newId + shipLength > this.width) {
      return false;
    }

    return true;
  }

  verticalPossible(id, shipLength) {
    //uses integer multiple to check if shipLength exceeds column height
    //here "id" is checked against "totalSquares"
    let quotient = Math.floor(id / this.height);
    if (id + shipLength * this.width > this.totalSquares) {
      console.log("Total squares exceeded!");
      return false;
    }
    //here "newId" (a simplified value) is checked against "height"
    let newId = id - quotient * this.height;
    if (newId + shipLength > this.height) {
      console.log("maximum height exceeded");
      return false;
    }
    return true;
  }

  placeShip(id, shipLength, isHorizontal) {
    if (isHorizontal) {
      if (!this.horizontalPossible(id, shipLength)) {
        return "Impossible Placement";
      }
      //write shipPresent=true for horizontally adjacent tiles
      for (let i = 0; i < shipLength; i++) {
        this.board[id + i].shipPresent = true;
      }
      return;
    }
    //all code below is for vertical placement
    if (!this.verticalPossible(id, shipLength)) {
      return "Impossible Placement";
    }
    //updates shipPresent value for vertically adjacent tiles
    for (let i = 0; i < shipLength; i++) {
      let currentIndex = id + this.width * i;
      this.board[currentIndex] = true;
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
