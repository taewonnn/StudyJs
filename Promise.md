# Promise


```js
// promise는 object임!! 비동기적으로 수행 한 것들이 성공적으로 끝났거나 실패했거나를 알려준다! 
// 서버로 데이터 요청 코드 ~ 

// 그 이후 데이터 관련해서 더하기 함수 실행 코드 ~

// 3가지 상태가 있다

function runInDelay(seconds) {
  return new Promise();
}

runInDelay(2)
  .then(// 필요한 일 수행)
  .catch(// 에러를 처리)
  .finally(// 최종적으로 무조건 호출!)


runInDelay(2)
  .then(() => {
    console.log('타이머 완료!')
  })
  .catch((error) => console.log(error))
  .finally(()=> console.log('끝났다!'))


```

=> 서버로 데이터를 받아올 때, 오래걸리거나 하면 함수가 실행이 안돼!
=> 이런 일을 방지하기 위해 서버에서 데이터 받아올 때까지 기다려줄게!! Promise 사용이유



```js

let url = '~~~~'

function getData () {
  // promise 사용 방법
  return new Promise(function(resolve, reject) {
    // 이 곳에 데이터 받기 위한 코드 작성
    axios.get(url).then(function(response) {
      console.log(response.data);
      resolve(response.data);
    })
  })
}

// 데이터 받고 나면~~ 함수 실행해라~
getData().then(function(data) {
  
  let result = 0;
  data.forEach(a => {
    result += item.price
  })
})

```

