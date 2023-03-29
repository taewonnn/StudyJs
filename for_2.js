// for문




// 반복문 빠져나오기

// 대개는 반복문의 조건이 falsy가 되면 반복문이 종료됩니다.
// 그런데 특별한 지시자인 break를 사용하면 언제든 원하는 때에 반복문을 빠져나올 수 있습니다.


let sum = 0;

while (true) {

  let value = +prompt("숫자를 입력하세요.", '');

  if (!value) break; // (*)

  sum += value;

}
alert( '합계: ' + sum );



// 다음 반복으로 넘어가기

// continue 지시자는 break의 '가벼운 버전’입니다.
// continue는 전체 반복문을 멈추지 않습니다. 대신에 현재 실행 중인 이터레이션을 멈추고 반복문이 다음 이터레이션을 강제로 실행시키도록 합니다(조건을 통과할 때).

// continue는 현재 반복을 종료시키고 다음 반복으로 넘어가고 싶을 때 사용할 수 있습니다.

for (let i = 0; i < 10; i++) {

  // 조건이 참이라면 남아있는 본문은 실행되지 않습니다.
  if (i % 2 === 0) continue;

  alert(i); // 1, 3, 5, 7, 9가 차례대로 출력됨
}



// for문 안에서 else return 안되는 이유
// else return은 안됨!!!


// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === target) {
//     return nums.indexOf(nums[i]);
//   } else {
//     return -1
//   }
// }


