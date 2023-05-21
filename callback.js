// callback

// 함수 안에 파라미터로 들어가는 함수
// 용도 : 순차적으로 실행하고 싶을 때 사용!

document.querySelector('.button').addEventListener('click', function () {

});

// addEventListener는 함수인데, 함수 안에 또다른 함수를 넣는다! -> 콜백함수
// 버튼을 클릭했을 때, 이걸 실행해주세요!  - 순차적으로 실행



setTimeout(function() {}, 1000)
// 1초 뒤에 실행해주세요!



//

function first (param) {
  param()
}

function second () {

}

first(second)
// first 함수안의 코드 실행해주세요! 근데 파라미터에 second 집어넣어서요!






function a() {
  for (let i = 0; i < 1000000000000000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다!');
const result = c();
console.log(result);
