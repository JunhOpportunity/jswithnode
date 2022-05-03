// 옵셔널 체이닝 연산자
let item = { price: 1 };
const price = item?.price; // item && item.price

// 좋은 예시
let obj = { name: 'ABC', owner: { name: 'JJ' } };
function printName(obj) {
  // const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName();

// nullish
let num = 0;
console.log(num || '-1'); // -1 출력(삐빅)
console.log(num ?? '-1'); // 0 출력