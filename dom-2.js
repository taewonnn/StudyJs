// dom 요소 선택


// getElementsByTagName - 태그명으로 선택

const $sections = document.getElementsByTagName('section');
const $listItems = document.getElementsByTagName('li');

console.log($sections);
console.log($listItems);



// getElementsByClassName - 클래스명으로 선택
// document에서 사용시 - Document의 메서드
const $plants = document.getElementsByClassName('plant');
const $soldOuts = document.getElementsByClassName('soldout');

console.log($plants);
console.log($soldOuts);
