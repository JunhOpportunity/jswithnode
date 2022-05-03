1; // 숫자 리터럴 표현식
1 + 1; // 연산자 표현식
call(); // 함수 호출 표현식
let b; // 선언문
b = 2; // 할당문, 할당 표현식인 문

// equality 
console.log(2 == '2') // true, 비교할 때 문자열 2가 숫자로 자동 변환 된다.
console.log(2 === '2') // false, 타입이 다르다.

let obj1 = {
  name = 'K'
};
let obj2 = {
  name = 'K'
};
let obj3 = obj2;
console.log(obj1 == obj2); // false
console.log(obj1.name == obj2.name); // true
console.log(obj3 === obj2); // true
