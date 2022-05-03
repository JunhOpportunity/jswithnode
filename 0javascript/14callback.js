// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다.  (=외부로부터 주어진 함수)
// 전달된 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨.
function calculator(a, b, action) { // action은 콜백함수 (나중에 사용하기위해 가져오는 함수)
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(1, 2, add); // callback 함수 형태로 add 가져옴


function displayObj(obj) {
  obj.name = 'Bob'; // 외부로부터 주어진 인자를 내부에서 변경하지 않아야한다.
  console.log(obj);
}

function changeName(obj) { // 이름부터 변경하는 느낌을 주도록
  return {...obj, name: 'Bob'}; // 반환할 때 새로운 오브젝트 만들기
}