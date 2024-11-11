{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const frunuts1: Array<string> = ['🍅', '🍌'];
  const scroes1: number[] = [1, 3, 4];
  const scroes: Array<number> = [1, 3, 4];

  // 변경 불가 fruits 배열은 변경 불가(추가포함) => readonly 추가
  function printArray(fruits: readonly string[]) {}

  // Tuple 서로다른 타입의 데이터를 담을 수 있는 배열 
  // -> interface, type alias, class  - 서로다른 타입의 데이터를 담을 수 있음
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
