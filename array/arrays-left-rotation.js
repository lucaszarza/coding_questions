function rotLeft(a, d) {
  let array = a;
  let rotations = d;

  for (let i = 0; i < rotations; i++) {
    array.push(array[0]);
    array.shift();
  }

  return array;
}

const a = [1, 2, 3, 4, 5];
const d = 4;

const a1 = [
  41,
  73,
  89,
  7,
  10,
  1,
  59,
  58,
  84,
  77,
  77,
  97,
  58,
  1,
  86,
  58,
  26,
  10,
  86,
  51,
];
const d1 = 10;

rotLeft(a1, d1);
