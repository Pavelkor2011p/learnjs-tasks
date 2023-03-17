function sumTo1(n) {
    let res = 0;
    for (let i = 0; i <= n; i++) {
         res += i;
    }
    return res;
}

function sumTo2(n) {
    return (n == 1) ? 1 : n + sumTo2(n - 1);
}

function sumTo3(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo1(100));
console.log(sumTo2(100));
console.log(sumTo3(100));