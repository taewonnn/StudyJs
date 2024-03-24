// Promise

// 오래걸리는 일을 조금 더 비동기적으로 처리할 수 있도록 도와줌
// 내가 언제끝날지는 모르겠는데 일이 끝나면 알려줄게!


// Promise = 이벤트가 끝났다는 것을 알려주는 object
// 연속적으로 비동기 코드를 써야 하는 경우

// 위와 같이 콜백 함수 안에 또 다른 콜백 함수를 넣어야 하는 상황 발생 - 콜백 지옥
// 횟수가 많을수록 가독성도 낮아지고 직관성이 떨어짐
// 실전에서는 더더욱 복잡하고 난해해짐

// then  -> 일이 끝난다음 등록할 수 있는
// catch -> 에러가 발생했을 때 잡을 수 있는
// finally -> 최종적으로 모든 일이 끝났을 때 사용할 수 있는

runInDelay222(2)
  // runInDelay222가 성공한다면
  .then('필요한일을 수행')
// runInDelay가 실패한다면
.catch('에러를 처리')
// 무조건 실행
.finally('최종적으로 정리')



function runInDelay (seconds) {
  return new Promise((resolve,reject) => {
    setTimeout( () => {
      if(!seconds || seconds < 0) {
        reject(new Error("seconds가 0보다 작음"))
      }
      resolve()}, seconds * 1000)
  });
}

runInDelay(2)
  .then(() => {console.log('타이머 완료!')})
  .catch(error => console.error(error))
  .finally(()=> console.log('끝났다!'))













