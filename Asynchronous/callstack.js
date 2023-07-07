// callstack

function a() {
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

const result = c();

console.log(result);   // 3
// c()를 호출 -> c 안에서 b를 호출 -> b 안에서 a를 호출 -> ...
// 1 + 1 -> 2 + 1 -> 3







