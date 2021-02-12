function hourglassSum(arr) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      let total =
        arr[row][col] +
        arr[row][col + 1] +
        arr[row][col + 2] +
        arr[row + 1][col + 1] +
        arr[row + 2][col] +
        arr[row + 2][col + 1] +
        arr[row + 2][col + 2];

      if (total > max) {
        max = total;
      }
    }
  }
  console.log(max);
}
const arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
hourglassSum(arr);
