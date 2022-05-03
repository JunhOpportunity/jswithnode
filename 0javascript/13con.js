// 조건문 Conditional Statement

// if 문
let fruit = 'apple';
if (fruit == 'apple') {
  console.log('good');
} else if (fruit == 'orange') {
  console.log('good');
} else {
  console.log('!');
}

// 삼항 연산자
fruit === 'apple' ? console.log('apple') : console.log('NO!');

let num = 2;
if (num % 2 == 0) {
  console.log('good');
} else {
  console.log('bad');
}
num % 2 == 0 ? console.log('good') : console.log('bad');

// switch case문
let day = 6;
let dayName;
switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    console.log('해당 요일 없음.');
}
console.log(dayName);
