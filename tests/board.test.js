import Board from "../factories/board";

describe("board functions", () => {});
{
  let board;

  beforeEach(() => {
    board = new Board(10, 10, "player");
  });

  it("creates 100 squares", () => {
    board.fillBoard();
    expect(board.board.length).toEqual(100);
  });

  it("receiveAttack modify tile data", () => {
    board.fillBoard();
    board.receiveAttack(99);
    expect(board.board[99].hit).toEqual(true);
  });
}
