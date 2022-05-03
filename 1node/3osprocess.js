// os 정보
const os = require('os');
console.log(os.cpus()); // cpu 정보를 알려주는 os 모듈의 함수.

// process 정보 <-- 잘 모르겠다. 책, 강의 다시.
const process = require('process');

setTimeout(() => {
  // 위의 코드들이 모두 수행된 후
}, 0); // 0 초 후에
process.nextTick(); // nextTick은 테스크 큐 제일 앞에 넣어줘서 현재 수행되고있는 코드 다 완료된 후에 setTimeout이 0초 후에 실행되더라도 가장 우선적으로 실행되게 하는 것이다.

