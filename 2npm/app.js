// 4.22
// npm = 라이브러리 관리자
// npm은 팀단위로 프로젝트를 할 때 유용하게 쓰일 수 있다.
// npm init 명령어를 사용하면 프로젝트와 모든 라이브러리에 대한 정보를 가진 파일 생성.
// 깃허브에 올릴 때 node module은 포함하지 않는 것이 좋다.
// NPM docs : https://docs.npmjs.com/cli/v7/commands

console.log('hello node app! from scripts!');

// 참고로, json에서 scripts안에 npm start 를 적을 때, "start" 말고 다른 명령어를 사용하고 싶다면
// "새로운 명령어": "node 실행파일이름" 적은 후에 터미널에서는 'npm run 새로운 명령어' 적어주면 된다.

// 라이센스 관련 사이트 (여기서 라이센스란 npm init --yes 할 때 마지막에 작성하는 licenses)
// 보통 isc 라이센스 많이 사용한다.
// https://spdx.org/licenses/
// https://www.olis.or.kr/license/Detailselect.do?lType=spdx&lId=1074

// 라이브러리 버전 관리
// 1.0.0 <- Major.Minor.Patch
// 보통 프로젝트는 Major 버전 1 부터 시작한다.
// Patch : 사소한 이슈나 버그가 발생할 경우 패치를 통해 버전을 하나씩 올린다.
// Minor : 중간에 어떤 작은 기능들이 추가된 경우에 버전을 하나씩 올린다.
// Major : 큰 기능들이 추가된 경우 또는 이전 버전과는 전혀 다른 것들이 개선되거나 추가되는 경우
// https://docs.npmjs.com/about-semantic-versioning
// https://semver.npmjs.com/

// 터미널에서 npm view underscore 입력하면 현재 라이브러리 정보 확인이 가능하다.

// npm un 명령어를 입력하면 삭제가 가능하다.

// npm outdated 명령어를 입력하면 현재 버전과 원하는 버전(underscore)과 최근 버전을 알아볼 수 있다.

// npm view nodemon <- 우리가 개발 하면서 계속 보게 될 것.
// nodemon은 파일이 변경되면 자동으로 재시작해서 일일이 파일을 변경하고 노드를 재실행하지 않게 해줌
// 그런데 nodemon은 제품 자체에 필요한 것이 아니라 개발 할때만 필요한 것이기 때문에 배포할 때 포함해서는 안된다.
// -> 따라서 npm i nodemon --save-dev를  써야한다.
// 그리고 이후에 json 에서 'node app' 을 'nodemon app'로 바꾸면 이제 저장할 때 마다 nodemon 실행 + 자동 실행이 된다.

console.log('save!');
console.log('안녕 노드몬!');
