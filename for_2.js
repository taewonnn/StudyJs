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



// for문 안에서 else

// for문 안에서 if문에 else문을 사용하는 것이 언제 루프를 되돌리는지에 대해 이해하는 것이 중요합니다.

// for문 안에서 if문과 else문을 사용하면,
// if문이 true이면 if문 안에 있는 코드가 실행되고, else문은 건너뛰고 for문이 다음 반복으로 계속 진행됩니다.
// 즉, else문은 if문이 false일 때 실행되는 코드이므로, if문이 true일 때 실행되는 코드와는 별개로 실행됩니다.

//   따라서, else문 안에서 특별한 처리를 하지 않는다면, else문은 루프를 되돌리지 않습니다.
//   만약 else문 안에서 break나 return 문 등으로 루프를 종료시키거나, 다른 반복 제어문(for, while, do-while 등)을 사용한다면, 루프를 되돌릴 수 있습니다.
//   아래는 else문으로 인해 루프가 되돌아가지 않는 예시 코드입니다.


for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("i is 2");
  } else {
    console.log("i is not 2");
  }
}


//위 코드는 i가 2일 때 "i is 2"를 출력하고, 그 외에는 "i is not 2"를 출력합니다. 따라서 출력 결과는 아래와 같이 나옵니다.


// i is not 2
// i is not 2
// i is 2
// i is not 2
// i is not 2

