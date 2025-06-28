// useMemo vs useCallback

console.log('=== 초간단 비유 ===');
console.log('useMemo = 계산기 결과를 메모지에 적어두기');
console.log('useCallback = 자주 쓰는 전화번호를 저장해두기');
console.log('');

console.log('=== 1. useMemo: 값 저장 ===');
console.log('문제: 1+1+1+1+1... 을 매번 계산하기 귀찮음');
console.log('해결: 한 번 계산하고 결과를 적어둠 → 다음엔 바로 봄');
console.log('');

// 무거운 계산 시뮬레이션
function 무거운계산(숫자) {
  console.log(`  🔄 ${숫자}까지 더하는 중...`);
  let 결과 = 0;
  for (let i = 1; i <= 숫자; i++) {
    결과 += i;
  }
  return 결과;
}

// 캐시 저장소
let 값캐시 = {};

function useMemo시뮬레이션(계산함수, 의존성값) {
  const 키 = JSON.stringify(의존성값);

  if (값캐시[키]) {
    console.log('  📦 캐시에서 가져옴!');
    return 값캐시[키];
  }

  const 결과 = 계산함수();
  값캐시[키] = 결과;
  return 결과;
}

console.log('--- useMemo 테스트 ---');
// 첫 번째: 계산함
const 결과1 = useMemo시뮬레이션(() => 무거운계산(100), [100]);
console.log('결과1:', 결과1);

// 두 번째: 같은 값이면 캐시에서 가져옴
const 결과2 = useMemo시뮬레이션(() => 무거운계산(100), [100]);
console.log('결과2:', 결과2);

// 세 번째: 다른 값이면 다시 계산
const 결과3 = useMemo시뮬레이션(() => 무거운계산(200), [200]);
console.log('결과3:', 결과3);

console.log('\n=== 2. useCallback: 함수 저장 ===');
console.log('문제: 함수를 매번 새로 만들면 자식이 계속 리렌더링됨');
console.log('해결: 함수를 저장해두고 재사용');
console.log('');

// 함수 캐시 저장소
let 함수캐시 = {};

function useCallback시뮬레이션(함수, 의존성값) {
  const 키 = JSON.stringify(의존성값);

  if (함수캐시[키]) {
    console.log('  📦 저장된 함수 재사용!');
    return 함수캐시[키];
  }

  console.log('  🔄 새 함수 생성');
  함수캐시[키] = 함수;
  return 함수;
}

console.log('--- useCallback 테스트 ---');
// 첫 번째: 함수 생성
const 클릭함수1 = useCallback시뮬레이션(function () {
  console.log('클릭!');
}, []);
console.log('함수1 생성됨');

// 두 번째: 같은 의존성이면 저장된 함수 재사용
const 클릭함수2 = useCallback시뮬레이션(function () {
  console.log('클릭!');
}, []);
console.log('함수2 가져옴');

// 함수가 같은지 확인
console.log('같은 함수인가?', 클릭함수1 === 클릭함수2);

console.log('\n=== 3. 실제 React에서는 이렇게 ===');
console.log(`
// useMemo: 값을 저장
function Component({ 긴배열 }) {
  // 배열을 정렬하는 무거운 작업
  const 정렬된배열 = useMemo(() => {
    return 긴배열.sort();
  }, [긴배열]); // 긴배열이 바뀔 때만 다시 정렬
  
  return <div>{정렬된배열.map(...)}</div>;
}

// useCallback: 함수를 저장
function 부모컴포넌트() {
  const [카운트, set카운트] = useState(0);
  
  // 이 함수를 저장해둠
  const 클릭핸들러 = useCallback(() => {
    set카운트(prev => prev + 1);
  }, []); // 의존성이 없으니 한 번만 만들어짐
  
  return <자식컴포넌트 onClick={클릭핸들러} />;
}
`);

console.log('\n=== 4. 언제 쓸까? ===');
console.log(`
🔴 useMemo 쓸 때:
- 배열 정렬, 필터링 등 계산이 무거울 때
- API 데이터 가공할 때
- 복잡한 수학 계산할 때

🔵 useCallback 쓸 때:
- 자식한테 함수 넘겨줄 때
- 함수가 자주 바뀌면 안 될 때
`);

console.log('\n=== 5. 핵심만 기억하자! ===');
console.log('🎯 useMemo = 계산한 값을 저장 (값 캐싱)');
console.log('🎯 useCallback = 만든 함수를 저장 (함수 캐싱)');
console.log('🎯 둘 다 불필요한 재계산/재생성을 막아서 성능 향상!');

console.log('\n✨ 끝! 이것만 알면 충분해요 ✨');
