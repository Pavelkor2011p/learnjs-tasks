function sumInput() {

    let num = [];

    while (true) {
        let valueInput = prompt('Введите значение');

        if (!isFinite(valueInput) || valueInput === '' || valueInput === null) break;
        num.push(+valueInput);
    }

    let sum = 0;
    for (let number of num) {
        sum += number;
    }
    return sum;
}
alert(sumInput());