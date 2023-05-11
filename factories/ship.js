class Ship {
  constructor(length, hits, sunk) {
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
  }
  hit(hitCount) {
    this.hits += hitCount;
    this.isSunk();
  }
  isSunk() {
    if (this.hits >= this.length) {
      this.sunk = true;
    } else {
      this.sunk = false;
    }
  }
}

export default Ship;
