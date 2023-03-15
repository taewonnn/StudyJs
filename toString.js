toString()

// 문자열을 반환 ← 주로 사용하던 기능
// 숫자의 경우 선택적으로 기수(2~36)를 매개변수로 취하며, 이를 통해 10진수를 특정 진수로 변환한 값 반환

const num = 10;
console.log(num.toString()); //"10" (num을 문자열로)
console.log(num.toString(2)); //"1010" (num을 2진수로)


// 2진수 → 10진수: parseInt 사용
// 10진수 → 2진수: toString 사용
