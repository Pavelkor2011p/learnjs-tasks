function Accumulator(value) {
    this.sum = value;

    this.read = function () {
        this.sum += +prompt();
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.sum);