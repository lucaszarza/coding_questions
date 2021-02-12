function jumpingOnClouds(clouds) {
  debugger;
  let minJump = 1;
  let maxJump = 2;
  let numJumps = -1;
  let skippedCloud = null;

  clouds.map((cloud, index) => {
    if (cloud == 0 && index != skippedCloud) {
      numJumps++;
      if (clouds[index + minJump] == 0 && clouds[index + maxJump] == 0) {
        skippedCloud = index + 1;
      }
    }
  });
  console.log(numJumps);
}

let clouds = [0, 0, 1, 0, 0, 1, 0]; //4
let clouds2 = [0, 0, 0, 0, 1, 0]; //3
let clouds3 = [0, 0, 0, 1, 0, 0]; //3

console.log(clouds3);
jumpingOnClouds(clouds3);
