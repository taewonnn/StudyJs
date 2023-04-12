// this

// 기본적으로 자신이 속한 곳을 가리킴 - 문맥 context
// 💡 함수의 호출 방식에 따라 가리키는 바가 달라짐 - 자바스크립트 특성



// 1. 전역에서의 this
console.log(this);


// 2. 함수 안에서의 this
function func () {
  console.log(this); // globalThis
}

func();


// 3. 객체 안에서의 this

// a -  객체 리터럴 - 해당 객체를 가리킴
const obj = {
  x: 123,
  getX: function () {
    return this.x;
  }
}

console.log(obj.getX());


// b - 생성자 함수 - 생성될 인스턴스를 가리킴
function Person (name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function  () {
    return `저는 ${this.name}, ${this.age}세입니다.`
  }
}

console.log(
  new Person('홍길동', 20).introduce()
);


// c - 클래스 선언 - 생성될 인스턴스를 가리킴
class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

console.log(
  new YalcoChicken('강남', 17).introduce()
);
