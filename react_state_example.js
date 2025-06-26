// React에서 state를 직접 변경하면 안 되는 이유

console.log('=== React State 변경 원리 ===');

// React의 리렌더링 동작 시뮬레이션
function simulateReactRerender(prevState, newState) {
  console.log('React 내부 동작:');
  console.log('  이전 state 참조:', prevState);
  console.log('  새로운 state 참조:', newState);
  console.log('  참조가 같은가?', prevState === newState);

  if (prevState === newState) {
    console.log('  결과: 🚫 리렌더링 안함 (참조가 같음)');
    return false;
  } else {
    console.log('  결과: ✅ 리렌더링 함 (참조가 다름)');
    return true;
  }
}

console.log('\n=== 1. 잘못된 방법: 직접 변경 ===');
let state1 = { count: 0, user: { name: 'John' } };
const prevState1 = state1;

// 🚫 잘못된 방법: 직접 변경
state1.count = 1;
state1.user.name = 'Jane';

console.log('직접 변경 후:');
simulateReactRerender(prevState1, state1);
console.log('값은 변했지만:', state1);
console.log('');

console.log('\n=== 2. 올바른 방법: 새 객체 생성 ===');
let state2 = { count: 0, user: { name: 'John' } };
const prevState2 = state2;

// ✅ 올바른 방법: 새 객체 생성
state2 = { ...state2, count: 1 };

console.log('새 객체 생성 후:');
simulateReactRerender(prevState2, state2);
console.log('');

console.log('\n=== 3. 중첩 객체 잘못된 방법 ===');
let state3 = { count: 0, user: { name: 'John', age: 25 } };
const prevState3 = state3;

// 🚫 잘못된 방법: 얕은 복사 + 직접 변경
state3 = { ...state3 };
state3.user.name = 'Jane'; // 이건 여전히 같은 user 객체를 참조!

console.log('중첩 객체 잘못 변경:');
simulateReactRerender(prevState3, state3);
console.log('user 객체가 같은가?', prevState3.user === state3.user);
console.log('');

console.log('\n=== 4. 중첩 객체 올바른 방법 ===');
let state4 = { count: 0, user: { name: 'John', age: 25 } };
const prevState4 = state4;

// ✅ 올바른 방법: 중첩 객체도 새로 생성
state4 = {
  ...state4,
  user: {
    ...state4.user,
    name: 'Jane',
  },
};

console.log('중첩 객체 올바른 변경:');
simulateReactRerender(prevState4, state4);
console.log('user 객체가 같은가?', prevState4.user === state4.user);
console.log('');

console.log('\n=== 5. 배열 state 예시 ===');
let todoState = {
  todos: [
    { id: 1, text: '공부' },
    { id: 2, text: '운동' },
  ],
};
const prevTodoState = todoState;

// 🚫 잘못된 방법
// todoState.todos.push({ id: 3, text: '독서' });

// ✅ 올바른 방법
todoState = {
  ...todoState,
  todos: [...todoState.todos, { id: 3, text: '독서' }],
};

console.log('배열 state 변경:');
simulateReactRerender(prevTodoState, todoState);
console.log('todos 배열이 같은가?', prevTodoState.todos === todoState.todos);
console.log('');

console.log('\n=== 6. 실제 React 컴포넌트 예시 ===');
console.log(`
// 🚫 잘못된 방법
function BadComponent() {
  const [user, setUser] = useState({ name: 'John', age: 25 });
  
  const updateName = () => {
    user.name = 'Jane';  // 직접 변경 - 리렌더링 안됨!
    setUser(user);       // 같은 참조라서 React가 무시
  };
}

// ✅ 올바른 방법
function GoodComponent() {
  const [user, setUser] = useState({ name: 'John', age: 25 });
  
  const updateName = () => {
    setUser({ ...user, name: 'Jane' }); // 새 객체 생성 - 리렌더링됨!
  };
  
  // 또는 함수형 업데이트
  const updateAge = () => {
    setUser(prev => ({ ...prev, age: prev.age + 1 }));
  };
}

// Immer 사용하면 더 쉽게!
import { produce } from 'immer';

function ImmerComponent() {
  const [user, setUser] = useState({ name: 'John', age: 25 });
  
  const updateName = () => {
    setUser(produce(draft => {
      draft.name = 'Jane';  // 직접 변경하는 것 같지만 내부적으로 새 객체 생성!
    }));
  };
}
`);

console.log('\n=== 7. 핵심 원리 정리 ===');
console.log('React가 리렌더링을 결정하는 방법:');
console.log('1. setState가 호출됨');
console.log('2. 이전 state와 새 state의 참조를 비교 (===)');
console.log('3. 참조가 다르면 → 리렌더링 ✅');
console.log('4. 참조가 같으면 → 리렌더링 안함 🚫');
console.log('');
console.log('그래서:');
console.log('- 직접 변경: 같은 참조 → 리렌더링 안됨 → UI 업데이트 안됨');
console.log('- 새 객체: 다른 참조 → 리렌더링 됨 → UI 업데이트 됨');

console.log('\n=== 8. 추가 이유들 ===');
console.log('불변성을 지켜야 하는 다른 이유들:');
console.log('✅ 성능 최적화 (React.memo, useMemo 등)');
console.log('✅ 시간 여행 디버깅 가능');
console.log('✅ 상태 변화 추적 용이');
console.log('✅ 예측 가능한 데이터 플로우');
console.log('✅ 버그 발생 가능성 감소');

console.log('\n결론: React는 참조 비교로 리렌더링을 결정하기 때문에');
console.log('state를 직접 변경하면 안 되고, 항상 새로운 객체를 만들어야 합니다! 🚀');
