// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적 방법)
// 2. 클래스


// // 생성자 함수
// function Fruit(name, emoji) { // 함수 이름의 첫 글자를 대문자로 쓰면 생성자 함수로 만들 수 있다.
//   this.name = name;
//   this.emoji = emoji;
//   this.display = () => {
//     console.log(`${this.name}: ${this.emoji}`);
//   };
//   return this // 생략 가능. JS에서 자동으로 써주도록 함.
// }

// 접근제어자 - 캡슐화 private(# 내부에서는 사용 가능하고 외부에서는 사용 불가능), public(기본), protected
// 클래스 class
class Fruit {
  // 생성자 : 나중에 new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;

  }
  // 객체 안에서 사용하는 멤버 함수가 있다면 여기 아래에 적으면 됨. // 필드는 보통 constructor가 추가되면 생략한다.
  display = () => { // 앞에 function 쓰면 안됨.
    console.log(`${this.name}: ${this.emoji}`);
};

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', 'apple');
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', 'orange');