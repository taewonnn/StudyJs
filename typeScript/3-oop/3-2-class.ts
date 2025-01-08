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


  // class 개선
  class CoffeeMaker {

  // 클래스의 멤버 변수는 let / const 필요X
  // 아래 변수를 밑에 함수에서 사용할 때는 this.~~으로 사용

  // static -> class level -> Class가 생성될 떄마다 생성하지 않음
  // 클래스의 인스턴스에 속하는 것이 아니라, 클래스 자체에 속한다.
  // 인스턴스 생성 없이도 바로 클래스이름.멤버 형식으로 접근 가능하다.

  static BEANS_GRAMM_PER_SHOT:number = 7; // 1샷 당 커피 중량
  coffeeBeans:number = 0; // 커피콩

  // constructor()
  // obj를 만들어냄
  constructor(coffeBeans: number) {
    this.coffeeBeans = coffeBeans;
  }

  // 함수
  static makeMachine(coffeBeans: number):CoffeeMaker {
    return new CoffeeMaker(coffeBeans);
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

  const maker = new CoffeeMaker(32);
  console.log('1',maker)

  const maker2 = new CoffeeMaker(14);
  console.log('2',maker2)

  const maker3 = CoffeeMaker.makeMachine(3);
  console.log('3',maker3 )


  // Ex. 
  // const math = new Math()하지 않고도 아래 메서드 사용할 수 있는 이유 
  // class level이라 obj 생성하지 않고도 바로 호출해서 사용
  Math.abs
  Math.PI
}

