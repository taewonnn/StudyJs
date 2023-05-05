//  클로저 closure
// 내부 함수에서 외부 함수의 값에 접근할 수 있다는 개념 함수 중첩시

function func1 () {
  const word = 'Hello';

  function func2 () {
    console.log(word);
  }

  return func2;
}

const logHello = func1();

logHello();

// logHello에는 func1 안의 함수인 func2가 반환되어 지정됨
// func1의 실행이 끝났음에도 불구하고, 해당 스코프 내의 값이 살아 있음
// func2와 func2가 선언된 환경(func1의 스코프)의 조합 - 클로저



function createCounter (start) {
  let num = start;

  return function () {
    console.log(++start);
    return start;
  }
}

const count = createCounter(10);

// 단지 값을 복사해서 갖는 것이 아니라, 해당 값이 저장되는 외부 환경 자체가 유지됨












const text = 'hello';
function func() {
  console.log(text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1();


// 왜 ??

// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 정보은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}
const increase = makeCounter();
increase();
increase();
increase();

class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();
