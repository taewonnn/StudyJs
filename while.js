// while
// 조건이 참인 동안 반복수행

let x = 0;

while (x < 10) {
  console.log(x++);
}




// break로 무한루프 탈출!

let x = 0;

while (true) {
  if (x++ >= 5) break; // 😎
  console.log(x);
}
// 1 ~ 5 출력




// do while
// 일단 수행하고 조건을 평가


let x = 12;

do {
  console.log(x++);
} while (x < 10);

