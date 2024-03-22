parseInt();

// 정수를 반환 ← 주로 사용하던 기능
// 문자열을 파싱 하여 특정 진수의 정수를 반환 (= 특정 진수를 10진수로)
const str = "10";
console.log(parseInt(str)); //10 (str을 정수로)
console.log(parseInt(str, 2)); //2 (2진수인 str을 10진수로)


// 2진수 → 10진수: parseInt 사용
// 10진수 → 2진수: toString 사용
