#js 객체 속성 동적 할당


```js
// user라는 객체 생성 
const user = {};
user.name = "tommy";

console.log(user) // { name: 'tommy' }
```



```js
/** 대괄호 접근법 */

const user = {};
const key = 'name'
user[key] = 'tom';

console.log(user); // { name: 'tom' }
```
