// 2022.06.02
// 변수 안 이름 확인하는 함수 (영희 있나요?)

let 출석부 = ["흥민", "영희", "철수", "재석", "영희"];

function isName(name) {
  for (i = 0; i <= 출석부.length; i++) {
    if (name == 출석부[i]) {
      console.log("있어요!");
      return;
    }
  }
}

isName("영희");
