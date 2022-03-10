/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  const uncheck: boolean[][] = [];
  for (let i = 0; i < board.length; i++) {
    const list = [];
    for (let j = 0; j < board[0].length; j++) {
      list.push(true);
    }
    uncheck.push(list);
  }

  const test = (x: number, y: number, str: string) => {
    if (str.length == 1 && board[x][y] == str) {
      return true;
    }
    if (board[x][y] === str[0]) {
      uncheck[x][y] = false;
    } else {
      return false;
    }
    const sub = str.substring(1);
    if (
      (uncheck[x - 1] && uncheck[x - 1][y] && test(x - 1, y, sub)) ||
      (uncheck[x + 1] && uncheck[x + 1][y] && test(x + 1, y, sub)) ||
      (uncheck[x][y - 1] && test(x, y - 1, sub)) ||
      (uncheck[x][y + 1] && test(x, y + 1, sub))
    ) {
      uncheck[x][y] = true;
      return true;
    }
    uncheck[x][y] = true;
    return false;
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && test(i, j, word)) {
        return true;
      }
    }
  }
  return false;
}
// @lc code=end

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCB";

const board2 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word2 = "ABCCED";
console.log(exist(board, word));
