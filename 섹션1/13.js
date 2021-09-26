function solution(param) {
  let answer = "";
  //깊은복사 얕은 복사 공부 JS
  for (let i = 0; i < param.length; i++) {
    if (param[i] !== param[i].toUpperCase()) {
      answer += param[i].toUpperCase();
    } else {
      answer += param[i].toLowerCase();
    }
  }

  return answer;
}
let str = "StuDY";
console.log(solution(str));
