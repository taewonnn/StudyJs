// useCallback이 필요한 이유 - 실제 문제 상황

console.log('=== 문제 상황: 자식이 계속 리렌더링됨 ===');

// React 컴포넌트 시뮬레이션
let 렌더링횟수 = 0;

// 자식 컴포넌트 (React.memo로 최적화되어 있다고 가정)
function 자식컴포넌트(props) {
  렌더링횟수++;
  console.log(`  👶 자식 컴포넌트 렌더링됨! (${렌더링횟수}번째)`);
  console.log(`     받은 함수:`, props.onClick.toString().slice(0, 30) + '...');
  return `자식 컴포넌트 (버튼)`;
}

function 자식컴포넌트_메모화(props) {
  // React.memo처럼 동작: props가 같으면 리렌더링 안함
  if (자식컴포넌트_메모화.이전Props && 자식컴포넌트_메모화.이전Props.onClick === props.onClick) {
    console.log(`  😴 자식 컴포넌트 리렌더링 안함 (props가 같음)`);
    return 자식컴포넌트_메모화.이전결과;
  }

  자식컴포넌트_메모화.이전Props = props;
  const 결과 = 자식컴포넌트(props);
  자식컴포넌트_메모화.이전결과 = 결과;
  return 결과;
}

console.log('\n--- 1. 문제: useCallback 없이 ---');
렌더링횟수 = 0;

function 부모컴포넌트_문제버전(count) {
  console.log(`\n🏠 부모 컴포넌트 렌더링 (count: ${count})`);

  // 매번 새로운 함수 생성! 😱
  const handleClick = function () {
    console.log(`클릭됨! count는 ${count}`);
  };

  console.log('  새로 만든 함수:', handleClick.toString().slice(0, 30) + '...');

  // 자식에게 함수 전달
  return 자식컴포넌트_메모화({ onClick: handleClick });
}

// 테스트: count가 바뀌지 않아도 매번 새 함수라서 자식이 리렌더링됨
부모컴포넌트_문제버전(1);
부모컴포넌트_문제버전(1); // count 같음에도 자식이 리렌더링!
부모컴포넌트_문제버전(1); // 또 리렌더링!

console.log('\n--- 2. 해결: useCallback 사용 ---');
렌더링횟수 = 0;
자식컴포넌트_메모화.이전Props = null; // 캐시 초기화

// useCallback 시뮬레이션
let 함수캐시 = new Map();

function useCallback시뮬레이션(함수, 의존성배열) {
  const key = JSON.stringify(의존성배열);

  if (함수캐시.has(key)) {
    console.log('  📦 useCallback: 저장된 함수 재사용!');
    return 함수캐시.get(key);
  }

  console.log('  🔄 useCallback: 새 함수 생성');
  함수캐시.set(key, 함수);
  return 함수;
}

function 부모컴포넌트_해결버전(count) {
  console.log(`\n🏠 부모 컴포넌트 렌더링 (count: ${count})`);

  // count가 같으면 같은 함수 재사용! 😊
  const handleClick = useCallback시뮬레이션(
    function () {
      console.log(`클릭됨! count는 ${count}`);
    },
    [count], // count가 바뀔 때만 새 함수 생성
  );

  // 자식에게 함수 전달
  return 자식컴포넌트_메모화({ onClick: handleClick });
}

// 테스트: count가 같으면 같은 함수라서 자식이 리렌더링 안됨!
부모컴포넌트_해결버전(1);
부모컴포넌트_해결버전(1); // count 같음 → 같은 함수 → 자식 리렌더링 안됨!
부모컴포넌트_해결버전(1); // 또 안됨!
부모컴포넌트_해결버전(2); // count 다름 → 새 함수 → 자식 리렌더링됨

console.log('\n=== 실제 상황 예시 ===');
console.log(`
문제 상황:
📱 할일 앱이 있어요
📝 할일 목록에 100개 아이템이 있어요
🔢 위에 카운터가 있어서 1초마다 +1 됩니다

❌ useCallback 없으면:
- 카운터가 바뀔 때마다 부모 리렌더링
- 부모가 자식들에게 새로운 함수들 전달
- 100개 자식 모두 리렌더링
- 앱이 버벅거림 😱

✅ useCallback 있으면:
- 카운터가 바뀌어도 함수는 그대로
- 자식들이 리렌더링 안됨
- 앱이 부드러움 😊
`);

console.log('\n=== 언제 useCallback 쓸까? ===');
console.log(`
🎯 이런 경우에 쓰세요:

1. 자식에게 함수 넘길 때
   function 부모() {
     const 핸들러 = useCallback(() => {}, []);
     return <자식 onClick={핸들러} />; // 이거!
   }

2. React.memo 쓴 자식이 있을 때
   const 자식 = React.memo(() => <div>...</div>);
   // 이 자식에게 함수 주려면 useCallback 필수!

3. 함수가 의존성 배열에 들어갈 때
   useEffect(() => {
     함수호출();
   }, [함수]); // 이 함수가 계속 바뀌면 useEffect 계속 실행됨
`);

console.log('\n=== 간단 정리 ===');
console.log('🔥 문제: 함수가 계속 새로 만들어져서 자식이 계속 리렌더링됨');
console.log('💡 해결: useCallback으로 함수를 저장해서 재사용');
console.log('🎯 결과: 불필요한 리렌더링 방지 → 성능 향상!');

console.log('\n✨ 이제 이해되시나요? ✨');
