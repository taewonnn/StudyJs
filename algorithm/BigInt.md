// BigInt

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt

정수(Integer)로는 2^32 - 1까지만 나타낼 수 있음  ( Number는 2^53 -1까지임)

 = > 이걸 극복하기 위해 BigInt()를 사용한다.


BigInt는 정수 리터럴의 뒤에 n을 붙이거나(10n) 함수 BigInt()를 호출해 생성할 수 있습니다.




바꾸는 방법(파싱)

2진수 -> BigInt

```js
  let daram = '10101010101010101011010101010101010110011010101010101010101010101010101010101'
  
   // 0b를 붙여줘야 daram이 2진수인 걸 알게되고 바뀔 수 있음
  const zzol = BigInt(`0b${daram}`)
```









