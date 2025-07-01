// Virtual DOM 초간단 설명 - 비유로 이해하기

console.log('=== Virtual DOM 쉬운 비유 ===');
console.log('📝 집 리모델링 비유로 이해해보자!');
console.log('');

console.log('🏠 상황: 집을 리모델링하려고 합니다');
console.log('');

console.log('--- 기존 방식 (Virtual DOM 없이) ---');
console.log('💸 문제점:');
console.log('1. 벽지 바꾸고 싶어서 → 바로 벽에 새 벽지 붙임');
console.log('2. 소파 색깔 바꾸고 싶어서 → 바로 소파 교체');
console.log('3. 조명 바꾸고 싶어서 → 바로 조명 교체');
console.log('4. 커튼 바꾸고 싶어서 → 바로 커튼 교체');
console.log('');
console.log('결과: 매번 실제 공사 → 비싸고 오래 걸림 😱');

console.log('\n--- React 방식 (Virtual DOM 사용) ---');
console.log('💡 해결책:');
console.log('1. 먼저 종이에 설계도 그림 (Virtual DOM)');
console.log('2. 기존 설계도와 새 설계도 비교');
console.log('3. 바뀐 부분만 찾아냄');
console.log('4. 바뀐 부분만 실제로 공사');
console.log('');
console.log('결과: 필요한 부분만 공사 → 빠르고 효율적 😊');

console.log('\n=== 실제 예시로 보기 ===');

// 웹페이지 상태
let 현재페이지 = {
  제목: '안녕하세요',
  카운터: 0,
  색깔: 'blue',
};

console.log('\n--- 기존 방식 시뮬레이션 ---');
console.log('💻 웹페이지에서 카운터 버튼 클릭!');

function 기존방식_업데이트() {
  현재페이지.카운터++;
  현재페이지.색깔 = 현재페이지.카운터 % 2 === 0 ? 'blue' : 'red';

  console.log(`🔄 DOM 직접 조작:`);
  console.log(`   document.getElementById('title').innerText = "${현재페이지.제목}"`);
  console.log(`   document.getElementById('counter').innerText = "${현재페이지.카운터}"`);
  console.log(`   document.getElementById('box').style.color = "${현재페이지.색깔}"`);
  console.log(`   → 3개 DOM 요소 모두 업데이트! (비효율적)`);
}

기존방식_업데이트();

console.log('\n--- React 방식 시뮬레이션 ---');
console.log('💻 같은 상황, 하지만 Virtual DOM 사용!');

// 가상 DOM (그냥 JavaScript 객체)
let 이전가상돔 = {
  title: '안녕하세요',
  counter: 0,
  color: 'blue',
};

function React방식_업데이트() {
  현재페이지.카운터++;
  현재페이지.색깔 = 현재페이지.카운터 % 2 === 0 ? 'blue' : 'red';

  // 새로운 가상 DOM 생성 (메모리에서)
  let 새가상돔 = {
    title: '안녕하세요',
    counter: 현재페이지.카운터,
    color: 현재페이지.색깔,
  };

  console.log(`🧠 Virtual DOM 비교:`);
  console.log(
    `   이전: title="${이전가상돔.title}", counter=${이전가상돔.counter}, color="${이전가상돔.color}"`,
  );
  console.log(
    `   현재: title="${새가상돔.title}", counter=${새가상돔.counter}, color="${새가상돔.color}"`,
  );

  console.log(`🔍 차이점 찾기:`);
  if (이전가상돔.title !== 새가상돔.title) {
    console.log(`   ✏️  title 변경됨 → DOM 업데이트 필요`);
  } else {
    console.log(`   ✅ title 그대로 → DOM 건드리지 않음`);
  }

  if (이전가상돔.counter !== 새가상돔.counter) {
    console.log(`   ✏️  counter 변경됨 → DOM 업데이트 필요`);
  }

  if (이전가상돔.color !== 새가상돔.color) {
    console.log(`   ✏️  color 변경됨 → DOM 업데이트 필요`);
  }

  console.log(`🎯 실제 DOM 업데이트:`);
  console.log(`   document.getElementById('counter').innerText = "${새가상돔.counter}"`);
  console.log(`   document.getElementById('box').style.color = "${새가상돔.color}"`);
  console.log(`   → title은 안 바뀌었으니 건드리지 않음! (효율적)`);

  이전가상돔 = 새가상돔;
}

React방식_업데이트();

console.log('\n=== 핵심 정리 ===');
console.log('');
console.log('🤔 Virtual DOM이 뭐야?');
console.log('   → 실제 DOM의 복사본을 메모리에 저장한 것');
console.log('   → 그냥 JavaScript 객체임!');
console.log('');
console.log('🤔 왜 쓰는데?');
console.log('   → 실제 DOM 조작은 느려서');
console.log('   → 메모리에서 미리 비교하고 꼭 필요한 것만 업데이트');
console.log('');
console.log('🤔 어떻게 동작해?');
console.log('   1. 상태 바뀜');
console.log('   2. 새로운 Virtual DOM 만듦 (빠름)');
console.log('   3. 이전 Virtual DOM과 비교 (빠름)');
console.log('   4. 바뀐 부분만 실제 DOM 업데이트 (최소화)');

console.log('\n=== 실생활 비유 ===');
console.log('');
console.log('📱 카톡 메시지 예시:');
console.log('   기존: 메시지 하나 올 때마다 전체 채팅방 새로고침');
console.log('   React: 새 메시지만 추가하고 나머지는 그대로');
console.log('');
console.log('🛒 쇼핑몰 예시:');
console.log('   기존: 상품 하나 찜할 때마다 전체 페이지 새로고침');
console.log('   React: 찜 버튼만 색깔 바뀌고 나머지는 그대로');

console.log('\n=== 면접 답변 템플릿 ===');
console.log('');
console.log('Q: Virtual DOM이 뭔가요?');
console.log('A: 실제 DOM의 가벼운 복사본을 메모리에 저장한 JavaScript 객체입니다.');
console.log('');
console.log('Q: 왜 사용하나요?');
console.log('A: 실제 DOM 조작은 비싸니까, 메모리에서 미리 비교해서');
console.log('   꼭 필요한 부분만 업데이트해서 성능을 향상시킵니다.');
console.log('');
console.log('Q: 어떻게 동작하나요?');
console.log('A: 상태가 바뀌면 새 Virtual DOM을 만들고, 이전 것과 비교해서');
console.log('   (이걸 Diffing이라고 함) 바뀐 부분만 실제 DOM에 반영합니다.');

console.log('\n✨ 이제 이해되셨나요? ✨');
