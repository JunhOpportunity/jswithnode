function fetchFruits() {
  return getBanana().then((banana) => getApple().then((apple) => [banana, apple]));
}

async function fetchFruits2() {
  const banana = await getBanana(); 
  const apple = await getApple();
  return [banana, apple];
}
