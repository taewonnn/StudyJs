// __proto__
// 상속과 코드 재사용을 위해 사용

const x = {};
const y = {};
console.log(x);
console.log(y);

// console 결과 -> prototype
// {}
// [[Prototype]]: Object
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: (...)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()


console.log(x.__proto__ === y.__proto__); // true
// 동일한 Object의 proto를 상속하기에


const array = [];
console.log(array);

// console 결과
// [[Prototype]]: Array(0)
// at: ƒ at()
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// findLast: ƒ findLast()
// findLastIndex: ƒ findLastIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toReversed: ƒ toReversed()
// toSorted: ƒ toSorted()
// toSpliced: ƒ toSpliced()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// with: ƒ with()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
// [[Prototype]]: Object


console.clear();

function CoffeeMachine (beans) {
  this.beans = beans;
  // Instance member level => 만들어지는 Insatance마다 만들어짐! 아래 콘솔에서 확인 가능 
  this.makeCoffee = (shots) => {
    console.log('making...');
  }
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log('makeCoffe proto level 이전',machine1);
console.log('makeCoffe proto level 이전',machine2);


// console 결과
// CoffeeMachine {beans: 10, makeCoffee: ƒ} beans: 10 makeCoffee :  (shots) => { console.log('making...'); } [[Prototype]]: Object
// CoffeeMachine {beans: 20, makeCoffee: ƒ} beans: 20 makeCoffee: (shots) => { console.log('making...'); } [[Prototype]]: Object


//기존 this.makeCoffe 주석처리하고 prototype memeber level로 아래처럼 변경하면 console에 instance에 더이상 makeCoffe를 매번 생성 안함!
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making...');
}

console.log(machine1);
console.log(machine2);

function LatteMachine (milk) {
  this.milk = milk;
}

// CoffeMachine을 상속
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);

// LatteMachine {milk: 123} milk: 123 [[Prototype]]: CoffeeMachine [[Prototype]]: Object makeCoffee: (shots) => { console.log('making...'); } constructor: ƒ CoffeeMachine(beans) [[Prototype]]: Object