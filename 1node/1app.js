// measuring time
// time 과 timeEnd를 이용해서 시간 측정하기
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// counting
function a() {
  console.count('a function');
}
a();
a();
console.countReset('a function'); // 카운트 리셋하는거 = 초기화 = 횟수 0

// this
// 함수 안에서 this 를 사용하면 this == global 이다.
function hello() {
  console.log(this);
  console.log(this === global);
}
hello();

// 클래스 안에서 this 를 사용하면 this != global 이다. this 는 자기자신이다.
class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log('---- class ----');
    console.log(this);
    console.log(this === global);
  }
}
const a = new A(1);
a.memberFunction();

// node js 에서의 this == module의 exports 를 가리킨다.
