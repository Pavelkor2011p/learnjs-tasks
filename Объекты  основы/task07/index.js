
let calculator = {
    read() {
       this.a = +prompt('Введите число',0);
       this.b = +prompt('Введите число',0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );