// some()

// some()은 배열의 각 엘리먼트에 대해서 테스트 함수의 반환 값이 하나라도 true가 있는지 확인합니다.
// 하나라도 true가 발생하면 true를 반환합니다.



// arr.some(function(currentValue, index, array), thisValue))




const objArr = [{name: '철수', age: 10},{name: '영희', age: 10}, {name: '바둑이', age: 2}]

console.log(objArr.some((item)=> item.age>5)); //true

console.log(objArr.some((item)=> item.age>10)); //false (모두 탈락!)

