# 면접준비

## Web / js
1. 웹 렌더링 과정

html 파싱, DOM트리 구축  (무엇을)
CSS 파싱, CSSSOM 구축  (어떻게)
javascript 실행
돔트리랑 CSSOM 트리 합쳐서 렌더트리 구축
(렌더트리는 레이아웃 계산)
계산해서 렌더링


2. 주소창에 google.com을 입력한다면?

url에 입력한 값을 DNS 서버에 요청해서 ip 주소를 알아낸다
ip주소 기반으로 http프로토콜 사용하여 요청 메시지 생성 및 서버로 전송
서버에서 준 응답을 브라우저가 파싱해서 화면에 보여준다


3. CORS (cross origin resource sharing)
cross origin
기본적으로 same origin(동일 출처)을 따른다.

cross-origin(요청을 보내는 주체와 받는 주체가 출처가 다른 경유)
쉽게 말해 내가 직접 구글 백엔드에 요청하는 경우

cross origin을 백엔드에서 허용할 ip를 따로 해주어야 한다.


4. 웹에서 이벤트의 종류
* 이벤트는 js 객체
- 브라우저로부터 발생
- 사용자 행동에 의해  발생
- DOM의 변화로 발생

5. 크로스 브라우징
w3c에서 제정한 웹 표준에 맞게 개발해서 어떠한 브라우저 / 플랫폼에서도 독립적으로 잘 작동하도록 해주는 개발 방법


6. 웹 표준의 장점
호환성
접근성
효율성과 유지보수성

  
7. RESTful API

  * 위키 : 월드 와이드 웹(World Wide Web a.k.a WWW)과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍처의 한 형식으로 
    자원을 정의하고 자원에 대한 주소를 지정하는 방법 전반에 대한 패턴

REST란, REpresentational State Transfer 의 약자이다. 여기에 ~ful 이라는 형용사형 어미를 붙여 ~한 API 라는 표현으로 사용된다. 즉, REST 의 기본 원칙을 성실히 지킨 서비스 디자인은 'RESTful'하다라고 표현할 수 있다.

REST가 디자인 패턴이다, 아키텍처다 많은 이야기가 존재하는데, 하나의 아키텍처로 볼 수 있다.
REST 는 Resource Oriented Architecture 이다. 
API 설계의 중심에 자원(Resource)이 있고 HTTP Method 를 통해 자원을 처리하도록 설계하는 것이다.

```html
RESTful API는 웹 서비스와 애플리케이션(응용프로그램) 간에 데이터를 주고받기 위한 표준화된 방법입니다. 
이를 통해 클라이언트는 HTTP 메서드(GET, POST, PUT, DELETE 등)를 사용하여 서버에 요청을 보내고, 서버는 클라이언트에 응답을 제공합니다. 
RESTful API는 URL(자원)을 통해 리소스(데이터)에 접근하고, JSON 또는 XML과 같은 형식으로 데이터를 전달합니다. 
이러한 방식은 확장성과 유연성을 제공하며, 다양한 플랫폼과 언어에서 사용할 수 있습니다.

자원은 URL에 표기하고 행위는 메서드로 표현하는 것이 RESTFul한 요청 방법이라고 할 수 있다.
```




## React / 프로젝트 관련

1. react 사용 이유
컴포넌트 기반으로 가독성과 유지보수에 용이하며
react는 가상 DOM을 사용하여 변경이 될 때만 변경해주기에 불필요한 렌더링을 방지해줍니다.


2. 장/단점
장점
  -가독성과 유지보수 용이 - 컴포넌트 단위 개발
  -가상 DOM과 성능 최적화 - 가상 DOM을 활용하여 변경될 때만 변경해주기에 불필요 렌더링 방지

단점
  - 초기 로딩 속도가 느리다. - 일반적인 HTML 페이지보다 느리다. 이유) js 파일을 다운받고 해석이 필요하기 때문
  - 상태 관리가 어려워 추가 라이브러리 사용 필요
  - SEO(search engine optimization) 검색엔진 최적화가 안됨

3. 프로젝트 진행 시 어려웠던 점
  - 첫 프로젝트에는 프로젝트의 규모가 크지 않기에 부가적인 라이브러리 없이 최대한 리액트와 js만으로 설계하기로 계획
  특히 규모가 작아 상태관리 라이브러리의 필요성을 생각 못함. 하지만 atomic디자인으로 만들다 보니 props지옥에 빠지게 되었다.
  컴포넌트를 많이 쪼개서 재사용성이 좋아졌지만, 그만큼 컴포넌트의 양이 많이 생겨 props로 부모와 그 자식 간에 계속 넘겨주는 것을 경험
  이를 통해, 상태관리 라이브러리의 필요성을 느꼈고, 우선적으로 context API를 사용해서 해결


4. recoil 사용 이유
  프로젝트의 규모가 크지 않기에, 간단하고 직관적인 api를 제공하여 사용성에서 쉬운 recoil을 선택했습니다.
  시간 여행 디버깅이란 기능으로 상태 변화를 추적하고 시간에 따라 상태의 이전 상태로 돌릴 수 있는 기능도 써보기 위해 recoil로 결정했습니다.
  단점은 중앙 집중화된 상태 관리입니다. 규모가 큰 프로젝트에는 적합하지 않습니다. 왜냐하면 불필요한 상태도 모두 공유를 하기 때문


5. react - query 사용 이유
  http 요청 시 작성하는 코드가 많이 줄어들게 되며, 캐싱 / 재시도 등 다양한 기능을 지원합니다.
  예를 들어, 데이터의 변화가 자주 일어나지 않는 곳에서 GET요청을 할 때, 한 번 받아왔다면 이 데이터를 특정 시간동안은 
  새로고침해도 다시 요청을 하지 않게 해주어 불필요한 API 호출을 방지해줍니다.
  반대로, 업데이트가 필요한 경우 분 단위 설정으로 해당 설정시간이 되면 자동 업데이트도 해줍니다.


6. react-hook-form 사용 이유
  회원가입 페이지에서 사용했습니다. 사유는 회원가입 시 많은 input 데이터들이 있습니다.
  각 input에 useState 적용 시 state가 변경될 때마다 해당 컴포넌트 전체가 리렌더링되어 성능이 저하됩니다.
  하지만, hook-form을 사용하면 이 input들의 상태를 통합적으로 관리해주며, validation까지 설정 가능합니다.


5. 브라우저 리플로우 현상에 대해

브라우저 랜더링의 각 단계는 반드시 전 단계의 데이터가 필요하며, html의 레이아웃이 변경될 경우 레이아웃 단계에서 랜더 트리가 재생성되며 이를 리플로우라고 합니다.
레이아웃에 변화를 주는 거의 모든 속성이 리플로우를 유발합니다. 이를 피하기 위해 GPU를 이용하는 transform 속성을 이용하여 레이아웃을 제어하는게 좋습니다.

6. 이벤트 캡쳐링과 버블링에 대해

브라우저 화면에서 이벤트가 발생했을때 브라우저는 이벤트 대상을 찾아갑니다.  이때 상위의 window 객체부터 document, body 순으로 DOM 트리를 따라 내려갑니다. 이를 캡처링 단계라고 하며 중간에 만나는 모든 캡처링 이벤트 리스너를 실행시킵니다.  그리고 이벤트 대상을 찾고 캡처링이 끝나면 이제 다시 DOM 트리를 따라 올라가며 만나는 모든 버블링 이벤트 리스너를 실행합니다. 이를 이벤트 버블링 단계라고 합니다. 이러한 과정에서 이벤트 리스너가 차례로 실행되는것을 이벤트 전파(event propagation)라고 합니다.
