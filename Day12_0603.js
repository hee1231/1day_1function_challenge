// 2022.06.03
// 구구단

// 인자값으로 받은 숫자의 구구단 출력
function gugudan(a) {
  for (let i = 1; i <= 9; i++) {
    console.log(i * a);
  }
}

gugudan(2);

// 모든 구구단 출력
function gugudan() {
  for (let k = 2; k <= 9; k++) {
    for (let i = 1; i <= 9; i++) {
      console.log(i * k);
    }
  }
}

gugudan();
