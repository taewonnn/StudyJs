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
let x = 1;

{
  let y = 2;
  console.log(x, y);
}
console.log(x);
console.log(y);


// 블록 안쪽에서는 바깥의 것 사용 가능
let x = 1;

{
  let y = 2;
  console.log(x, y);
}
console.log(x);
console.log(y);



