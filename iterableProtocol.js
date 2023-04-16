// iterable protocol

// 반복, 순회 기능을 사용하는 주체간의 통일된 규격
// 공통 기능들: for ... of, 스프레드 문법, 배열 디스트럭쳐링




// 이터러블 iterable - 이터러블 프로토콜을 준수하는 객체

// 배열, 문자열, Set, Map, arguments 등...
// 키 Symbol.iterator ( well-known 심볼 ) 의 값으로 이터레이터를 반환하는 메서드를 가짐



console.log(
  [][Symbol.iterator],
  ''[Symbol.iterator],
  new Set()[Symbol.iterator],
  new Map()[Symbol.iterator]
);



// 이터레이터 iterator
// next 메서드를 통해 이터러블을 순회하며 값을 반환

const arr = [1, 'A', true, null, {x: 1, y: 2 }];
const arrIterator = arr[Symbol.iterator]();

// 펼쳐서 메서드 살펴볼 것
console.log(arrIterator);


// 이터레이터 프로토콜 iterator protocol
// next 메서드의 반환 객체 내 요소

// value - 해당 차례에 반환할 값
// done - 순회 종료 여부 ( 마지막 값 반환 다음 차례부터 )







