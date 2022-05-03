// 객체
// {key : value}
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)

let apple = {
  name: 'apple',
  'hello-bye': 'hello',
  0: 1,
  helloBye : 'hello'
};

// 객체의 데이터 사용
apple.name; // 마침표 표기법
apple['hello-bye']; // 대괄호 표기법(이 방법은 거의 안씀. 그냥 camelCase 쓰셈.)
apple['0'];
apple['hello-bye'];

// 속성 추가
apple.emoji = 'oo';

// 속성 삭제
delete apple.emoji;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용
function getValue(obj, key) {
  return obj[key]; // 여기서 obj.key가 아니라는 점을 유의해야함.
}
console.log(getValue(obj, 'name'));
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects

const x = 0;
const y = 0;
const coordinate = {x: x, y: y}; // x라는 key 이름에 const x 가 들어감. y라는 key 이름에 const y가 들어감.
const coordinate = {x, y}; // key와 value의 이름이 같으면 이렇게 짧게 줄일 수 있음.
console.log(coordinate);

// 객체 안의 함수
const orange = {
  name: 'orange',
  display: function() {
    console.log(`${this.name}: orange`);
  },
};
orange.display(); // 객체 속성 사용할 때 함수는 뒤에 괄호 붙여야함.

// 생성자 함수
function Fruit(name, emoji) { // 함수 이름의 첫 글자를 대문자로 쓰면 생성자 함수로 만들 수 있다.
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this // 생략 가능. JS에서 자동으로 써주도록 함.
}