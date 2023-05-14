// switch


// 가장 기본적인 조건문은 if
// 하지만 조건식에서 비교할 값이 많다면 코드가 길어지고 가독성이 떨어진다는 단점 => 이럴 땐 switch를 사용하는 것이 좋습니다.


// 1을 입력하면 'First'를, 2를 입력하면 'Second'를, 3을 입력하면 'Third'를, 이외의 값을 입력했다면 'You did not input 1 or 2 or 3.'을 출력하는 예제입니다.

// switch ( 변수 )
// {
//   case 상수1 :     //변수 = 상수1 이면, 실행문 A 실행
//     실행문 A
//     break;     //swtich { } 코드 블록 탈출
//
//   case 상수2 :     //변수 != 상수1 이고, 변수 = 상수2 이면, 실행문 B 실행
//     실행문 B
//     break;     //swtich { } 코드 블록 탈출
//
//   default :    //변수 != 상수1 이고, 변수 != 상수2 이면, 실행문 C 실행
//     실행문 C
//
// }


// switch ()의 괄호 사이에는 자유롭게 데이터가 올 수 있습니다.
// 하지만 case 뒤에는 변수, 조건식 등을 사용할 수 없습니다. 아래 예제는 switch 조건문이 작동되지 않습니다.




const fingersOut = 2;

switch (fingersOut) {
  // 순서 상관없음
  case 2:
    console.log('가위');
    break;
  case 0:
    console.log('바위');
    break;
  case 5:
    console.log('보');
    break;
  default:
    console.log('무효');
}


// default: 맨 아래 작성, break되지 않은 이상 무조건 실행




// 조건문 Conditional Statement
// switch
// if else if else if else if ... else
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 10; // 0:월요일, 1: 화요일... 6: 일요일
let dayName;
if (day === 0) {
  dayName = '월요일';
} else if (day === 1) {
  dayName = '화요일';
} else if (day === 2) {
  dayName = '수요일';
} else if (day === 3) {
  dayName = '목요일';
} else if (day === 4) {
  dayName = '금요일';
} else if (day === 5) {
  dayName = '토요일';
} else if (day === 6) {
  dayName = '일요일';
}

switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    console.log('해당하는 요일이 없음!');
}
console.log(dayName);

let condition = 'bad'; // okay, good  -> 좋음!, bad -> 나쁨!
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음!';
    break;
  case 'bad':
    text = '나쁨!';
    break;
}
console.log(text);


