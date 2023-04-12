// async / await

// 프로미스를 기반으로 동작
// 마치 동기 코드처럼 직관적으로 코딩을 할 수 있음



function getMult10Promise (number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number * 10);
    }, 1000);
  });
}



async function doAsyncWorks () {
  const result1 = await getMult10Promise(1);
  console.log(result1);

  const result2 = await getMult10Promise(2);
  console.log(result2);

  const result3 = await getMult10Promise(3);
  console.log(result3);
}

doAsyncWorks();
console.log('💡 이 문구가 먼저 출력됨');



// ⭐ await - 코드의 진행을 멈추고 프로미스로부터 답을 받아냄
// 💡 await은 async 함수 또는 모듈 내에서만 사용 가능
// 👉 MDN 문서 보기
