// this

// 기본적으로 자신이 속한 곳을 가리킴 - 문맥 context
// 💡 함수의 호출 방식에 따라 가리키는 바가 달라짐 - 자바스크립트 특성



// 1. 전역에서의 this
console.log(this);


// 2. 함수 안에서의 this
function func () {
  console.log(this); // globalThis
}

func();


