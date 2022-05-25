// 2022.05.23
// 평균 점수 구하기

function average(...array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(Math.floor(sum / array.length));
}

average(72, 64, 88, 90); // 78
