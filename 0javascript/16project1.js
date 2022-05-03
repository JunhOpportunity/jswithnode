// counter 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기

class Counter {
  #value; // 프라이빗으로 사용하기 위해서 앞에 정의
  constructor(startValue) {
    if (startValue < 0 || isNaN(startValue)) {
      this.#value = 0; // 외부에서 변경이 불가능하도록 프라이빗으로 만들어 줌.
    } else {
      this.#value = startValue;
    }
  }
  get value() {
    return this.#value;
  }
  increment() {
    this.#value++;
  }
}

const counter = new Counter(2);

counter.increment();
counter.increment();
console.log(counter.value);
