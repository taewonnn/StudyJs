// callstack

function a() {
    for (let i = 0; i < 1000000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다!')
const result = c();

console.log(result);   // 3
// c()를 호출 -> c 안에서 b를 호출 -> b 안에서 a를 호출 -> ...
// 1 + 1 -> 2 + 1 -> 3

// js는 기본적으로 동기적으로 실행된다!!
// a 함수 안에 오래 걸리는 For 반복문이 있어서 c의 결과까지 도달하는데 시간이 오래 걸린다!!







