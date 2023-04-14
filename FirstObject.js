// First Object 일급 객체

// 함수를 변수와 같이 다루는 언어에 있는 개념
// 자바스크립트의 함수도 일급 객체 함수는 기본적으로 객체


// ⭐️ 함수의 자료형
function addNumbers (a, b) { return a + b; }
console.log(typeof addNumbers);


// 일급 객체의 특성
// 상수 또는 변수에 할당될 수 있음
// 다른 함수에 인자로 전달될 수 있음
// 다른 함수의 결과값으로서 반환될 수 있음




// I. 할당

function isOddNum (number) {
  console.log(
    (number % 2 ? '홀' : '짝')
    + '수입니다.'
  );
  return number % 2 ? true : false;
};

const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의

console.log(checkIfOdd(23));





// II. 인자로 전달

// 함수가 다른 함수를 인자로 전달받음
// 전달받는 함수 : 고차 함수 highter-order function
// 전달되는 함수 : 콜백 함수 callback function


let list = [1, 2, 3, 4, 5];

function doInArray (array, func) {
  for (item of array) {
    func(item);
  }
}

// console.log - console이란 객체에서 log란 키에 할당된 함수
doInArray(list, console.log);







