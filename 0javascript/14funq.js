function print(a) {
  console.log(a);
}

function double(a) {
  console.log(a * 2);
}

function iterate(max, action) {
  for (let a = 0; a < max; a++) {
    action(a);
  }
}

setTimeout(() => {
  console.log('3초뒤에 이 함수가 실행될거예요!');
}, 3000);

iterate(3, print);
iterate(3, double);
