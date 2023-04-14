//Function


// 형태
function 함수명 (입력값) {
  // 수행할 일
  return 반환값 // 있을 시
}

함수명(입력값);


// 1. 반복될 수 있는 작업을 정의해두는 것

function allArithemics (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
  console.log(`${x} - ${y} = ${x - y}`);
  console.log(`${x} * ${y} = ${x * y}`);
  console.log(`${x} / ${y} = ${x / y}`);
}

let a = 3, b = 4;
allArithemics(a, b);

let c = 10, d = 2;
allArithemics(c, d);

let e = 7, f = 5;
allArithemics(e, f);


// 2. input을 받아 output을 반환 return 하는 것

function add(x, y) {
  return x + y; // ⭐️ 값을 반환
}

let z = add(2, 3);

console.log(z);

console.log(add(4, 5));




// 함수 선언 방식

function add (x, y) {
  return x + y;
}

// 화살표 함수

// 한 줄 안에 값만 반환시
const mult = (x, y) => x * y;

console.log(mult(2, 7));



// 두 줄 이상의 작업이 있을 시
const mult = (x, y) => {
  console.log(`${x}와 ${y}를 곱합니다.`);
  console.log(`결과는 ${x * y}입니다.`);
  return x * y;
};

console.log(mult(2, 7));
