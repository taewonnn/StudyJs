// Promise_ex

// 🏃🏃🏃 릴레이 예제
// 철수, 영희, 돌준, 정아, 길돈이 치례로 이어달리기는 하는 코드
// ⭐ 각 골인시간 기록 - 이전 콜백함수의 결과가 다음 콜백함수로 넘겨져 축적됨
// 한 주자라도 데드라인(밀리초)을 넘기면 실패 - 주자마다 다른 실패 메시지 출력
// 완주 실패시 😢 완주 실패 - ${전체 소요시간} 출력
// 실패든 성공이든 마지막에 - - 경기 종료 - - 출력



const DEADLINE = 1400;

function relayRun (name, start, nextFunc, failMsg) {
  console.log(`👟 ${name} 출발`);
  const time = 1000 + Math.random() * 500;

  setTimeout(() => {
    if (time < DEADLINE) {
      console.log(`🚩 ${name} 도착 - ${(start + time)/1000}초`);
      nextFunc?.(start + time);

    } else {
      console.log(failMsg);
      console.log(`😢 완주 실패 - ${(start + time)/1000}초`);
    }

    if (time >= DEADLINE || !nextFunc) {
      console.log('- - 경기 종료 - -');
    }
  }, time);
}
