const getFibonacci = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
};

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimes = (arr) => (Array.isArray(arr) ? arr.filter(isPrime) : []);

const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
};

const lcm = (a, b) => (a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b));

const getLCM = (arr) => {
    if (!Array.isArray(arr) || !arr.length) return 0;
    return arr.reduce((acc, curr) => lcm(acc, curr));
};

const getHCF = (arr) => {
    if (!Array.isArray(arr) || !arr.length) return 0;
    return arr.reduce((acc, curr) => gcd(acc, curr));
};

module.exports = {
    getFibonacci,
    getPrimes,
    getLCM,
    getHCF
};
