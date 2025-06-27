// useMemo vs useCallback 정리

console.log('=== useMemo vs useCallback 차이점 ===');
console.log('useMemo: 계산된 값을 메모이제이션');
console.log('useCallback: 함수 자체를 메모이제이션');
console.log('');

// 메모이제이션 시뮬레이션
let memoCache = new Map();
let callbackCache = new Map();

function simulateUseMemo(factory, deps, id) {
  const depsString = JSON.stringify(deps);
  const cacheKey = `${id}-${depsString}`;

  if (memoCache.has(cacheKey)) {
    console.log(`  📦 useMemo 캐시 히트! (${id})`);
    return memoCache.get(cacheKey);
  }

  console.log(`  🔄 useMemo 새로 계산 (${id})`);
  const result = factory();
  memoCache.set(cacheKey, result);
  return result;
}

function simulateUseCallback(callback, deps, id) {
  const depsString = JSON.stringify(deps);
  const cacheKey = `${id}-${depsString}`;

  if (callbackCache.has(cacheKey)) {
    console.log(`  📦 useCallback 캐시 히트! (${id})`);
    return callbackCache.get(cacheKey);
  }

  console.log(`  🔄 useCallback 새 함수 생성 (${id})`);
  callbackCache.set(cacheKey, callback);
  return callback;
}

console.log('\n=== 1. useMemo 예시: 무거운 계산 ===');

function expensiveCalculation(num) {
  console.log('    💻 무거운 계산 실행중...');
  let result = 0;
  for (let i = 0; i < num; i++) {
    result += Math.sqrt(i);
  }
  return result;
}

// React 컴포넌트 시뮬레이션
function ComponentWithUseMemo(count, name) {
  console.log(`\n--- ComponentWithUseMemo 렌더링 (count: ${count}, name: ${name}) ---`);

  // useMemo 없이 - 매번 계산
  console.log('  useMemo 없이:');
  const expensiveValue1 = expensiveCalculation(count);

  // useMemo 사용 - count가 바뀔 때만 계산
  console.log('  useMemo 사용:');
  const expensiveValue2 = simulateUseMemo(() => expensiveCalculation(count), [count], 'expensive');

  return { expensiveValue1, expensiveValue2 };
}

// 테스트: count는 같고 name만 바뀜
ComponentWithUseMemo(1000, 'John');
ComponentWithUseMemo(1000, 'Jane'); // count가 같으니 useMemo는 캐시 사용!

console.log('\n=== 2. useCallback 예시: 함수 메모이제이션 ===');

// React 컴포넌트 시뮬레이션
function ComponentWithUseCallback(count, userId) {
  console.log(`\n--- ComponentWithUseCallback 렌더링 (count: ${count}, userId: ${userId}) ---`);

  // useCallback 없이 - 매번 새 함수
  console.log('  useCallback 없이:');
  const handleClick1 = function () {
    console.log(`clicked with count: ${count}`);
  };

  // useCallback 사용 - count가 바뀔 때만 새 함수
  console.log('  useCallback 사용:');
  const handleClick2 = simulateUseCallback(
    function () {
      console.log(`clicked with count: ${count}`);
    },
    [count],
    'handleClick',
  );

  return { handleClick1, handleClick2 };
}

// 테스트: count는 같고 userId만 바뀜
const result1 = ComponentWithUseCallback(5, 'user1');
const result2 = ComponentWithUseCallback(5, 'user2'); // count가 같으니 useCallback은 캐시 사용!

console.log('함수 참조 비교:');
console.log('  handleClick1 같음?', result1.handleClick1 === result2.handleClick1); // false
console.log('  handleClick2 같음?', result1.handleClick2 === result2.handleClick2); // true (캐시)

