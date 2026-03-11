/*
 * Problem: Valid Sudoku (#36) — Medium
 * Pattern: Arrays & Hashing
 * Date: 2026-03-09
 * NeetCode: Yes
 *
 * Approach:
 *   Add filled cells to Maps of Sets for each row, column and 3x3 grid.
 *   If a value already exists in one of the related Sets, the board is not valid.
 *   If all values are valid, the board is valid.
 *
 * Time:  O(n)
 * Space: O(n)
 *
 * Gotchas:
 *
 * Comfort: 5
 *
 * Revisit: No
 */

function isValidSudoku(board: string[][]): boolean {
  const rows = new Map<number, Set<string>>();
  const cols = new Map<number, Set<string>>();
  const boxes = new Map<number, Set<string>>();

  for (let col = 0; col < board.length; col++) {
    for (let row = 0; row < board[col].length; row++) {
      const cell = board[row][col];
      if (cell === ".") continue;

      if (!rows.has(row)) rows.set(row, new Set([cell]));
      else {
        if (rows.get(row)!.has(cell)) return false;
        rows.get(row)!.add(cell);
      }

      if (!cols.has(col)) cols.set(col, new Set([cell]));
      else {
        if (cols.get(col)!.has(cell)) return false;
        cols.get(col)!.add(cell);
      }

      const box: number = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      if (!boxes.has(box)) boxes.set(box, new Set([cell]));
      else {
        if (boxes.get(box)!.has(cell)) return false;
        boxes.get(box)!.add(cell);
      }
    }
  }

  return true;
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
); // expected: true
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
); // expected: false
