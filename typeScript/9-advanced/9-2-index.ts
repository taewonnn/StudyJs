{

  // 기본 obj
  const obj = {
    name: 'ellie',
  };

  obj.name; // ellie
  obj['name']; // ellie



  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // Name의 타입은 string
  const text: Name = 'hello';

  type Gender = Animal['gender']; //Gender의 타입은 'male' | 'female'

  // keyof -> 타입의 키를 ~
  // Animal의 모든 키의 타입을
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'gender';

  // Ex3
  type Person = {
    name: string;
    gender: Animal['gender']; // 'male' 또는 'female'
  };

  const person: Person = {
    name: 'ellie',
    gender: 'male', // 'male' 또는 'female'만 가능
  };
}
