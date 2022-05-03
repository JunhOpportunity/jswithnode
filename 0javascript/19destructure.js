// 구조 분해 할당
const fruits = ['🍌', '🍓', '🍇', '🍓']
const [first, second, ...others] = fruits;
// first = '🍌' / seconde = '🍓' / others = ['🍇', '🍓']

const ellie = {name: 'Ellie', age: 20, job: 's/w engineer'};
function display({name, age, job}) {
}

const {name, age, job, pet = '기본강아지'} = ellie;

