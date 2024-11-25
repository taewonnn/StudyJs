// generic


{

  // item이 null인지 확인하는 함수 
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }

    // null이 아닌 경우 arg 리턴
    return arg;
  }

  console.log(checkNotNullBad(123)) // 123
  console.log(checkNotNullBad(null)) // not valid number!

  



  // item이 어떤 type인지 모두 확인해주는 함수(any라 안전하지 않음)
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);



  // genetic -> 통상적인 / 일반적인 
  // 어떤 인자를 전달하든 Null이 아닌 경우는 모두 return
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}



