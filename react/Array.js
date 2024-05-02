// Array


// Array.from(길이)
// JavaScript에서 유사 배열 객체나 이터러블 객체를 새로운 배열로 변환하는 데 사용
const a = Array.from({length : 10})
console.log(a)
// 출력 : (10) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

// Array.from(길이, 값)
const arrayWithValues = Array.from({ length: 10 }, (_, index) => index);
console.log(arrayWithValues);  // [0, 1, 2, ..., 9]
