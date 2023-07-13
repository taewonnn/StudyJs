// Parameter

// 기본값 매개변수

function add(a = 2, b = 4) {
  console.log(`${a} + ${b}`);
  return a + b;
}

console.log(
  add(),
  add(1),
  add(1, 3)
);


// arguments
//  - 함수 내에서 사용가능한 지역 변수

// 배열의 형태를 한 객체 - 배열은 아니지만 사실상 배열처럼 동작 (배열도 사실 객체지만...)
// 함수 호출 시 전달된 모든 인수들을 배열 형태로 가짐

function add(a, b) {
  console.log('1.', arguments);
  console.log('2.', arguments[0]);
  console.log('3.', typeof arguments);
  return a + b;
}

console.log(
  '4.', add(1, 3, 5, 7)
);



// ...변수그룹명 - 나머지 변수 rest parameters

// 특정 매개변수들 뒤에 정해지지 않은 수의 매개변수들을 받을 때
// 마지막 인자로만 사용 가능
// arguments와는 달리 실제 배열임은

console.log(
  '3.',
  classIntro(3, '김민지', '영희', '철수', '보라')
); // 호이스팅

function classIntro (classNo, teacher, ...children) {
  console.log('1.', children);
  console.log('2.', arguments);

  let childrenStr = '';
  for (const child of children) {
    if (childrenStr) childrenStr += ', ';
    childrenStr += child;
  }
  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${childrenStr}입니다.`
}
