// let tests = [2, 5, [2, 1, 5, 3, 4], 5, [2, 5, 1, 3, 4]];
// let tests1 = [2, 8, [5, 1, 2, 3, 7, 8, 6, 4], 8, [1, 2, 5, 3, 7, 8, 6, 4]];

// test(tests);

// function test(test) {
//   for (let i = 0; i < test.length; i++) {
//     minimumBribes(test[i]);
//   }
// }

const var1 = [5, 1, 2, 3, 7, 8, 6, 4]; //Too Chaotic
const var2 = [1, 2, 5, 3, 7, 8, 6, 4]; //7

minimumBribes(var2);

function minimumBribes(q) {
  let orderedArray = [];
  let minBribes = 0;
  let chaos = false;

  if (q.length <= 1) {
    return (minBribes = null);
  }

  for (let i = 0; i < q.length; i++) {
    orderedArray.push(q[i]);
  }

  orderedArray.sort((a, b) => a - b);

  minBribes = Math.ceil(
    orderedArray.reduce((acc, elem, index) => {
      return q[index] == elem ? acc : acc + 1;
    }, 0) / 2
  );

  // orderedArray.map((item, index) => {
  //   if (item == q[index + 2] || item == q[index + 1] || item == q[index]) {
  //     chaos = false;
  //   } else {
  //     chaos = true;
  //   }
  // });

  if (chaos) {
    console.log("Too chaotic");
  }
  if (!chaos && minBribes > 0) {
    console.log(minBribes);
  }
}
