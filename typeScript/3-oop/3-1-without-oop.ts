{
  type CofeeCup = {
    shots: number;
    hasMilk:boolean;
  }

  let BEANS_GRAMM_PER_SHOT:number = 1; // 1샷 당 커피 중량
  let coffeeBeans:number = 0; // 커피콩

  function makeCoffee(shots: number): CofeeCup {
    // coffeeBeans가 shots보다 적을 때는 커피 못만드니 에러
    if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not Enough Coffee beans!')
    } 

    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT; // 사용한 만큼 커피콩 줄임

    return {
      shots: shots,
      hasMilk:false
    } 
  }

  coffeeBeans+=4;
  const coffee = makeCoffee(2);
  console.log(coffee);
}