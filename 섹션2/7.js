function solution(l, p) {
  let answer = 0;
  let x = 0;
  // 좌우상하로 비교해서 MAX 값을 알아내야 한다.
  // 2차원 배열 & Index 계산이다.
  //i+1,i, i-1  과 j+1, j, j-1의 비교

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      x = p[i][j];
      console.log(x);
      if (p[i][j - 1] && p[i][j - 1] > x) {
        continue;
      } else if (p[i][j + 1] && p[i][j + 1] > x) {
        continue;
      } else if (p[i - 1][j] && p[i - 1][j] > x) {
        continue;
      } else if (p[i + 1][j] && p[i + 1][j] > x) {
        continue;
      } else {
        answer++;
      }
    }
  }
  return answer;
}
let length = 5;
let array = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(length, array));
