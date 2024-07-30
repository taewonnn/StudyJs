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


// prac
const replaceFruits = (arr, from, to) => {
  return arr.map((i) => {
    console.log(i);
    return i === from ? to : i;
  })
}



const arr = ['🍌', '🍓', '🍇', '🍓']
console.log('!!',replaceFruits(arr, '🍓', '🥝'))




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




// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function match(input, search) {
  return input.filter((item) => search.includes(item));
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));


// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];

const result2 = nums
  .filter((num) => num > 5) //
  .reduce((avg, num) => avg + num / array.length, 0);
console.log(result2);
