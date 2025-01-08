{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

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


// {

//   // class로 개선 
//   type CoffeeCup = {
//     shots: number;
//     hasMilk: boolean;
//   };


//   class CoffeeMaker {
//     static BEANS_GRAMM_PER_SHOT: number = 7; // class level  -> class와 연결이되어 있기떄문에 object마다 만들어지거나 생성되지 않음
//     coffeeBeans: number = 0; // instance (object) level

//     // 클래스를 이용해서 obj를 만들 떄 커피콩의 개수를 지정할 수 있게
//     constructor(coffeeBeans: number) {
//       this.coffeeBeans = coffeeBeans;
//     }

    
//     static makeMachine(coffeeBeans: number): CoffeeMaker {
//       return new CoffeeMaker(coffeeBeans);
//     }

//     makeCoffee(shots: number): CoffeeCup {
//       if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
//         throw new Error('Not enough coffee beans!');
//       }
//       this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
//       return {
//         shots,
//         hasMilk: false,
//       };
//     }
//   }

//   const maker = new CoffeeMaker(32);
//   console.log(maker);
  
//   const maker2 = new CoffeeMaker(14);
//   console.log(maker2);

//   const maker3 = CoffeeMaker.makeMachine(3);
// }



{
  type CofeeCup = {
    shots: number;
    hasMilk:boolean;
  }
  // class encapsulation

  // Public - 기본값 외부에서 접근 가능
  // private - 외부에서 접근 불가
  // protected - 상속할 떄 외부에서는 접근 못하지만 클래스를 상속한 자식 클래스에선 접근가능하게 설정
  // 따로 명시안하면 public으로 설정됨

  class CoffeeMaker {
  private static BEANS_GRAMM_PER_SHOT:number = 7; // 1샷 당 커피 중량 class level
  private coffeeBeans:number = 0; // 커피콩 // insatance(obj) level

  // constructor()
  // obj를 만들어냄
  private constructor(coffeBeans: number) {
    this.coffeeBeans = coffeBeans;
  }

  // 함수
  static makeMachine(coffeBeans: number):CoffeeMaker {
    return new CoffeeMaker(coffeBeans);
  }

  // 함수
  fillCoffeeBeans(beans: number) {
    if(beans < 0) {
      throw Error('value for beans should be greater than 0');
    }

    this.coffeeBeans += beans;
  }

  // 함수
  makeCoffee(shots: number): CofeeCup {
    // coffeeBeans가 shots보다 적을 때는 커피 못만드니 에러
    if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not Enough Coffee beans!')
    } 

    this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT; // 사용한 만큼 커피콩 줄임

    return {
      shots: shots,
      hasMilk:false
    } 
  }
}

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(10);
  // maker.coffeeBeans =-34; // 유효하지 않은 설정 -는 불가해야함
  
  console.log('1',maker)

}