console.log('\n=== 3. 실제 React 코드 예시 ===');
console.log(`
// 🔥 useMemo 사용 예시
function ExpensiveComponent({ items, filter }) {
  // items를 필터링하고 정렬하는 무거운 작업
  const filteredItems = useMemo(() => {
    console.log('필터링 계산 중...');
    return items
      .filter(item => item.category === filter)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [items, filter]); // items나 filter가 바뀔 때만 재계산
  
  const totalPrice = useMemo(() => {
    console.log('총합 계산 중...');
    return filteredItems.reduce((sum, item) => sum + item.price, 0);
  }, [filteredItems]); // filteredItems가 바뀔 때만 재계산
  
  return (
    <div>
      <p>총 {filteredItems.length}개 상품</p>
      <p>총 가격: {totalPrice}원</p>
      {filteredItems.map(item => <Item key={item.id} item={item} />)}
    </div>
  );
}

// 🔥 useCallback 사용 예시
function TodoApp({ todos }) {
  const [filter, setFilter] = useState('all');
  
  // 함수를 메모이제이션하여 자식 컴포넌트 불필요한 리렌더링 방지
  const handleToggle = useCallback((id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []); // 의존성이 없으므로 한 번만 생성
  
  const handleDelete = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);
  
  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);
  
  return (
    <div>
      <FilterButtons onFilterChange={handleFilterChange} />
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo}
          onToggle={handleToggle}  // 같은 함수 참조로 React.memo 최적화 가능
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

// React.memo와 함께 사용시 최적화 효과
const TodoItem = React.memo(({ todo, onToggle, onDelete }) => {
  console.log('TodoItem 렌더링:', todo.id);
  // onToggle, onDelete가 같은 참조면 리렌더링 안됨!
  
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onToggle(todo.id)}>토글</button>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  );
});
`);

console.log('\n=== 4. 언제 사용할까? ===');
console.log(`
📊 useMemo 사용 시기:
✅ 복잡한 계산 결과를 캐싱할 때
✅ 배열/객체 필터링, 정렬, 변환 등
✅ API 응답 데이터 가공
✅ 차트 데이터 계산
✅ 정규식 계산

예시:
const expensiveValue = useMemo(() => {
  return largeArray.filter(item => item.active)
                  .sort((a, b) => a.priority - b.priority)
                  .map(item => ({ ...item, formatted: formatData(item) }));
}, [largeArray]);

🔧 useCallback 사용 시기:
✅ 자식 컴포넌트에 props로 함수 전달할 때
✅ useEffect의 의존성 배열에 함수가 들어갈 때
✅ 커스텀 훅에서 함수 반환할 때
✅ 이벤트 핸들러 최적화

예시:
const handleSubmit = useCallback((data) => {
  api.submitForm(data);
}, []);

// 자식에게 전달
<ChildComponent onSubmit={handleSubmit} />
`);

console.log('\n=== 5. 주의사항과 팁 ===');
console.log(`
⚠️  주의사항:
1. 과도한 사용은 오히려 성능 저하
   - 메모이제이션 자체도 비용이 듦
   - 간단한 계산은 그냥 하는게 나을 수 있음

2. 의존성 배열 정확히 설정
   - 빼먹으면 버그 발생
   - 너무 많으면 효과 없음

3. 참조 타입 의존성 주의
   - 객체/배열이 의존성에 있으면 매번 새로 생성될 수 있음

💡 최적화 팁:
1. React DevTools Profiler로 측정 후 적용
2. React.memo와 함께 사용하면 더 효과적
3. 복잡한 계산이나 자주 호출되는 함수에만 적용
4. 의존성 배열은 ESLint 규칙 활용
`);

console.log('\n=== 6. 핵심 차이점 정리 ===');
console.log('useMemo:');
console.log('  - 값을 메모이제이션');
console.log('  - 계산 결과를 캐싱');
console.log('  - 무거운 연산 최적화');
console.log('  - const value = useMemo(() => calculation(), [deps])');
console.log('');
console.log('useCallback:');
console.log('  - 함수를 메모이제이션');
console.log('  - 함수 참조를 캐싱');
console.log('  - 자식 컴포넌트 리렌더링 방지');
console.log('  - const func = useCallback(() => {}, [deps])');

console.log('\n결론: 값 캐싱은 useMemo, 함수 캐싱은 useCallback! 🚀');
