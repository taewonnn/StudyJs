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



