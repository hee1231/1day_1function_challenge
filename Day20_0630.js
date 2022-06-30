// 2022.06.30
// (DOM) setInterval로 알림창 만들기

/*
<div class="alert alert-danger" id="alert">
<span>5<span id="time">초 이내 구매시 사은품 증정
</div>
*/

// 위 HTML 코드를 가지고, 5초부터 1초까지 센 뒤에 알림창이 꺼지도록 만들어보시오.

const alert = document.querySelector("#alert");
const time = document.querySelector("#time");

let count = 5;

setInterval(function () {
  count--;
  if (count >= 0) {
    time.textContent = count;
  }
  if (count == 0) {
    alert.style.display = "none";
  }
}, 1000);
