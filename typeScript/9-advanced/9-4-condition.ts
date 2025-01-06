// condition
// 

{

  // 조건이 맞으면 ~~타입 설정
  type Check<T> = T extends string ? boolean : number;
  
  type Type = Check<string>; // boolean이 됨


  type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

type T0 = TypeName<string>;
('string');

type T1 = TypeName<'a'>;
('string');

type T2 = TypeName<() => void>;
('function');

}