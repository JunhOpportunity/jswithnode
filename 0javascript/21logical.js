// 논리 연산자
// 단축 평가
let result = obj1 && obj2; // result = obj2
result = obj1 || obj2; // result = obj1

// 활용 예
// && : 조건이 truth 일 때 무언가를 해야 할 경우
// || 조건이 false 일 때 무언가를 해야 할 경우

function changeOwner(animal) {
  // 주인이 있는 경우
  if (!animal.owner) {
    throw new Error('주인 없음');
  }
  animal.owner = '바뀐 주인';
}
function makeNewOwner(animal) {
  // 주인이 없는 경우
  if (animal.owner) {
    throw new Error('주인이 있음');
  }
  animal.owner = '새로운 주인';
}

obj1.owner && changeOwner(obj1); // obj1.owner 이 true라면, 즉 오너가 있다면

obj1.owner || makeNewOwner(obj1); // obj1.owner 이 false라면, 즉 오너가 없다면

// || falshy 한 경우 설정(할당)
function print(message = 'Hi') { // 이런식으로 default parameter는 매개변수가 빈 값이면 오류 발생
  const text = message || 'Hello';
  console.log(text);
}
function print(message) { // 이런식으로 매개변수에 빈 값이 오면 false 이기 때문에 오류 발생 X
  const text = message || 'Hello';
  console.log(text);
}
