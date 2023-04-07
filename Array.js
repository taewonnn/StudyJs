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





