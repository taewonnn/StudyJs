// api 읽기

// https://github.com/microsoft/TypeScript/blob/main/src/lib/es5.d.ts
Array 
// cmd + click



type Student {
  passed: boolean;
}

cosnt students: Student[] = [{passed: true},{passed: true},{passed: false}];

const result = students.every(student => student.passed);

// 위와 동일
const rseult2 = students.every(student => {
  return student.passed; 
});
