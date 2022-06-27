// 2022.06.27
// class / constructor 기초

// Class 생성
// let 학생1 = { name: 'Cho', age: 20};
// let 학생2 = { name: 'Park', age: 21};
// let 학생3 = { name: 'Lee', age: 22};
//하드코딩해서 3개를 만들었는데 앞으로 만들 일이 더 많이 생길 것 같아서 constructor를 제작하려고 합니다.

//constructor 문법을 사용해서 위의 오브젝트와 똑같은 오브젝트 3개를 한번 뽑아보십시오.

// + 여기에 학생1.sayHi()라고 사용하면 "안녕 나는 Park이야" 라는 글자가 콘솔창에 나오도록 sayHi()라는 함수도 constructor 안에 추가해보세요.

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    return `안녕 나는 ${String(this.name)}야`;
  }
}

let 학생1 = new Student("Cho", 20);
let 학생2 = new Student("Park", 21);
let 학생3 = new Student("Lee", 22);
console.log(학생2);

let Kim = new Student("김도희", 27);
console.log(Kim.sayHi());

console.log(학생3.sayHi());
