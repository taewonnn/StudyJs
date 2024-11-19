{
  /**
   * Type Aliases
   * 새로운 type을 내가 정할 수 있다!
   */
  type Text = string; // Text라는 타입은 문자열 타입이다!
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;

  // Obj에서도 가능!
  type Student = {
    name: string;
    age: number;
  };
  
  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  
  /**
   * String Literal Types
   * tpye을 문자열로도 지정 가능!
   */
  type Name = 'name';
  let ellieName: Name;
  
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
