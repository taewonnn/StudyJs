// either: a or b
// L,R 두 개 타입을 같은 타입을 쓸 수도 다른 타입을 쓸 수 도 있음
// generic 타입은 보통  대문자 한글자로만 씀
interface Either<L, R> {
  left: () => L;
  right: () => R;
}



class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}


const either: Either<number, number> = new SimpleEither(4, 5);

either.left(); // 4
either.right(); //5

const best = new SimpleEither({name: 'ellie'}, 'hello'); // ellie hello
