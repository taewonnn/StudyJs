// Prototype

// 자바스크립트는 프로토타입 기반의 객체지향 프로그래밍을 지원하는 언어
// 오늘날에는 클래스가 더 널리 사용되지만, 사용하기에 따라 보다 강력하고 효율적


// ⭐ 자바스크립트의 모든 객체는 Prototype을 가짐

const obj = {};

console.log(obj);


// Object - 모든 것의 조상
// 아래 각 객체의 [[Prototype]]의 [[Prototype]]이 Object임 확인

console.log(
  new String('')
);

console.log(
  []
);


const dog = { name: '와우', emoji: '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name;
console.log(dog.name);

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student);







// 💡 프로토타입 체인
// 특정 객체에 호출된 프로퍼티가 없다면 프로토타입을 거슬러 올라감
// 예: Array에는 valueOf가 없지만 그 프로토타입인 Object에는 있으므로 호출 가능







// const dog1 = { name: '뭉치', emoji: '🐶' };
// const dog2 = { name: '코코', emoji: '🐩' };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수
  /* this.printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  }; */
}

// 프로토타입 레벨의 함수
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};
const dog1 = new Dog("뭉치", "🐶");
const dog2 = new Dog("코코", "🐩");
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 됨)
dog1.printName = function () {
  console.log("안녕!!");
};
dog1.printName();

// 정적 레벨
Dog.hello = () => {
  console.log("Hello!");
};
Dog.hello();
Dog.MAX_AGE = 20;
