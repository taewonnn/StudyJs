// Promise
// object 형식 / 끝난 이벤트(비동기적으로 수행한 결과값)를 알려주는 객체


// Promise의 상태 종류
// pending(일이 끝나지 않은 상태) fullfilled(성공) rejected(실패)


// then, catch, finally

// then -
// catch -
// finally -


function runInDelay( seconds) {
  // promise object를 return
  return new Promise();

  runInDelay(2)
    .then(필요한 일 수행)
    .catch(에러를 처리)
    .finally(최종적으로 무조건 호출)

}
