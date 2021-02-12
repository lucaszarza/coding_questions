function getSecondLargest(nums) {
  // Complete the function
  let first = 0;
  let second = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] > first) first = nums[i];
    i++;
  }

  for (let num of nums)
    if (num < first && num > second) second = num;

  console.log(second);
}

let test_scenario = [2, 3, 6, 6, 5];
let test_scenario1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

getSecondLargest(test_scenario);
getSecondLargest(test_scenario1);
