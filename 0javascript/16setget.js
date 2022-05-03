// 접근자 프로퍼티
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    // 함수 앞에 get을 써주면 변수처럼 접근이 가능하다.
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    // 할당
    console.log(value);
  }
}

const student = new Student('수지', '김');
console.log(student.fullName);
student.fullName = '김수지'; // 김수지(value) 출력

// extends 상속
class Study {
  constructor(name) {
    this.name = name;
  }
  sleep() {
    console.log('잔다!');
  }
  play() {
    console.log('논다!');
  }
}

class Teacher extends Study {
  constructor(name, lank) {
    // constructor를 추가하고 싶다면 상속 받기 전에 존재했던 것들을 써주고 추가
    super(name); //super = 상속하고 있는 부모 클래스에 name을 전달
    this.lank = lank;
  }
  teach() {
    // 상속 받은 내용 외에 더 작성할 내용이 있다면 이렇게 아래에 함수나 속성을 적어준다.
    console.log('가르친다!');
  }
  sleep() {
    // 오버라이딩 (부모에도 같은 이름의 메서드가 있는데 그걸 덮어 쓰는 것)
    console.log('존다!');
  }
  play() {
    // 부모에서 같은 이름의 메서드를 실행한 뒤에 추가로 수행
    super.play(); // super = 부모
    console.log('두 번 논다!');
  }
}
const teacherA = new Teacher('kim', 'A');
console.log(teacherA);
teacherA.sleep();
teacherA.play();
