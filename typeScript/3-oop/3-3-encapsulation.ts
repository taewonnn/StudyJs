{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };


  // 정보 은닉 방식
  // 따로 설정하지 않으면 public으로 설정됨
  
  // public
  // private 
  // protected
  
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }


  // getter / setter
  // getter -> Class 내의 속성 값을 읽을 때 호출되는 메서드
  class Example {
  private _value: number = 0;
  
  get value(): number {
    // 추가 동작 수행
    return this._value;
  }

  const example = new Example();
  console.log(expmple.value) // 0

  
  // Setter -> Class 내의 속성에 값을 할당할 때 호출되는 메서드
  class Example {
  private _value: number = 0;
  
    set value(newValue: number) {
      // 추가 동작 수행
      this._value = newValue
    }
  }

  const example = new Example();
  example.value = 42; // _value 속성에 42를 할당하고 추가 동작 수행.

  
  

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, public lastName: string) {}
  }
  const user = new User('Steve', 'Jobs');
  user.age = 6;
  console.log(user.fullName);
}
