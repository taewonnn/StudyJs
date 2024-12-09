// map

{
  type Video = {
    title: string;
    author: string;
  };

  // title / author가 있어도 없얻도 되는걸 만들기 위해 타입을 또 만드는건 비효율적
  // type VideoOptional2 = {
  //   title?:string;
  //   author?:string;
  // }

  // [1, 2].map(item => item * item); // [1, 4]
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in 과 동일한 형태 objcect key를 하나하나 도는것
  };


  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type VideoOptional = Optional<Video>;

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
