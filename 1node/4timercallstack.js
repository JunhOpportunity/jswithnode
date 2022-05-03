let num = 1;
const interval = setInterval(() => {
  // interval은 따로 중지하지 않으면 계속해서 수행
  console.log(num++);
}, 1000); // 1000 ms 단위로 수행 = 1초

setTimeout(() => {
  console.log('Timeout!');
  clearInterval(interval); // 해당 interval 멈추기
}, 6000);

setImmediate(() => {
  console.log('setImmediate');
})