{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scroes1: number[] = [1, 3, 4];
  const scroes: Array<number> = [1, 3, 4];
  // 변경 불가 fruits 배열은 변경 불가(추가포함)
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
