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



// 같은 이벤트에 대해 여러 핸들러 등록 가능

$button2.addEventListener('mouseenter', () => {
  if (interval) clearInterval(interval);

  countdown = 5;

  $button2
    .lastElementChild
    .textContent = countdown;

  interval = setInterval(() => {
    $button2
      .lastElementChild
      .textContent = --countdown;

    if (!countdown) clearInterval(interval);
  }, 1000);
});

$button2.addEventListener('mouseenter', () => {
  if (interval) clearInterval(interval);

  countdown = 5;

  $button2
    .lastElementChild
    .textContent = countdown;

  interval = setInterval(() => {
    $button2
      .lastElementChild
      .textContent = --countdown;

    if (!countdown) clearInterval(interval);
  }, 1000);
});



// focus, blur 이벤트

const $input1 = document.querySelector('#input1');

$input1.addEventListener('focus', () => {
  $input1.setAttribute('placeHolder', '어! 왜, 뭐 입력하시게요?');
});

$input1.addEventListener('blur', () => {
  $input1.setAttribute('placeHolder', '그냥 가시네...');
});



// keyup 이벤트
// 키보드 키가 눌린 후 올라올 때

const $ul = document.querySelector('ul');
const $input2 = document.querySelector('#input2');

$input2.addEventListener('keyup', (e) => {
  if (e.key !== 'Enter') return;

  $newLi = document.createElement('li');
  $newLi.textContent = e.target.value;
  $ul.appendChild($newLi);

  e.target.value = '';
});


// change 이벤트
// 인풋 요소의 값이 바뀔 때

$input2.addEventListener('keyup', (e) => {
  if (e.key !== 'Enter') return;

  $newLi = document.createElement('li');
  $newLi.textContent = e.target.value;
  $ul.appendChild($newLi);

  e.target.value = '';
});

document.querySelector('#grade')
  .addEventListener('change', () => {
    fillRaceTable();
  });

document.querySelector('#sort')
  .addEventListener('change', () => {
    fillRaceTable();
  });
