// generator : 생성기
// iterator을 좀 더 편하게 만들 수 있음.

function* multipleGenerator() { // function* <- 뒤에 * 붙여야 함.
  for(let i = 0; i < 10; i++) {
    yield i**2; // return과 비슷한데, yield는 사용자가 달라고 할 때 줌.
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done) // 0, false