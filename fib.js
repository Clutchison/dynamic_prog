let startFibbify = (times) => {
  if (times === 1) {
    return 0;
  } else if (times === 2) {
    return 1
  } else {
    return fibbify(0, 1, times - 2);
  }
}

let fibbify = (prev, current, times) => times > 1 ?
  fibbify(current, current + prev, times - 1) :
  current + prev;

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

for (let i = 1; i <= 50; i++) {
  // console.log(fib(i))
  console.log(startFibbify(i));
}
console.log("Complete");
