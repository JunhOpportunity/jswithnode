// try - catch 문
// 프로그래머들이 예측하지 못한, 구성해두지 않은 예외상황이 발생할 경우 사용한다.
// 특히 에러가 발생할 수 있는 코드들의 경우에는 try 안에 감싸주고 
// 에러가 발생할 경우 어떻게 처리할 것인지 catch 안에 써주는 것이다.

try {
  fs.renameSync('./file1.txt', './file-new.txt'); // 4.12 file 동기 비동기 프로미스 강의 예시 / 6file.js 예시
} catch (error) {
  console.error(error);
}
// 이렇게 되면 에러를 정상적으로 처리한 후에 다음 코드로 넘어갈 수 있다.
