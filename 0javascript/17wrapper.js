// Wrapper object , 이걸 사용하면 원시타입에서 객체로 변환했다가 다시 원시타입으로 돌아간다.

const number = 13;
console.log(number.toString()); // 문자열로 변환
console.log(number); // 다시 원시 타입

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference

// URL
// 한글이나 특수문자는 이스케이프 처리 해야 한다.
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL); // https://%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9.com
console.log(encoded);

const decoded = decodeURI(encoded); // https://드림코딩.com'
console.log(decoded);
