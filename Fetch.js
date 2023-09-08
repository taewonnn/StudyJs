// Fetch API

// Web API에서 제공하는 기능 - 즉 브라우저에서 제공
// 네트워크로부터 리소스를 받아오기 위한 다양하고 강력한 기능들 제공

// fetch 메서드

// 네트워크 통신으로 원격에 요청을 보내고 답을 받아오는 프로미스를 반환
// fetch('주소' . then 그 다음 할 일)

// 💡 결과가 Promise의 인스턴스임 확인
console.log(
  fetch("https://showcases.yalco.kr/javascript/mockserver/race-result")
);

fetch("https://showcases.yalco.kr/javascript/mockserver/race-result")
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((response) => response.json())
  .then(console.log);

// 반환되는 결과 ( response )
// 요청의 결과에 대한 정보들을 담은 객체
// json 메서드 - 결과의 body로 받은 텍스트를 JSON 객체로 변환하여 반환

// 연속 fetching 예제

// 1. 경기 결과를 받아온 뒤 1등 주자 선택
// 2. 해당 주자의 상세정보 받아온 뒤 학교 코드 추출
// 3. 해당 학교의 정보 받아오기

// 1. promise
const SERVER_URL = "https://showcases.yalco.kr/javascript/mockserver/";

fetch(SERVER_URL + "race-result")
  .then((result) => result.json())
  .then((arry) => {
    return arry.sort((a, b) => {
      return a.record - b.record;
    })[0].runner_idx;
  })
  .then((winnerIdx) => {
    return fetch(`${SERVER_URL}runners/${winnerIdx}`);
  })
  .then((result) => result.json())
  .then(({ school_idx }) => school_idx)
  .then((schoolIdx) => {
    return fetch(`${SERVER_URL}schools/${schoolIdx}`);
  })
  .then((result) => result.json())
  .then(console.log)
  .catch(console.error);

// 2. async / await
const SERVER_URL = "https://showcases.yalco.kr/javascript/mockserver/";

async function getWinnersSchool() {
  const raceResult = await fetch(SERVER_URL + "race-result").then((result) =>
    result.json()
  );

  const winnerIdx = raceResult.sort((a, b) => {
    return a.record - b.record;
  })[0].runner_idx;

  const winnerInfo = await fetch(`${SERVER_URL}runners/${winnerIdx}`).then(
    (result) => result.json()
  );

  const schoolIdx = winnerInfo.school_idx;

  const schoolInfo = await fetch(`${SERVER_URL}schools/${schoolIdx}`).then(
    (result) => result.json()
  );

  console.log(schoolInfo);
}

getWinnersSchool();
