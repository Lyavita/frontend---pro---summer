const calc = new CreateCalculator(10);

function CreateCalculator(b) {

    this.b = b;
    this.sum = function (q) {
        this.b = this.b + q;
        return this.b;
    };
    this.mult = function (q) {
        this.b = this.b * q;
        return this.b;
    };
    this.sub = function (q) {
        this.b = this.b - q;
        return this.b;
    };
    this.div = function (q) {
        this.b = this.b / q;
        return this.b;
    };
    this.set = function (q) {
        this.b = q
        return this.b;
    };
}

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.set(100));