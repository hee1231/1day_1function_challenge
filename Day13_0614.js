// 2022.06.14
// 오타 수정하기
// 입력: hqllo my namq is hyqwon
// 출력: hello my name is hyewon

const word = prompt("문장을 입력하세요");

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word, "q", "e"));
