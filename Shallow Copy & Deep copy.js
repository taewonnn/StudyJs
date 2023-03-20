// Shallow Copy & Deep copy



// 얕은 복사(Shallow Copy)란 객체를 복사할 때 원본 값과 복사된 값이 같은 참조(=메모리 주소)를 가리키는 것이다.  객체의 참조값(주소 값)을 복사


const obj1 = { a: 1, b: 2};
const obj2 = obj1;

console.log( obj1 === obj2 ); // true






// 깊은 복사(Deep Copy)는 복사된 객체가 다른 주소를 참조하며 내부의 값만 복사된다.  객체의 실제 값을 복사

const obj3 = { a:1, b:2 };
const obj4 = { ...obj3 };

obj4.a = 100;

console.log( obj3 === obj4 ) // false
console.log( obj3.a ) // 1

// obj1과 obj2는 다른 주소를 갖게되었다.
