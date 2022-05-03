let count = 0;

export function increase() {
  count++;
}

export function getCount() {
  return count;
}

// counter 모듈 안에는 이 두가지 함수가 연결되어 있다는 것을 알 수 있다.
// exports앞에 module은 생략이 가능하다. 그러나, exports를 새로운 값으로 지정해버리면 이제 문제가 발생하기때문에 module을 써주는 편이 좋다.
module.exports.getCount = getCount;
module.exports.increase = increase;

// 그런데! 이제는 위의 방법처럼 어렵게 하는 것이 아니라 내가 exports 하고싶은 함수 앞에 exports를 붙여주면 간단하게 exports가 가능하다!
