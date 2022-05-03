// 노드 모듈들을 활용한 사진 폴더 정리
// 달마다 찍은 사진들을 저장
// 사진과 동영상을 개별적으로 업로드
// 동영상 파일 -> video 폴더에 (mp4, mov)
// png 파일과 aae 파일은 백업 X -> captured 폴더에
// IMG_E 로 시작하는 사진들만 백업하고 원본 사진들(E가 붙어있지 않은 사진들) -> duplicated 폴더에
// -> 참고로 수정한 사진들은 E가 붙어있는데 그 사진
// terminal에 node photo(내가 실행하고 싶은 node app 이름) test(사용하고자 하는 폴더의 이름)
 
const path = require('path');
const fs = require('fs').promises; // promises가 뭐길래 이런거지? 지금까지 약 한시간동안 promises를 적지 않아서 오류뜸.
 
console.log(path.basename('/home/projects/node-yg6cbf/4challenge/test'));
fs.readdir('./test').then(console.log).catch(console.error);
