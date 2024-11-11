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
  let name: undefined; // 사용X💩
  let age: number | undefined; // 숫자 또는 undefined
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 사용X💩
  let person2: string | null; // 문자열 또는 null

  // unknown 사용X💩
  let notSure: unknown = 0; // 무슨타입이 될 지 모름!
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0; // 무엇이든 올 수 있다!
  anything = 'hello';

  // void
  // 함수에서 아무것도 return하지 않을 떄 void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 사용X💩

  // never
  // 에러 핸들링 -> 절대 return할게 업음
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    
    // 무한 반복
    while (true) {}
  }
  let neverEnding: never; // 사용X💩

  // objet
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
