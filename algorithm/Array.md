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

start부터 delete Count개 삭제한다.
addItem을 추가한다.
원본 배열을 수정해서 반환한다.


slice(start, end)

start부터 end까지 자른다.
원본 배열을 얕은 복사해서 새로운 배열로 반환한다.
profile



1. 배열에 요소 추가
   unshift()
   배열의 처음에 하나 이상의 요소를 추가하고, 배열의 길이를 반환한다.

const users = ['Charles', 'Cecilia', 'Den'];

const totalUsers = users.unshift('Sherlock', 'John');


console.log(totalUsers); // 5 => 배열의 길이를 반환한다.
console.log(users); // ['Sherlock', 'John', 'Charles', 'Cecilia', 'Den'] => Sherlock과 'John'이 배열의 첫부분에 추가되었다.
push()
배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 길이를 반환한다.

const users = ['Charles', 'Cecilia', 'Den'];

const totalUsers = users.push('Sherlock', 'John');


console.log(totalUsers); // 5 => 배열의 길이를 반환한다.
console.log(users); // ['Charles', 'Cecilia', 'Den', 'Sherlock', 'John'] => Sherlock과 'John'이 배열의 마지막에 추가되었다.



2. 배열의 요소 삭제
   shift()
   배열의 첫 요소를 제거하고, 제거된 요소를 반환한다.

const users = [ 'Sherlock', 'John', 'Moriarty' ];
const newUsers = users.shift();

console.log(newUsers); // 'Sherlock' => 배열의 첫 번째 요소인 'Sherlock'가 반환된다.
console.log(users); // [ 'John', 'Moriarty' ]
pop()
배열의 마지막 요소를 제거하고, 제거된 요소를 반환한다.

const users = ['Sherlock', 'John', 'Moriarty'];
const newUsers = users.pop();

console.log(newUsers); // 'Moriarty' => 배열의 마지막에 있는 'Moriarty'가 반환된다.
console.log(users); // [ 'Sherlock', 'John' ]
cpop()과 shift()로 배열의 요소 모두 제거하기
shift(), pop()이 제거할 요소가 없는 경우 undefined를 반환하는 특성을 이용하여, 아래와 같이 배열의 요소를 모두 제거 할 수 있다.

let names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.pop()) !== undefined ) {
console.log('제거된요소',i);
console.log('변경된배열', names)
}

//console.log()의 결과 값들
'제거된요소' 'John'
'변경된배열' [ 'Andrew', 'Edward', 'Paul', 'Chris' ]
'제거된요소' 'Chris'
'변경된배열' [ 'Andrew', 'Edward', 'Paul' ]
'제거된요소' 'Paul'
'변경된배열' [ 'Andrew', 'Edward' ]
'제거된요소' 'Edward'
'변경된배열' [ 'Andrew' ]
'제거된요소' 'Andrew'
'변경된배열' []
```


## 배열 합치기

1. concat()
파라미터로 받은 배열이나 값들을 기존의 배열에 합쳐서, 새로운 배열을 만들어서 리턴합니다.

const arr = [1, 2, 3];
const newArr = arr.concat('a', ['b', 'c'], 'abc');


2. spread operator(전개 연산자)

onst arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const newArr = [
  ...arr1,
  ...arr2,
  ...arr3
];


3. push()

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(arr2);



## 배열 중복 제거

1. set() 


2. filter(), indexOf() 

filter() 함수는 filter() 함수 안의 callback 함수에 정의한 부분에 대해 true 로 반환되는 요소만을 배열로 반환합니다.
그리고, indexOf()는 입력 값이 해당 배열에서 가장 처음 나타나는 index를 알려줍니다.

const array = ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D'];
console.log(array);	// ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D']

let result = array.filter((v, i) => array.indexOf(v) === i);
console.log(result);	// ['C', 'A', 'B', 'D', 'E']


3. reduce(), includes() 

reduce()의 두번째 인자 값으로 결과값을 담을 새로운 빈 배열 하나를 만들고,
reduce()의 첫번째 인자로 callback 안에서 callback 함수의 두번째 인자(v)를 새로 만든 배열(ac)에 includes()를 사용하여
새로 만든 배열에 존재하지 않으면 해당 값을 삽입한 배열을 반환하고,
존재하면 해당 값을 삽입하지 않고 반환하는 방식으로 배열을 만들어 만들어진 최종 값을 반환합니다.

const array = ['c', 'a', 'b', 'a', 'c']
let result = array.reduce((ac, v) => ac.includes(v) ? ac : [...ac, v], []);
