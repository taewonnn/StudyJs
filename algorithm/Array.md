# Array

## Array.reduce(콜백함수, 초기값)

배열에 있는 모든 요소들의 값을 누적하는 함께 모아놓을 때 쓰는 것 (평균값 구하기)
reduce 메소드는 자신이 호출한 배열의 모든 요소 순회하면서 인수로 전달받은 콜백함수를 반복 호출 → 이 과정을 반복하여 하나의 결과값 반환

reduce 메소드를 쓸 수 있는 문제
 - 평균구하기
 - 최대값 구하기 (구할수있지만 Math.max를 사용하는게 더 직관적)
 - 요소의 중복 횟수 구하기
 - 중복요소제거
 - 모든 요소의 합 구하기



## Array.sort()

숫자요소를 정렬할 때 sort 메소드에 정렬순서를 정의하는 비교함수를 인수로 전달한다.

const points = [40, 100, 1, 5, 2, 25, 10];

숫자 배열의 오름차순 정렬 : 비교함수의 반환값이 0보다 작으면 a를 우선하여 정렬
points.sort((a, b) => a - b);
숫자 배열의 내림차순 정렬 : 비교함수의 반환값이 0보다 작으면 b를 우선하여 정렬
points.sort((a, b) => b - a);



## Array.join()

원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열로 연결한 문자열 반환한다.


let arr = [1, 2, 3];
let myVar1 = arr.join();      // '1,2,3,4' 기본 구분자로 연결
let myVar2 = arr.join(',');  // '1,2,3,4'
let myVar3 = arr.join('+'); // '1+2+3+4'
let myVar4 = arr.join('');    // 1234'




## Array.splice()

배열의 요소를 삭제, 교체하거나 새로운 요소를 추가하여 기존 배열을 변경한다. 그리고 변경된 배열을 반환한다.

배열 중간의 요소 삭제
const totalUsers = users.splice(1,1); //1번 인덱스 요소부터 1개 삭제
console.log(totalUsers); // [ 'Cecilia' ] => 삭제된 요소 반환
console.log(users); // [ 'Charles', 'Den' ] => 변경된 배열 반환

배열의 중간에 요소 추가
const totalUsers = users.splice(1,0, 'Microft'); //1번 인덱스 자리에 'Microft' 추가
console.log(totalUsers); // [] => 빈배열 반환, 삭제된 요소 없음
console.log(users); // [ 'Charles', 'Microft', 'Cecilia', 'Den' ] => 변경된 배열 반환



## slice()와 splice() 간단비교

splice(start, deleteCount, addItem)

start부터 deleteCount개 삭제한다.
addItem을 추가한다.
원본 배열을 수정해서 반환한다.


slice(start, end)

start부터 end까지 자른다.
원본 배열을 얕은 복사해서 새로운 배열로 반환한다.
profile
