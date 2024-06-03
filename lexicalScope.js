// 렉시컬(정적) 스코프 lexical(static) scope

// 변수나 상수가 코드상 어디에서 지정되었는가에 따라 그 사용 범위를 결정
// 함수가 코드상 어디에서 정의되었는가에 따라 그 상위 스코프를 결정
// 호출한 곳을 기준으로 하는 동적 스포크 dynamic scope 와 상반되는 개념


const x1 = 1;
const y2= 1;
const z3= 1;

function func1 () {
  const y = 2;
  const z = 2;

  console.log('2', x, y, z);
  func2();
}

function func2 () {
  const z = 3;

  console.log('3', x, y, z);
}


console.log('1', x, y, z)
func1();

// func2을 호출한 블록에서의 y 값은 2
// func2을 정의된 블록에서의 y 값은 1
// 정의된 블록을 기준으로 상위 스코프의 값이 사용됨



// 렉시컬 환경 lexical environment
// 전체 문서, 함수, 블록을 실행하기 전 만들어지는 내부 객체
// 각 스코프의 고유 값들과 외부 스코프에 대한 참조를 포함


// 구성요소
// 환경 레코드 environment record - 해당 스코프의 데이터들
// 외부 렉시컬 환경에 대한 참조 outer lexical environment reference

const x = 1;
const y = 1;
const z = 1;

function func1 (a) {
  const y = 2;
  const z = 2;

  function func2 (b) {
    const z = 3;

    console.log('3', x, y, z, b);
  }

  console.log('2', x, y, z, a);
  func2(a + 1);
}

console.log('1', x, y, z)
func1(1);
