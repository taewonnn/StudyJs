# 동기 VS 비동기

Ex. 짜장면 배달 함수

짜장면 배달()
짜장면 먹기_동기식()
다음 장소로 배달()


동기적으로
코드가 반드시 작성된 순서대로 실행된다!!


비동기적으로
코드 순서대로 실행이 아닌, 효율적으로 실행시키기 위해
짜장면을 다 먹을 때까지 기다리고 그릇을 받고 다음 장소로 배달하는 것이 아니라, 기다리는 동안 다른 배달을 가는 것!!!




## 자바스크립트의 싱글 쓰레드 작업 수행 방식

자바스크립트는 코드가 작성된 순서대로 작업을 처리한다.
이전 작업이 진행 중일 때는 다음 작업을 수행하지 않고 기다린다!! 먼저 작성된 코드가 모두 다 실행이 되야 그 뒤에 코드를 실행한다.(블로킹 방식)

=> 동기 방식의 처리

무거운 작업이 있는 경우) 
A 작업(0.3초) -> B작업(30초) -> C작업(10초)
 -> B작업이 30초가 걸림으로 성능 상에 문제!!



## 비동기 처리 방식

A / B / C 작업을 동시에 시켜!!  
  -> 각각에 콜백함수를 붙여서 실행 시켜주면 작업이 끝나면 알려줘!!

```js
function taskA () {
  setTimeout(() => {
    console.log('A task 끝')
  }, 2000)
}

taskA();
console.log("코드 끝") 

// 코드 끝이 나오고 나중에 A task 끝이 나옴!

```


```js
function taskA (a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000)
}

taskA(3, 4, () => {console.log('A task result:', res)});
console.log("코드 끝") 

// 코드 끝이 나오고 나중에 7이 나옴!

```

```js
function taskA (a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000)
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res)
  }, 1000)
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  },  2000)
} 

taskA(3, 4, () => {
  console.log('A task result:', res)
});

taskB(7, (res) => {
  console.log('B task result :', res)
})

taskC(14, (res) => {
  console.log('C task result :', res)
})

console.log("코드 끝") 

// 코드 끝
// B Task : 14
// C Task : -14
// A Task : 7

```



## JS Engine

동기 방식


```js
function one () {
  return 1;
};

function two () {
  return one() + 1;
}

function three () {
  return two() + 1;
};

console.log(three());
```


비동기 방식

```js
function asyncAdd (a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000)
};

asyncAdd(1, 2, (res) => {
  console.log('Result : ', res)
})
```


1. Main Context 실행
2. asyncAdd 함수 호출  -> callstack에 추가 
3. setTimeOut()  비동기 함수 => 3초를 기다려야 하는데, 이걸 web APIS로 넘겨버린다! 여기에서 3초를 기다려
4. asyncAdd 함수 종료하여 callstack 종료
5. Web APIs에서 3초 뒤 callback queue로 옮겨진 이후 call stack에 옮겨짐
6. ...














