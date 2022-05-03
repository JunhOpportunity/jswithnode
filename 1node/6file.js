const fs = require('fs');

// 모든 API는 3가지 형태로 제공
// rename() <- 비동기 / 에러나 데이터 전달 함.
// renameSync() 끝날 때 까지 다음 줄로 넘어가지 않음 / 에러를 전달해주지 않음 따라서 가급적 사용하지 않는 것이 좋다.
// promises.rename().then().catch(0) <- 비동기



// 동기 <- 가급적 사용하지 않는 것이 좋다.
try {
  fs.renameSync('./file1.txt', './file-new.txt');
} catch (error) {
  console.error(error);
}



// 비동기
fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log('error');
})
console.log('hello');



// 프로미스 (위 두 방식 모두 싫다 하면 사용) / 코드를 순차적으로 사용하고 싶다면 then 안에 적어주면 된다.
fs.promises.rename('./text.txt', './text-new/txt').then(() => console.log('Done')).catch(console.error);

// 더 다양한 file 사용법
const fp = require('fs').promises;
// read a file
fs.readFile('./text.txt', 'utf8').then((data) => console.log(data)).catch(console.error);

// writing a file - writeFile : 내용 작성하는 동시에 덮어씀.
fs.writeFile('./file.txt', 'Writing New text in file!').catch(console.error); // 에러가 발생할 수 있기 때문에 then은 안써도 항상 catch는 써준다.

// writing a file - appendFile : 내용 뒤에 추가
fs.appendFile('./file.txt', 'Append New text in file!').catch(console.error); // 마찬가지로 catch 써준다.

// copy
fs.copyFile('./file.txt', './file2.txt').catch(console.error); // (A, B) : A를 B에 복사

// folder 생성
fs.mkdir('sub-folder').catch(console.error);

// folder 읽기
fs.reqaddir('./.').then(console.log).catch(console.error);

