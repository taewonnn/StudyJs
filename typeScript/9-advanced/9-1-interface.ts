{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ★
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class에서 두개 다 모두 구현 가능 ★
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // Extends 
  // 기존 interface에 z가 포함된 intercafe로 확장 가능
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // 😆 only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }

  // 타입은 중복 정의 불가능
  // type PositionType {
  // }

  // 😆 Type만 가능한 것 
  // can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string type이 가능

  type NumberType = number;
  type Direction = 'left' | 'right';
}
