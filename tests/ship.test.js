import Ship from "../factories/ship.js";

describe("ship functions", () => {
  let ship1;
  let ship3;

  beforeEach(() => {
    ship1 = new Ship(1, 0, false);
    ship3 = new Ship(3, 0, false);
  });

  it("accepts a hit", () => {
    ship3.hit(1);
    expect(ship3.hits).toEqual(1);
  });

  it("can be sunk", () => {
    ship1.hit(1);
    ship3.hit(1);
    expect(ship1.sunk).toEqual(true);
    expect(ship3.sunk).toEqual(false);
  });
});
