// 콜백 비동기
function execute() {
  consoleo.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000);
  console.log('3');
}

excute();

// promise : callback 전달 받지 않음 / promise 함수 파트 모르겠음
function runInDelay(seconds) {
  return new Promise((resolve, reject) => { // 성공 : resolve 실행, 실패 : reject 실행
    if(!seconds || seconds < 0) {
      reject(new Error('sdeconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2).then(필요한 일을 수행).catch(에러를 처리).finally(최종적으로 무조건 호출);

runInDelay(() => {
  console.log('timer gogo');
}, -2);

'use strict';