let canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  if (targetSum in memo) return memo[targetSum];
  return numbers.some((n) => {
    let remainder = targetSum - n;
    memo[remainder] = canSum(remainder, numbers, memo);
    return memo[remainder];
  });
}

console.log(canSum(7, [5, 4, 3, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3])); // true 3, 3, 2 || 2, 2, 2, 2
console.log(canSum(300, [7, 14])); // false
console.log(canSum(300, [7, 14, 1])); // true