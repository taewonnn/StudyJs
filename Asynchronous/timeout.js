// callback

// web APIs는 js를 비동기적으로 !! 멀티 쓰레드 환경에서 동작
// 다양한 일들을 동시 다발적으로 실행 가능

// web APIS -> DOM API, setTimeout, setInterval, fetch, eventListener


function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2')
  }, 3000);
  console.log('3');
}

execute(); // 출력 순서 : 1 -> 3 -> 2
// 바로 1이 출력된다!
// setTimeout은 비동기(3초 뒤에 실행이니 콜백함수만 던져 놓고 넘어간다)
// 그 뒤에 3을 출력한다
// 3초뒤에 callstack에 callback을 가져와서 실행





