// Array


// Array.from(길이)
// JavaScript에서 유사 배열 객체나 이터러블 객체를 새로운 배열로 변환하는 데 사용

Array.from(source[, mapFn[, thisArg]])
// - source: 배열로 변환될 유사 배열 객체나 이터러블 객체.
// - mapFn (선택 사항): 배열의 모든 요소에 대해 호출될 매핑 함수. 이 함수는 각 요소를 변환하는 데 사용됩니다.
// - thisArg (선택 사항): mapFn 실행 시 this로 사용될 값.


const a = Array.from({length : 10})
console.log(a)
// 출력 : (10) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

// Array.from(길이, 값)
const arrayWithValues = Array.from({ length: 10 }, (_, index) => index);
console.log(arrayWithValues);  // [0, 1, 2, ..., 9]
