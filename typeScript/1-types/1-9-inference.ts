/**
 * Type Inference -> 추론
 */

let text = 'hello';
function print(message = 'hello') {
  console.log(message);
}
print('hello');


function add(x: number, y: number): number {
  return x + y; // 결과는 숫자로 나올거라고 추론
}
const result = add(1, 2);
