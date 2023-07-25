// 주어진 seconds가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던진다!

function runInDelay(callback, seconds) {

  // callback이 존재하지 않을 때,

  if(!callback) {
    throw new Error('callback함수를 전달해주세요')
  }

  // seconds가 0보다 작거나 없는 경우,

  if(!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 커야 한다!')
  }

  setTimeout(callback, seconds * 1000);
}
