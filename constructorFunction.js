// constructor function(생성자 함수)

// 얄코치킨의 체인점을 나타내는 객체들
const chain1 = {
  name: '판교',
  no: 3,
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

const chain2 = {
  name: '강남',
  no: 17,
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

const chain3 = {
  name: '제주',
  no: 24,
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

// 이처럼 같은 형식의 객체들을 다수 만들어야 한다면?
// => 생성자 함수로 대체 가능


// 생성자 함수
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

// 인스턴스 생성
const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);

console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());


// 생성자 함수명은 일반적으로 대문자로 시작 - 파스칼 케이스
// 생성자 함수로 만들어진 객체를 인스턴스 instance 라 부름
// this.~로 생성될 인스턴스의 프로퍼티들 정의
// 생성자 함수는 new 연산자와 함께 사용
// 암묵적으로 this 반환
// 생성자 함수에서는 메서드 정의 불가 - 객체 리터럴과 클래스에서는 가능
