// 2022.05.17
// A부터 B까지 더하는 함수 만들기

function sumAll(a, b) {
  let output = 0;
  for (let i = a; i <= b; i++) {
    output += i;
  }
  return output;
}

console.log(`1부터 100까지의 합: ${sumAll(1, 100)}`); //5050
console.log(`1부터 500까지의 합: ${sumAll(1, 500)}`); //125250

// A부터 B까지 곱하는 함수 만들기

function multiflyAll(a, b) {
  let output = 1;
  for (let i = a; i <= b; i++) {
    output *= i;
  }
  return output;
}

console.log(`1부터 10까지의 곱: ${multiflyAll(1, 10)}`); // 3628800
console.log(`3부터 8까지의 곱: ${multiflyAll(3, 8)}`); // 20160
