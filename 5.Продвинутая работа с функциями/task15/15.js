function printNumbers(from, to) {
    let number = from;

    let timerId = setInterval(function () {
        console.log(number);
        if (number == to) {
            clearInterval(timerId);
        }
        number++;
    }, 1000);
}
printNumbers(5, 10);

function printNumbers1(from, to) {
    let num = from;

    setTimeout(function go() {
        console.log(num);
        if (num < to) {
            setTimeout(go, 1000);
        }
        num++;
    }, 1000);
}
printNumbers1(7, 12);