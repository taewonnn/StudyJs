// callback

// 함수 안에 파라미터로 들어가는 함수
// 용도 : 순차적으로 실행하고 싶을 때 사용!

function a() {
  for (let i = 0; i < 1000000000000000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다!');
const result = c();
console.log(result);
