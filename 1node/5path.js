// path - 경로 정보에 대한 내용을 알려주는 것

const path = require('path');

console.log(__dirname);

// basename - 현재 있는 파일의 이름 출력
console.log(path.basename(__filename)); // 파일 이름 출력
console.log(path.basename(__filename, '.js')); // 파일 이름 출력하는데 '.js' 빼고 출력

// parse - root, dir, base, ext, name 모두 출력함
const parsed = path.parse(__filename);
console.log(parsed);

// isAbsolute - 경로가 절대 경로인지 상대 경로인지 확인 가능
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /Users/ 절대경로면 true
console.log('isAbsolute?', path.isAbsolute('../')); // 상대경로면 false

// normalize - 경로 작성 시 잘못 작성한 경우 고쳐줌
console.log(path.normalize('./folder//////sub')); // -> folder/sub

// join - 경로 추가하고 싶은 경우에 사용.
console.log(__dirname + path.sep + 'image'); // path.sep를 톻해 운영체제에 맞는 구분자를 만듬.
console.log(path.join(__dirname, 'image')); // 위 코드를 이렇게 간단하게 작성이 가능하다.
