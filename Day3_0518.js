// 2022.05.18
// 최솟값 구하는 함수 만들기

function min(array) {
  let output = array[0];
  for (const item of array) {
    // 현재 output보다 더 작은 item이 있다면
    if (output > item) {
      // output의 값을 item으로 변경
      output = item;
    }
  }
  return output;
}

const testArray = [52, 273, 32, 103, 275, 24, 57];
console.log(`${testArray} 중에서`);
console.log(`최솟값 = ${min(testArray)}`);

// 최댓값 구하는 함수 만들기

function max(array) {
  let output = array[0];
  for (const item of array) {
    if (output < item) {
      output = item;
    }
  }
  return output;
}

const testArray2 = [52, 273, 32, 103, 275, 24, 57];
console.log(`${testArray2} 중에서`);
console.log(`최댓값: ${max(testArray2)}`);
