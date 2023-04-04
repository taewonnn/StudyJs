// reduce()

// reduce()에는 누산기가 포함되어 있기 때문에, 배열의 각 요소에 대해 함수를 실행하고 누적된 값을 출력할 때 용이하다.

// 배열안에 요소들 모두 더할 때 사용

let daram = [1, 2, 3, 4, 10]

// reduce( (a, b) => a + b, 최초값)
daram.reduce((a,b) => a +b, 0)



// 1. 단순화

const numbers = [4, 3, 2, 1];
let sum = numbers.reduce((acc, cur) => acc + cur)

// 단순화한 내용을 풀어보면 아래와 같음
//
// const numbers = [4, 3, 2, 1];
// let sum = numbers.reduce((acc, cur) => {
//   return acc + cur;
// });

// acc += cur; // 4 += 3;
// acc += cur; // 7 += 2;
// acc += cur; // 9 += 1;
// console.log(acc); // 10



// 2. 옵션이 추가된 발전된 형태

// 2개의 인자 + 1개의 초기값
// acc accumulator : 누산기, 누적되는 값, 최종적으로 출력되는 값
// cur current : 현재 돌고 있는 요소
// initialValue : acc의 초기값 (optional)

const numbers = [4, 3, 2, 1];
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);


