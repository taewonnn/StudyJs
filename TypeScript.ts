// TypeScript

// JavaScript 기반 프로그래밍 언어

// Strongly-typed  프로그램이 작동 하기 전에 "데이터 타입이 뭐야??"라고 확인을 함!!


// Ex

// a 와 b를 더하는 함수(js)
const plus = (a, b) => a + b;

plus(2, 2)  // 4

plus(2, 'hi') // 2hi

// plus 안에 Number만 왔으면 좋겠어!! 하지만 js는 타입 따위 신경써주지 않음


// TypeScript는 프로그램이 작동하기 전에 잘못된 것을 말해줌!!

const minus = (a:number, b:number) => a + b;

minus(2, 2)  // 0
// minus(2, 'hi')
//  b에 문자가 와서 실행하기전에 말해줌!











