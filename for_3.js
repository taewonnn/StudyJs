// for문



// 무한 루프
// for (let i = 0; i <10; i++) {
//   console.log(i--);
// }



// 객체와 배열의 for문

// 객체 - for in
const lunch = {
  name: '라면',
  taste: '매운맛',
  kilocalories: 500,
  cold: false
}

for (const key in lunch) { // 💡 변할 것이 아니므로 const 사용
  console.log(key)
}

// name, taste, kilocalories, cold

// key의 명칭은 자유롭게!!!

for (const daram in lunch) {
  console.log(daram, ":", lunch[daram])
}

// name : 라면, taste : 매운맛, kilocalories : 500, cold : false, name : 라면, taste : 매운맛, kilocalories : 500, cold : false



// 배열 -  for of
const list = [1, '가나다', false, null];

for (const item of list) {
  console.log(item);
}
for (const el of list) {
  console.log(el);
}


// 문자열도 사용 가능
for (const letter of '안녕하세요~') {
  console.log(letter);
}

// 안
// 녕
// 하
// 세
// 요
// ~
