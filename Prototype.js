// Prototype

// 자바스크립트는 프로토타입 기반의 객체지향 프로그래밍을 지원하는 언어
// 오늘날에는 클래스가 더 널리 사용되지만, 사용하기에 따라 보다 강력하고 효율적



// ⭐ 자바스크립트의 모든 객체는 Prototype을 가짐

const obj = {};

console.log(obj);



// Object - 모든 것의 조상
// 아래 각 객체의 [[Prototype]]의 [[Prototype]]이 Object임 확인

console.log(
  new String('')
);

console.log(
  []
);




// 💡 프로토타입 체인
// 특정 객체에 호출된 프로퍼티가 없다면 프로토타입을 거슬러 올라감
// 예: Array에는 valueOf가 없지만 그 프로토타입인 Object에는 있으므로 호출 가능







