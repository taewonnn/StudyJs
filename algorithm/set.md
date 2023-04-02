집합 선언
const setA = new Set([1,2,3,4,5,6,7,8]); // array => set 으로 변환 (알아서 중복제거 됨)
const setB = new Set([3,4,5,6,7]);

합집합
const union = new Set([...setA, ...setB]); // set => array spread syntax 사용

교집합
const intersection = new Set([...setA].filter(x => setB.has(x))); // 둘 다 있는 것들을 솎아낸다.

차집합 (A-B / B-A /합집합-교집합)
const difference1 = new Set([...setA].filter(x => !setB.has(x))); // set1 - set2
const difference2 = new Set([...setB].filter(x => !setA.has(x))); // set2 - set1
const symmetricDifference = new Set([...difference1, ...difference2]); // union - intersection