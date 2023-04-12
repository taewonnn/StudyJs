// Fetch API


// Web API에서 제공하는 기능 - 즉 브라우저에서 제공
// 네트워크로부터 리소스를 받아오기 위한 다양하고 강력한 기능들 제공



// fetch 메서드
// 네트워크 통신으로 원격에 요청을 보내고 답을 받아오는 프로미스를 반환

// 💡 결과가 Promise의 인스턴스임 확인
console.log(
  fetch('https://showcases.yalco.kr/javascript/mockserver/race-result')
);

fetch('https://showcases.yalco.kr/javascript/mockserver/race-result')
  .then(response => {
    console.log(response);
    return response;
  })
  .then(response => response.json())
  .then(console.log);


// 반환되는 결과 ( response )
// 요청의 결과에 대한 정보들을 담은 객체
// json 메서드 - 결과의 body로 받은 텍스트를 JSON 객체로 변환하여 반환
