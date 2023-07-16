# 면접준비


- 웹 렌더링 과정

html 파싱, DOM트리 구축  (무엇을)
CSS 파싱, CSSSOM 구축  (어떻게)
javascript 실행
돔트리랑 CSSOM 트리 합쳐서 렌더트리 구축
(렌더트리는 레이아웃 계산)
계산해서 렌더링


- 주소창에 google.com을 입력한다면?

url에 입력한 값을 DNS 서버에 요청해서 ip 주소를 알아낸다
ip주소 기반으로 http프로토콜 사용하여 요청 메시지 생성 및 서버로 전송
서버에서 준 응답을 브라우저가 파싱해서 화면에 보여준다


- CORS (cross origin resource sharing)
cross origin
기본적으로 same origin(동일 출처)을 따른다.

cross-origin(요청을 보내는 주체와 받는 주체가 출처가 다른 경유)
쉽게 말해 내가 직접 구글 백엔드에 요청하는 경우

cross origin을 백엔드에서 허용할 ip를 따로 해주어야 한다.


- 웹에서 이벤트의 종류
이벤트는 js 객체

브라우저로부터 발생
사용자 행동에 의해  발생
DOM의 변화로 발생
