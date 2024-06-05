// every()



// every()는 배열의 각 엘리먼트에 대해서 테스트 함수의 반환 값이 모두 true인지 확인합니다.
//   모든 case가 true일때 true를 반환합니다. 하나라도 false이면 반환 값은 false입니다.
//   기존 배열 값은 변경X


// arr.every(function(currentValue, index, array), thisValue))
const objArr = [{name: '철수', age: 10}, {name: '영희', age: 10}, {name: '바둑이', age: 2}]

console.log(objArr.every((item)=> item.age>5)); //false (바둑이 탈락!)

console.log(objArr.every((item)=> item.age>1)); //true



