// Dom

// ⭐ 브라우저에서 document는 전역 객체의 프로퍼티임
console.log(
  document === window.document,
  document === globalThis.document
);


// document 내에 html 태그 요소를 선택하는 코드
const html = document.querySelector('html');

console.log(html); // DOM 형태로 출력


function getNameAndChildren (node, indent) {
  console.log(
    '  '.repeat(indent), // 인덴트
    node.nodeName, // 노드 이름

    // ⭐ 아래를 차례로 로깅해볼 것
    // node.children, // 이터러블임 확인
    // Object.getPrototypeOf(node),
  );

  for (child of node.children) {
    getNameAndChildren(child, indent + 1);
  }
}

getNameAndChildren(html, 0);
