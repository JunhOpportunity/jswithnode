// Symbol : 유일한 키를 생성할 수 있음
const map = new Map();
const key1 = 'key';
const key2 = 'key';
map.set(key1, 'Hello'); // key2의 값도 Hello로 바뀜

const key3 = Symbol('key');
const key4 = Symbol('key');
map.set(key3, 'Hello'); // key3 !== key4

// 동일한 이름으로 하나의 키를 사용하고 싶다면 Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key'); // k1 === k2

// Symbol.keyFor 해당 심볼이 가지고 있는 문자열 정보를 알 수 있음
Symbol.keyFor(k1); // key