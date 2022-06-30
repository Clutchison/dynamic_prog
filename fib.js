let calcFib = (fibIndex) => {
  console.log(startFibbify(fibIndex));
}

let startFibbify = (times) => {
  if (times === 1) {
    return 0;
  } else if (times === 2) {
    return 1
  } else {
    return fibbify(0, 1, times - 2);
  }
}

let fibbify = (prev, current, times) => {
  return times > 1 ? fibbify(current, current + prev, times - 1) : current + prev;
}

for (let i = 1; i <= 40; i++) {
  calcFib(i);
}
