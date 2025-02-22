
// constrains - 조건
interface Employee {
  pay(): void;
}

// 정규직
class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

// 비정규직
class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

//Employee를 확장한 타입 extends
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();

ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
  name: 'ellie',
  age: 20,
};

const obj2 = {
  animal: '🐕',
};

console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐕


// keyof -> obj 안에 들어있는 Key의 type
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj = {
  name: 'taewon'
  age: 20,
};

const obj2 = {
  animal: '🦒',
};
