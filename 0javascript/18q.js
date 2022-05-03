// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

fruit = ['🍌', '🍓', '🍇', '🍓'];
console.log(fruit);
newFruit = Array.from(fruit);
for (let a = 0; a < newFruit.length; a++) {
  if (newFruit[a] == '🍓') {
    newFruit.splice(a, 1, '🥝');
    // newFruit[a] = '🥝';
  }
}
console.log(newFruit);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

fruit2 = ['🍌', '🥝', '🍇', '🥝'];
let count = 0;
for (let i = 0; i < fruit2.length; i++) {
  if (fruit2[i] == '🥝') {
    count++;
  }
}
console.log(count);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
fruit3 = ['🍌', '🥝', '🍇'];
fruit4 = ['🍌', '🍓', '🍇', '🍓'];
// let fruit5 = new Array();
fruit5 = [];
for (let x = 0; x < fruit3.length; x++) {
  for (let y = 0; y < fruit4.length; y++) {
    if (fruit3[x] == fruit4[y]) {
      fruit5.push(fruit3[x]); // 이거 return 하니까 안되는데..? 함수가 아니라 그런듯.
      break;
    }
  }
}
console.log(fruit5);

// 함수 만들어서 다시.
