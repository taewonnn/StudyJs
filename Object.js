// Object 심화

// 각 값에 적합한 래핑함수로 작용
console.log(
  new Object(1),
  new Object("ABC"),
  new Object(true),
  new Object([1, 2, 3])
);

// assign - 인자로 주어진 객체(들)의 프로퍼티들을 대상 객체에 붙여넣음

const intro1 = {
  name: "홍길동",
};
const intro2 = { ...intro1 };

console.log(intro1, intro2);

const intro3 = {
  name: "홍길동",
};
const intro4 = { ...intro3 };

console.log(intro3, intro4);

// keys, values, entries - 객체의 키 / 값 / [키, 값]을 배열로 반환

const obj = {
  x: 1,
  y: 2,
  z: 3,
};

console.log(Object.keys(obj));
