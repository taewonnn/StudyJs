for문
기본 for문
for (let i = 1; i <= n; i++){
...
return answer
}

순서가 중요함
forEach
const myArr = [1, 2, 3, 4, 5];
const newMyArr = myArr.forEach((currentElement, index, array) => {
console.log(요소: ${currentElement});
console.log(index: ${index});
console.log(array);
});
console.log(newMyArr); // undefined

forEach() 메서드는 배열에 활용이 가능한 메서드로, 파라미터로 주어진 함수를 배열 요소 각각에 대해 실행하는 메서드이다.
map() 메서드와 거의 비슷하지만 차이점은 따로 return 하는 값이 없다는 점이다.
for key in 배열
var obj = { a: '가', b: '나', c: '다' };
for (var key in obj) {
console.log(key, obj[key]); // a 가, b 나, c 다
}

for value of 배열
var iterable = [10, 20, 30];
for (var value of iterable) {
console.log(value); // 10, 20, 30
}
