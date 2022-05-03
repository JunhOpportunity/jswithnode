// counter 모듈에서 함수 가져오기
const counter = require('./counter.js');

counter.increase();
console.log(counter.getCount());

// 마찬가지로 이제 위 방법처럼 require를 사용하는 것이 아니라
import * as counter from './counter.js';
increase();
increase();
console.log(getCount());
