// class

class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () { // 💡 메서드
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);

console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());


class User {
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }
  sayHello() {
    console.log(`Hello ${this.name}!!`)
  }
}


class AdminUser extends User {
  confirmAdmin() {
    console.log('Admin!!');
  }
}
const sexyUser = new User('daram', '31', 'daram@naver.com', '1234')
console.log(sexyUser)


// 💡 Syntactic Sugar - 문법을 보다 읽기 쉽게 만드는 것

// II. constructor 메서드

// 인스턴스 생성시 인자를 받아 프로퍼티를 초기화함
// 클래스에 하나만 있을 수 있음 - 초과시 오류 발생
// 다른 메서드 이름을 쓸 수 없음
// 기본값 사용 가능
// 필요없을 (인자가 없을 때 등) 시 생략 가능

// ⚠️ 값을 반환하지 말 것! 생성자 함수처럼 암묵적으로 this 반환

class Person {
  constructor (name, age, married = false) {
    this.name = name;
    this.age = age;
    this.married = married;
  }
}

const person1 = new Person('박영희', 30, true);
const person2 = new Person('오동수', 18);
console.log(person1, person2);


// III. 클래스의 메서드
class Dog {
  bark () {
    return '멍멍';
  }
}
const badugi = new Dog();
console.log(badugi, badugi.bark());


// 💡 생성자 함수에 넣은 함수의 차이 - 프로토타입으로 들어감

function Dog2 () {
  this.bark = function () {
    return '멍멍';
  }
}
const badugi = new Dog2();
console.log(badugi, badugi.bark());




// quiz
// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기


class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }


  get value() {
    return this.#value;
  }


  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.value);





// Quiz2
// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원



class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}

const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const bob = new PartTimeEmployee('밥', 's/w', 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());
