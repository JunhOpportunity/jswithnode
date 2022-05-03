// Stream : 서버가 영상 데이터를 잘게 잘라서 조금씩 보내면서 사용자가 영상을 실행
// buffer : 고정된 메모리 덩어리 / ex) 메모리의 바이트를 가리킴

const buf = Buffer.from('Hi');
console.log(buf); // 유니코드 형태로 Hi 출력
console.log(buf[0]); // 아스키코드 형태로 H 출력
console.log(buf.toString()); // 문자열 형태로 Hi 출력

// create
const buf2 = Buffer.alloc(2); // 초기화 되어있는 2자리 버퍼 생성
const buf3 = Buffer.allocUnsafe(2); // 초기화 되어있지 않은 2자리 버퍼 생성 / 빠르긴 한데 위험.
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3); // buf2를 buf3에 복사
console.log(buf2.toString());
console.log(buf3.toString());

// concat : 여러가지 버퍼를 모으기(합치기)
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());

// stream 다시 공부해보자.. 재밌는데 시간에 쫓겨서 뭔가 급하게 보느라 집중 X. (4.16 다시 듣기.);

// 4.16 진짜 한 4번 들었는데 이해 X stream 이랑 pipe 존나 어려움.

const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
  highWaterMark: 8, // 기본적으로는 64 kbytes
  encoding: 'utf-8',
});

readStream.on('data', (chunk) => {
  console.log(chunk);
})

readStream.on('error', (error) => {
  console.log(error);
})


