// map type
// 기존에 있는 타입들을 이용하면서 조금 다른 형태로 변환할 수 있음

{
  type Video = {
    title: string;
    author: string;
  };

  // title / author가 있어도 없얻도 되는걸 만들기 위해 타입을 또 만드는건 비효율적
  // Bad Ex.
  // type VideoOptional2 = {
  //   title?:string;
  //   author?:string;
  // }

  
  // Optional -> 어떤 종류의 다른 타입도 받아올 수 있음

  // ex. map을 이용한 다른 배열로 반환
  // [1, 2].map(item => item * item); // [1, 4] 

  // [] key를 하나씩 돌 수 있음

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in 과 동일한 형태 objcect key를 하나하나 도는것
  };


  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>; // Vodeo의 key들을 돌면서 각 타입들을 ?(optional)로 만들어버림


  // Ex.
  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'dog',
  };

  animal.name = 'ellie';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'ellie',
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  // 기존의 주어진 T타입을 돌면서 기존의 value타입을 쓰거나 null이 가능하게 쓴다!
  type Nullable<T> = { [P in keyof T]: T[P] | null }; 

  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
  };


  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
