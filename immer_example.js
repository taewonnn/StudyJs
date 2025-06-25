// Immer 사용 예시

console.log('=== Immer란? ===');
console.log('복잡한 불변성 관리를 쉽게 해주는 라이브러리');
console.log('npm install immer 로 설치');
console.log('');

// immer 시뮬레이션 (실제로는 immer를 써야 함)
function simulateImmer(baseState, updater) {
  // 실제 immer는 훨씬 복잡하고 최적화되어 있음
  const draft = JSON.parse(JSON.stringify(baseState)); // 깊은 복사
  updater(draft);
  return draft;
}

console.log('=== 1. 왜 Immer를 쓸까? ===');
const user = { name: 'John', age: 25, city: 'Seoul' };

// 기존 방식: 간단한 객체는 괜찮음
const newUser1 = { ...user, age: 26 };
console.log('기존 방식:', newUser1);

// Immer 방식: 직관적
const newUser2 = simulateImmer(user, draft => {
  draft.age = 26; // 마치 직접 수정하는 것처럼!
});
console.log('Immer 방식:', newUser2);
console.log('원본 보존:', user);

console.log('\n=== 2. 진짜 위력: 복잡한 중첩 객체 ===');
const complexState = {
  user: {
    profile: {
      personal: {
        name: 'John',
        address: {
          city: 'Seoul',
          street: 'Gangnam-gu',
        },
      },
    },
  },
  posts: [
    { id: 1, title: 'Hello', likes: 5 },
    { id: 2, title: 'World', likes: 3 },
  ],
};

console.log('\n--- 기존 방식 (지옥 😱) ---');
const newComplexState1 = {
  ...complexState,
  user: {
    ...complexState.user,
    profile: {
      ...complexState.user.profile,
      personal: {
        ...complexState.user.profile.personal,
        address: {
          ...complexState.user.profile.personal.address,
          city: 'Busan', // 이 한 줄 바꾸려고 이 난리...
        },
      },
    },
  },
  posts: complexState.posts.map(post =>
    post.id === 1 ? { ...post, likes: post.likes + 1 } : post,
  ),
};

console.log('\n--- Immer 방식 (천국 😇) ---');
const newComplexState2 = simulateImmer(complexState, draft => {
  // 마치 원본을 직접 수정하는 것처럼 간단!
  draft.user.profile.personal.address.city = 'Busan';
  draft.posts.find(post => post.id === 1).likes += 1;
});

console.log('복잡한 업데이트 결과 비교:');
console.log('기존 방식 결과:', newComplexState1.user.profile.personal.address.city);
console.log('Immer 방식 결과:', newComplexState2.user.profile.personal.address.city);
console.log('원본은 그대로:', complexState.user.profile.personal.address.city);

console.log('\n=== 3. 배열 조작도 쉬워짐 ===');
const todos = [
  { id: 1, text: '공부하기', done: false },
  { id: 2, text: '운동하기', done: true },
];

// 기존 방식: 새 할일 추가
const addedTodos1 = [...todos, { id: 3, text: '책읽기', done: false }];

// Immer 방식: 더 직관적
const addedTodos2 = simulateImmer(todos, draft => {
  draft.push({ id: 3, text: '책읽기', done: false });
});

// 기존 방식: 할일 상태 변경
const updatedTodos1 = todos.map(todo => (todo.id === 1 ? { ...todo, done: true } : todo));

// Immer 방식: 훨씬 간단
const updatedTodos2 = simulateImmer(todos, draft => {
  const todo = draft.find(t => t.id === 1);
  if (todo) {
    todo.done = true;
  }
});

console.log('원본 todos:', todos);
console.log('Immer로 추가:', addedTodos2);
console.log('Immer로 업데이트:', updatedTodos2);

console.log('\n=== 4. React에서 실제 사용법 ===');
console.log(`
// 1. 설치
npm install immer

// 2. import
import { produce } from 'immer';

// 3. useState와 함께 사용
function TodoApp() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => {
    setTodos(produce(draft => {
      draft.push({
        id: Date.now(),
        text,
        done: false
      });
    }));
  };
  
  const toggleTodo = (id) => {
    setTodos(produce(draft => {
      const todo = draft.find(t => t.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
    }));
  };
}

// 복잡한 상태도 쉽게!
const updateUserAddress = () => {
  setState(produce(draft => {
    draft.user.profile.address.city = 'Busan';
    draft.user.profile.address.street = 'Haeundae';
  }));
};
`);

console.log('\n=== 5. Immer의 핵심 장점 ===');
console.log('✅ 불변성 자동 보장');
console.log('✅ 직관적인 코드 (마치 직접 수정하는 것처럼)');
console.log('✅ 복잡한 중첩 객체도 쉽게 처리');
console.log('✅ 성능 최적화 (실제로는 필요한 부분만 복사)');
console.log('✅ 타입스크립트 완벽 지원');

console.log('\n=== 결론 ===');
console.log('React에서 복잡한 상태 관리할 때 Immer 쓰면');
console.log('코드도 깔끔하고 실수도 줄어들고 개발이 편해집니다! 🚀');
