function solution(p) {
  let rank = [];
  let cnt = 0;

  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (i !== j) {
        if (p[i] < p[j]) cnt++;
      }
    }
    //현재값보다 큰 수를 카운트한후, +1 해줘야지 현재 요소의 랭크가 나오지 *** 전체 갯수에 빼면 안되지. 생각 잘못함
    //만약 2위를 말하자면 총 요소중, 보다 큰게 1개가 있고 그 뒤니까 +1로 해서 2, 3위면 보다 큰게 2개 +1 = 3
    let currnetIndexRank = cnt + 1;
    rank.push(currnetIndexRank);
    cnt = 0;
  }

  return rank;           
}
let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
