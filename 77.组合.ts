/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const result: number[][] = [];

  /**
   * @param arr current arr
   * @param nums numbers to combine
   */
  const back = (arr: number[], nums: number) => {
    if (nums === 0) result.push(arr);
    else {
      const arrMax = arr.length === 0 ? 0 : arr[arr.length - 1];
      for (let i = arrMax + 1; i <= n; i++) {
        back([...arr, i], nums - 1);
      }
    }
  };

  back([], k);
  return result;
}
// @lc code=end
