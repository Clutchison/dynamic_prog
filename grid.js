let gridTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n;
  if (key in memo) return memo[key];
  if (m == 1 || n == 1) return 1;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
}

console.log(gridTraveler(3, 4));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));
console.log(gridTraveler(100, 100));