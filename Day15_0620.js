// 2022.06.20
// class로 자기소개하기

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    return `안녕 나는 ${this.name}야 🐰`;
  }
}

const 학생1 = new Student("김도희", 27);
console.log(학생1, hello());
