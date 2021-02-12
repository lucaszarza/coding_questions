let steps = 8;
let path = ["U", "D", "D", "D", "U", "D", "U", "U"];
countingValleys(steps, path);

function countingValleys(steps, path) {
  let valleys = 0;
  let elevation = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] == "D") {
      elevation--;
      console.log(path[i]);
    } else {
      if (elevation == -1) {
        valleys++;
      }
      elevation++;
    }
  }
  console.log(valleys);
  return valleys;
}
