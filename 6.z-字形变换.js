/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;
  const len = s.length;
  // for(let i=0;i<numRows;++i){
  //     let line = ''
  //     let gap = [2*(numRows-i-1),2*i]
  //     let pt = i
  //     let k = 0
  //     while(pt<len){
  //         (pt>numRows-1) && gap[1-k]!=0 && (line+=nspace(gap[1-k]-1))
  //         gap[k]!=0 && (line+=s[pt])
  //         pt += gap[k]
  //         k = 1-k
  //     }
  //     console.log(line)
  // }
  let res = "";
  for (let i = 0; i < numRows; ++i) {
    let gap = [2 * (numRows - i - 1), 2 * i];
    let pt = i;
    let k = 0;
    while (pt < len) {
      gap[k] != 0 && (res += s[pt]);
      pt += gap[k];
      k = 1 - k;
    }
  }
  return res;
};

// function nspace(n){
//     let res = ''
//     while(n--) res+=' '
//     return res
// }

// @lc code=end
// console.log(convert("a",1))
