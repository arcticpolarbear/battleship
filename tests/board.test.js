import Board from "../factories/board";

describe("board functions", () => {});
{
  let board;

  beforeEach(() => {
    board = new Board(10, 10, "player");
    board.fillBoard();
  });

  it("creates 100 squares", () => {
    expect(board.board.length).toEqual(100);
  });

  it("receiveAttack modifies tile data", () => {
    board.receiveAttack(99);
    expect(board.board[99].hit).toEqual(true);
  });

  it("should reject bad horizontal placement", () => {
    board.placeShip(8, 3, true);
    expect(board.board[8].shipPresent).toEqual(false);
    expect(board.board[99].shipPresent).toEqual(false);
  });
  it("should accept good horizontal placement", () => {
    board.placeShip(8, 2, true);
    expect(board.board[8].shipPresent).toEqual(true);
    expect(board.board[9].shipPresent).toEqual(true);
    expect(board.board[98].shipPresent).toEqual(true);
  });
  it("should reject bad vertical placement", () => {
    board.placeShip(8, 4, true);
    expect(board.board[8].shipPresent).toEqual(false);
    expect(board.board[99].shipPresent).toEqual(false);
    expect(board.board[98].shipPresent).toEqual(false);
    expect(board.board[75].shipPresent).toEqual(false);
  });
  it("should accept good vertical placement", () => {
    board.placeShip(8, 2, true);
    expect(board.board[55].shipPresent).toEqual(true);
    expect(board.board[9].shipPresent).toEqual(true);
    expect(board.board[88].shipPresent).toEqual(true);
  });
}
