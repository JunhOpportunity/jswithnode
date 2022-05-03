// function
function add(a = 1, b = 1) {
  return a + b;
}
const sum = add;

function print(num) {
  if (num < 0) {
    return;
  }
}

function rest(a, b, ...numbers) {
  console.log(numbers); // numbers 는 a, b 를 제외한 추가로 입력한 매개변수들을 배열로 나타냄
}

// 함수 표현식 const name = function () {}
let add2 = function (a, b) {
  return a + b;
};
// 화살표 함수 const name = () => {}
add = (a, b) => {
  return a+ b;
};
add3 = (a, b) => a+ b; // 이렇게 간결하게도 표현 가능

// 생성자 함수 const object = new Function(); 객체편에서 배움

// IIFE (Immediately-Invoked Function Expressions) - 함수 만들자마자 즉시 실행
(function run() {
  console.log('IIFE!')
})();
