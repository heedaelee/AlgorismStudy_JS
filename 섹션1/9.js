//내답 : 정규식 사용
// function solution(arr) {
//   let answer = arr.replace(/A/g, "#");
//   //다 바꾸려면 정규식 활용, g는 전체, i는 대소문자 분별(사용안했음)
//   return answer;
// }

// let arr = "BANANA";
// console.log(solution(arr));

//답지
function solution(arr) {
  let answer = [];

  /** for 문 사용 */
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === "A") {
  //       answer += "#";
  //     } else {
  //       answer += arr[i];
  //     }
  //   }

  /** for .. of 사용 */
  for (element of arr) {
    if (element === "A") {
      answer += "#";
    } else {
      answer += element;
    }
  }

  return answer;
}

let arr = "BANANA";
console.log(solution(arr));
