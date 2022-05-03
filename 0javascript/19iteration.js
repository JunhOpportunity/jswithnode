// Iteration : 반복, 순회
// [Symbol.iterator]() 함수 호출했을 때 : IterableIterator<T> 리턴
// 심볼 정의를 가진 객체나 특정한 함수가 IterableIterator<T>를 리턴한다는 것은
// 순회 가능한 객체다. 라는 것을 의미
// 순회가 가능하면 계속해서 반복하는 반복문, 연산자들을 사용할 수 있다.

// iterator (): {
//   next(): 다음값
// }

const array = [1, 2, 3, 4];
console.log(array.values()); // Object [Array Iterator] {}
console.log(array.entries()); // Object [Array Iterator] {}
console.log(array.keys()); // Object [Array Iterator] {}

for (let item of array.values()) {
  // for 안에 of 는 하나하나 출력
  console.log(item);
}

const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}

const obj = { id: 123, name: 'jj' };
for (const key in obj) {
  // 객체는 for of 말고 for in 으로 순회 사용
  console.log(key);
}
