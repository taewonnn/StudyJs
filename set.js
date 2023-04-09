// Set

// 중복되지 않는 값들의 집합  - 표준 내장 객체 중 하나

// 배열과의 차이: 동일한 값을 여러 번 포함할 수 없음
// 값들의 순서가 무의미함


// 기본 생성법
// Set 생성
const set1 = new Set();

// add 메서드 - 요소 추가
set1.add(1);
set1.add('A');
set1.add(true);

console.log(set1);


// 배열을 인자 넣으면 생성 + 초기화
// 중복된 요소 제거
const set2 = new Set([1, 1, 1, 'A', true]);

console.log(set2);



// set.has()
// has 메서드 - 요소 포함여부 확인
console.log(
  set2.has(1),
  set2.has('A'),
  set2.has(4)
);

// set.delete()
// delete 메서드 - 요소 제거 & 성공 여부 반환
console.log(
  set2.delete('A'),
  set2.delete(true),
  set2.delete(100)
);

console.log(set2);
