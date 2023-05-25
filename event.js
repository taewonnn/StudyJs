// Event


// addEventListener - EventTarget의 기능
// 첫 번째 인자로 주어진 이름의 이벤트 발생시 두 번째 인자로 주어진 콜백함수 실행


// click

document.querySelector('#button1')
  .addEventListener('click', () => {
    alert('ㅇㅇ 어서오고');
  });



// 이벤트 리스너에서의 this
// ♻️ 새로고침 후 실행
document.querySelector('#button1')
  .addEventListener('click', function (e) {
    console.log(this);
    console.log(e.target);
    this.textContent = '클릭됨';
  });


// mouseenter, mouseleave 이벤트
// 마우스 커서가 들어올/나갈 때

const $button2 = document.querySelector('#button2');

let timeout;
let interval;
let countdown;


$button2.addEventListener('mouseenter', () => {
  if (timeout) clearTimeout(timeout);

  $button2
    .firstElementChild
    .textContent = '💣 치워라, 5초 준다';

  timeout = setTimeout(() => {
    $button2
      .firstElementChild
      .textContent = '🔥🔥🔥🔥🔥🔥🔥🔥🔥';
  }, 5000);
});
