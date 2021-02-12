/* [EASY]
 ** Good morning! Here's your coding interview problem for today.
 **
 ** This problem was asked by Microsoft.
 **
 ** Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
 **
 ** For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is [1, 2, 3, 4]. Return its length: 4.
 **
 ** Your algorithm should run in O(n) complexity.
 */

const longesConsecutiveElements = (el) => {
  let i = 0;
  let newArr = [];

  el.sort((a, b) => a - b);

  while (el[i] > i) {
    if (el[i + 1] === el[i] + 1) {
      newArr.push(el[i]);
    } else if (el[i] - 1 === el[i - 1]) {
      newArr.push(el[i]);
    }
    i++;
  }
  console.log(el);
  console.log(newArr);
};

const test = [100, 4, 200, 1, 3, 2]; // [1, 2, 3, 4]

longesConsecutiveElements(test);
