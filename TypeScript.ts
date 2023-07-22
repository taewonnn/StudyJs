// TypeScript

// JavaScript 기반 프로그래밍 언어

// Strongly-typed  프로그램이 작동 하기 전에 "데이터 타입이 뭐야??"라고 확인을 함!!


// Ex

// a 와 b를 더하는 함수(js)
const plus = (a, b) => a + b;

plus(2, 2)  // 4

plus(2, 'hi') // 2hi

// plus 안에 Number만 왔으면 좋겠어!! 하지만 js는 타입 따위 신경써주지 않음


// TypeScript는 프로그램이 작동하기 전에 잘못된 것을 말해줌!!

const minus = (a:number, b:number) => a + b;

minus(2, 2)  // 0
// minus(2, 'hi')
//  b에 문자가 와서 실행하기전에 말해줌!





{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

    // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // objet
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}

// string과 String은 다름. 소문자로 하는 것 기억하기.
const a: string = 'hello';
const b: String = 'hell';


{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }


  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }


  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }


  // TypeScript ✨
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Anna');

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}



{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}


  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}





