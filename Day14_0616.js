// 2022.06.15
// 8이 총 몇 개일까
// 8이 포함되어 있는 숫자의 개수를 카운팅 하는 것이 아니라, 8이라는 숫자를 모두 카운팅 해야 한다

Array(100).fill(1).map((value, index) => value + index);

// 문자열로 바꾸기

Array(100).fill(1).map((value, index) => value + index) + '';
(Array(100).fill(1).map((value, index) => value + index) + '').splite('8');
(Array(100).fill(1).map((value, index) => value + index) + '').splite('8').length-1;
(Array(10000).fill(1).map((value, index) => value + index) + '').splite('8').length-1;
