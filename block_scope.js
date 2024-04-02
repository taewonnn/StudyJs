// 블록문 + 스코프


// 블록문
{
  console.log('블록문');
}

// 0개 이상의 문 statement들을 묶은 단위
// 일반적으로, 이후 배울 제어문, 함수 등에 사용
// 새로운 스코프 생성


// 스코프
// 블록 안에 선언된 변수와 상수를 밖에서 사용 불가
let x1 = 1;

{
  let y = 2;
  console.log(x, y);
}
console.log(x1);
console.log(y);


// 블록 안쪽에서는 바깥의 것 사용 가능
let x2 = 1;

{
  let y = 2;
  console.log(x, y);
}
console.log(x2);
console.log(y);



// 스코프 체인 scope chain
// 🥞 스택 stack
// 후입선출 - 나중에 온 것이 먼저 나감

let a = 0;
let b = 1;
let c = 2;
console.log('시점 1:', a, b, c);

{
  let a = 'A';
  let b = 'B'
  console.log('시점 2:', a, b, c);

  {
    let a = '가'
    console.log('시점 3:', a, b, c);
  }

  console.log('시점 4:', a, b, c);
}

console.log('시점 5:', a, b, c);

// 블럭 안에 해당 변수/상수가 없으면 바깥쪽으로 찾아 나감 - 체이닝

