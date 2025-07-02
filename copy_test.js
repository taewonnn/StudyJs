// 얕은 복사 vs 깊은 복사 테스트

console.log('=== 1. 단순 객체 (1단계 깊이) ===');
const user = { name: 'John', age: 25 };

const newUser = { ...user, age: 26 };

console.log('원본:', user); // 원본: { name: 'John', age: 25 }
console.log('복사본:', newUser); // 복사본: { name: 'John', age: 26 }
console.log('참조 같음?', user === newUser); // 참조 같음? false

console.log('\n=== 2. 중첩 객체 (2단계 이상 깊이) ===');
const complexUser = {
  name: 'John',
  age: 25,
  profile: {
    email: 'john@example.com',
    address: {
      city: 'Seoul',
      street: 'Gangnam-gu',
    },
  },
  hobbies: ['reading', 'gaming'],
};

// 얕은 복사
const shallowCopy = { ...complexUser, age: 26 };

console.log('원본 complexUser:', complexUser); // 원본 age는 안바뀜
console.log('얕은 복사본:', shallowCopy);

console.log('\n=== 3. 문제 발생! 중첩 객체 수정 ===');

console.log('중첩 객체 참조 비교:');
console.log('profile 같음?', complexUser.profile === shallowCopy.profile); // true!
console.log('address 같음?', complexUser.profile.address === shallowCopy.profile.address); // true!
console.log('hobbies 같음?', complexUser.hobbies === shallowCopy.hobbies); // true!

// 복사본의 중첩 객체를 수정해보자
shallowCopy.profile.email = 'jane@example.com';
shallowCopy.profile.address.city = 'Busan';
shallowCopy.hobbies.push('swimming');

console.log('\n=== 4. 원본도 함께 변경됨! 😱 ===');
console.log('원본 email:', complexUser.profile.email); // 'jane@example.com' - 변경됨!
console.log('원본 city:', complexUser.profile.address.city); // 'Busan' - 변경됨!
console.log('원본 hobbies:', complexUser.hobbies); // ['reading', 'gaming', 'swimming'] - 변경됨!

console.log('\n=== 5. 진짜 깊은 복사 방법들 ===');

// 방법 1: JSON.parse(JSON.stringify()) - 함수, undefined, Symbol 등은 사라짐
const deepCopy1 = JSON.parse(JSON.stringify(complexUser));
deepCopy1.profile.email = 'deep1@example.com';
console.log('JSON 방식 후 원본 email:', complexUser.profile.email); // 원본 안 바뀜

// 방법 2: 수동으로 각 레벨 복사
const deepCopy2 = {
  ...complexUser,
  profile: {
    ...complexUser.profile,
    address: {
      ...complexUser.profile.address,
    },
  },
  hobbies: [...complexUser.hobbies],
};
deepCopy2.profile.email = 'deep2@example.com';
console.log('수동 복사 후 원본 email:', complexUser.profile.email); // 원본 안 바뀜

// 방법 3: structuredClone (최신 브라우저)
if (typeof structuredClone !== 'undefined') {
  const deepCopy3 = structuredClone(complexUser);
  deepCopy3.profile.email = 'deep3@example.com';
  console.log('structuredClone 후 원본 email:', complexUser.profile.email); // 원본 안 바뀜
}

console.log('\n=== 정리 ===');
console.log('스프레드 연산자 {...obj}:');
console.log('- 1단계: 새 객체 생성 ✅');
console.log('- 2단계 이상: 참조만 복사 ❌');
console.log('- 결론: 얕은 복사!');

console.log('\n=== 깊은 복사 방법들 ===');

const deepTestUser = {
  name: 'John',
  age: 25,
  address: {
    city: 'Seoul',
    details: {
      street: '강남대로',
      zipcode: '12345',
    },
  },
  hobbies: ['reading', 'coding'],
};

// 1. JSON.parse(JSON.stringify()) - 가장 간단하지만 한계 있음
console.log('\n--- 1. JSON 방법 (가장 흔한 방법) ---');
const jsonDeepCopy = JSON.parse(JSON.stringify(deepTestUser));
jsonDeepCopy.address.details.street = '테헤란로';
jsonDeepCopy.hobbies.push('gaming');

console.log('원본:', deepTestUser.address.details.street); // 강남대로 (안바뀜!)
console.log('깊은복사:', jsonDeepCopy.address.details.street); // 테헤란로
console.log('원본 hobbies:', deepTestUser.hobbies); // ['reading', 'coding'] (안바뀜!)
console.log('깊은복사 hobbies:', jsonDeepCopy.hobbies); // ['reading', 'coding', 'gaming']

// 2. structuredClone() - 최신 브라우저에서 지원
console.log('\n--- 2. structuredClone (최신 방법) ---');
if (typeof structuredClone !== 'undefined') {
  const structuredDeepCopy = structuredClone(deepTestUser);
  structuredDeepCopy.address.city = 'Busan';

  console.log('원본 city:', deepTestUser.address.city); // Seoul (안바뀜!)
  console.log('structuredClone city:', structuredDeepCopy.address.city); // Busan
} else {
  console.log('structuredClone은 Node.js 17+ 또는 최신 브라우저에서 지원됩니다');
}

// 3. 재귀적으로 직접 구현
console.log('\n--- 3. 직접 구현한 깊은 복사 ---');
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }

  if (typeof obj === 'object') {
    const clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
}

const customDeepCopy = deepClone(deepTestUser);
customDeepCopy.address.details.zipcode = '54321';

console.log('원본 zipcode:', deepTestUser.address.details.zipcode); // 12345 (안바뀜!)
console.log('직접구현 zipcode:', customDeepCopy.address.details.zipcode); // 54321

console.log('\n=== JSON 방법의 한계 ===');
const objectWithFunction = {
  name: 'test',
  func: function () {
    return 'hello';
  },
  date: new Date(),
  undefined: undefined,
  symbol: Symbol('test'),
};

console.log('원본 객체:', objectWithFunction);
const jsonCopy = JSON.parse(JSON.stringify(objectWithFunction));
console.log('JSON 복사 후:', jsonCopy); // 함수, undefined, Symbol이 사라짐!

console.log('\n=== 각 방법의 특징 ===');
console.log('1. JSON 방법: 간단하지만 함수, Date, undefined, Symbol 등 손실');
console.log('2. structuredClone: 완벽하지만 최신 환경에서만 지원');
console.log('3. 직접 구현: 가장 세밀한 제어 가능, 하지만 복잡');
console.log('4. 라이브러리 (lodash cloneDeep): 가장 안정적, 하지만 외부 의존성');
