const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

sockMerchant(n, ar);

function sockMerchant(n, ar) {
  const sockColors = {};

  ar.map((item) => {
    if (!sockColors[item]) {
      sockColors[item] = 0;
    }
    sockColors[item] += 1;
  });
  let sockNumbers = Object.values(sockColors);
  let totalPairs = sockNumbers.reduce((acc, elem) => {
    let pairs = elem % 2 === 0 ? elem / 2 : (elem - 1) / 2;
    return acc + pairs;
  }, 0);

  console.log(totalPairs);
}
