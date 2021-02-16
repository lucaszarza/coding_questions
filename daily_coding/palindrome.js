/*
 ** Good morning! Here's your coding interview problem for today.
 **
 ** This problem was asked by Google.
 **
 ** Determine whether a doubly linked list is a palindrome. What if it’s singly linked?
 **
 ** For example, 1 -> 4 -> 3 -> 4 -> 1 returns True while 1 -> 4 returns False.
 */

const palindrome = (list) => {
  let i = 0;
  let j = list.length - 1;
  let result = false;

  while (i < list.length / 2) {
    if (list[i] === list[j])
        result = true;
    else
        result = false;
    i++;    
    j--;
  }
  console.log(result)
};

const test = [1, 4, 3, 4, 1];
const test1 = [1, 4];
const test2 = [4, 3, 2, 5, 4, 5, 2, 3, 4];

palindrome(test);
palindrome(test1);
palindrome(test2);
