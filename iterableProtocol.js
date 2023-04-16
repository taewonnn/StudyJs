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
