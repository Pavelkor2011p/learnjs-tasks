let x = prompt('Введите число x');
let n = prompt('Введите число y');

if (x > 0 && n > 0){
    function pow(x, n){
        return x ** n;
    }
} else alert('Введите натуральное число')
alert(pow(x, n));