// Array

// isArray() - 배열인지 여부를 반환

console.log(
  Array.isArray([1, 2, 3]),
  Array.isArray('123'),
  Array.isArray('123'.split(''))

);



// at - 주어진 인자를 인덱스로 값을 반환

const arr = [
  '한놈', '두시기', '석삼', '너구리', '오징어'
];

console.log(
  arr.at(1), arr.at(2)
);


// includes - 인자로 주어진 요소 유무 확인

const arr = [1, 2, 3, 'abc', true];

console.log(
  arr.includes(2),
  arr.includes('abc'),
  arr.includes(true),
);



// push, unshift - 배열에 값을 추가

// a. push - 값을 뒤에 추가
const arr = [1, 2, 3];
const x = arr.push(4);

console.log(x, arr);

// b. unshift - 값을 앞에 추가
const arr = [5, 6, 7];
const x = arr.unshift(4);

console.log(x, arr);



// 수정된 배열의 길이를 반환
// 부수효과 - 원본 배열을 변경 배열 마지막 강에 배울 스프레드 문법을 보다 권장
// 💡 push보다 unshift가 더 느림 - 이후 요소들을 밀어내야 하므로s




// pop, shift - 배열에서 값을 제거하여 반환


// pop - 값을 뒤에서 제거하여 반환
const arr = [1, 2, 3, 4, 5];
const x = arr.pop();

console.log(x, arr);

const y = arr.pop();

console.log(y, arr);



// b. shift - 값을 앞에서 제거하여 반환
const arr = [1, 2, 3, 4, 5];
const x = arr.shift();

console.log(x, arr);

const y = arr.shift();

console.log(y, arr);
