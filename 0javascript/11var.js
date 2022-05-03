let a = 1;
console.log(a);

let integer = 123;
let negative = -123;
let double = 1.23;

let binary = 0b111101;

let bigInt = 12345678910123123123123n;

// template literal
let name = 'K';
let greetings = "'안녕!, " + name + "\n즐거운 하루 보내!'";
let newGreetings = `'안녕, ${name}
즐거운 하루 보내!'`;

// object
let apple = {
  name: 'apple',
  color: 'red',
};
let orange = {
  name = 'orange',
  color = 'yellow',
};
let apple2 = apple; // apple 의 주소값이 apple2에 저장
apple2.name = 'orange'; // apple.name == orange, apple2.name == orange

let num1 = 1;
let num2 = num1;
num2 = 2; // -> num1 == 1, num2 == 2


console.log(integer);
console.log(negative);
console.log(double);
console.log(binary);
console.log(bigInt);
console.log(greetings);
console.log(newGreetings);
