// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]


function replace (array, from, to) {
  return array.map((i) => (i === from ? to: i))
}


const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);



// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2


function count(array, item) {
  return array.filter((v) => v === item).length;
}

function count1(array, item) {
  return array.reduce((count, value) => {})
  if (value === item) {
    count ++;
  }
  return count;
}

console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));
