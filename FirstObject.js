// First Object 일급 객체

// 함수를 변수와 같이 다루는 언어에 있는 개념
// 자바스크립트의 함수도 일급 객체 함수는 기본적으로 객체

// ⭐️ 함수의 자료형
function addNumbers(a, b) {
  return a + b;
}
console.log(typeof addNumbers);

// 일급 객체의 특성
// 상수 또는 변수에 할당될 수 있음
// 다른 함수에 인자로 전달될 수 있음
// 다른 함수의 결과값으로서 반환될 수 있음

// I. 할당

function isOddNum(number) {
  console.log((number % 2 ? "홀" : "짝") + "수입니다.");
  return number % 2 ? true : false;
}

const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의

console.log(checkIfOdd(23));

// II. 인자로 전달

// 함수가 다른 함수를 인자로 전달받음
// 전달받는 함수 : 고차 함수 highter-order function
// 전달되는 함수 : 콜백 함수 callback function

let list = [1, 2, 3, 4, 5];

function doInArray(array, func) {
  for (item of array) {
    func(item);
  }
}

// console.log - console이란 객체에서 log란 키에 할당된 함수
doInArray(list, console.log);

function doNTimes(func, repeat, x, y) {
  let result = x;
  for (i = 0; i < repeat; i++) {
    result = func(result, y);
  }
  return result;
}

console.log(
  doNTimes((x, y) => x * y, 3, 5, 2),
  doNTimes((x, y) => x / y, 3, 5, 2)
);

// 인자로 전달된 함수들 : 변수나 상수에 할당되지 않아 이름이 없음 - 익명 함수 anonymous function

// III. 결과값으로 반환

function getIntroFunc(name, formal) {
  return formal
    ? function () {
        console.log(`안녕하십니까, ${name}입니다.`);
      }
    : function () {
        console.log(`안녕하세요~ ${name}이라고 해요.`);
      };
}

const hongIntro = getIntroFunc("홍길동", true);
const jeonIntro = getIntroFunc("전우치", false);

// 💡 커링 currying
// 필요한 인자보다 적은 수의 인자를 받으면, 나머지 인자를 인자로 받는 다른 함수를 반환

// 기존의 코드
function addMultSubt(a, b, c, d) {
  return (a + b) * c - d;
}

const addMultSubt2 = (a, b, c, d) => (a + b) * c - d;

console.log(addMultSubt(2, 3, 4, 5), addMultSubt2(2, 3, 4, 5));

// ⭐ 커링으로 작성된 함수
function curryAddMultSubt(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return (a + b) * c - d;
      };
    };
  };
}

const curryAddMultSubt2 = (a) => (b) => (c) => (d) => (a + b) * c - d;

// ⭐️ 하나의 함수는 한 가지 일만 하도록
// 하나의 함수가 여러 일을 수행하면 이후 코드를 수정하기 복잡해짐
// 각자 하나의 일을 하는 여러 함수들의 조합을 사용할 것
