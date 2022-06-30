const total = 99;
const denominations = [1, 5, 10, 25];

function Coinpurse() {
  this.coins = new Map();
  this.add = (coin) => this.coins.set(coin, (this.coins.get(coin) || 0) + 1);
};

function Calculator(denominations) {
  this.denominations = [...denominations].sort(function (a, b) { return b - a; });
  this.findLargestCoin = (n) => this.denominations.find(d => d <= n);
}

let calc = (total, denominations) => {
  let currentTotal = total;
  let coinpurse = new Coinpurse();
  let calculator = new Calculator(denominations);

  while (currentTotal > 0) {
    let largestCoin = calculator.findLargestCoin(currentTotal);
    coinpurse.add(largestCoin);
    currentTotal -= largestCoin;
  }

  console.log(coinpurse.coins);
}

calc(total, denominations);
