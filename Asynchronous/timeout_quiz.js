// 주어진 seconds가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던진다!

function runInDelay(callback, seconds) {
  if(!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 커야 한다!')
  }
  setTimeout(callback, seconds * 1000);
}
