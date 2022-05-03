function runInDelay(callback, seconds) {
  if (seconds < 0 || !seconds) {
    throw new Error('seconds는 0보다 커야 함');
  } else {
    setTimeout(callback(), seconds * 1000);
  }
}

runInDelay(() => {
  console.log('timer gogo');
}, -2);

// async 퀴즈
function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('can not find 🐓'));
}

getChicken()
  .catch(() => 'c')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);

async function writeChicken() {
  const fetchegg = await fetchEgg();
  const fryegg = await fryEgg();
  return [fetchegg, fryegg];
}
