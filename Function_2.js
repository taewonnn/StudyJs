

// I. 중첩된 함수

function outer () {
  const name = '바깥쪽'
  console.log(name, '함수');

  function inner () {
    const name = '안쪽'
    console.log(name, '함수');
  }
  inner();
}

outer();



function addMulSub (x, y) {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;

  return sub(mul(add(x, y), y), y);
}

console.log(addMulSub(8, 3));




// II. 재귀 함수 recursive function

function upto5 (x) {
  console.log(x);
  if (x < 5) {
    upto5(x + 1);
  } else {
    console.log('- - -');
  };
}

upto5(1);
upto5(3);
upto5(7);



// ⭐️ 불변성 immutability

let x = 1;
let y = {
  name: '홍길동',
  age: 15
}
let z = [1, 2, 3];

function changeValue (a, b, c) {
  a++;
  b.name = '전우치';
  b.age++;
  c[0]++;

  console.log(a, b, c);
}

changeValue(x, y, z);


// 원시 타입 : 인자로 들어간 함수 내에서의 변경에 영향 받지 않음
// 실제 값이 아니라 복사된 값이 들어갔기 때문

// 참조 타입 : 인자로 들어간 함수 내에서 요소가 변하면 실제로도 변함
// 복사된 값도 같은 객체나 배열을 가리키기 때문






