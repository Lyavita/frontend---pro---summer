class Calculator {

  static el = (element) => element.charAt(0) === "#" ? document.querySelector(element) : document.querySelectorAll(element);

  #theNum;
  #oldNum;

  constructor() {
  this.viewer = Calculator.el("#viewer");
  this.equals = Calculator.el("#equals");
  this.nums = Calculator.el(".num");
  this.ops = Calculator.el(".ops");
  this.#theNum = "";
  this.#oldNum = "";
  this.resultNum;
  this.operator;
  }
  
  setClick() {
    console.log(this)
    for (let i = 0, l = this.nums.length; i < l; i++) {
        this.nums[i].addEventListener("click", this.setNum.bind(this));
    }
    for (let i = 0, l = this.ops.length; i < l; i++) {
        this.ops[i].addEventListener("click", this.moveNum.bind(this));
    }
    this.equals.addEventListener("click", this.displayNum.bind(this));
    Calculator.el("#clear").addEventListener("click", this.clearAll.bind(this));
    Calculator.el("#reset").addEventListener("click", () => window.location = window.location);
  }

  setNum(event) {
    console.log(this)
    this.resultNum ? (this.#theNum = event.target.getAttribute("data-num"), this.resultNum= "") : (this.#theNum += event.target.getAttribute("data-num"));
    this.viewer.innerHTML = this.#theNum;
  };

  moveNum(event) {
    console.log(this)
    this.#oldNum = this.#theNum;
    this.#theNum = "";
    this.operator = event.target.getAttribute("data-ops");
    this.equals.setAttribute("data-result", "");
  };

  displayNum() {
    console.log(this)
    this.#oldNum = parseFloat(this.#oldNum);
    this.#theNum = parseFloat(this.#theNum);
    switch (this.operator) {
      case "plus":
          this.resultNum= this.#oldNum + this.#theNum;
          break;
      case "minus":
          this.resultNum= this.#oldNum - this.#theNum;
          break;
      case "times":
          this.resultNum= this.oldNum * this.theNum;
          break;
      case "divided by":
          this.resultNum= this.#oldNum / this.#theNum;
          break;
      default:
          this.resultNum= this.#theNum;
    }

    if (!isFinite(this.resultNum)) {
      isNaN(this.resultNum) ? this.resultNum= "You broke it!" : (this.resultNum= "Look at what you've done", Calculator.el('#calculator').classList.add("broken"), Calculator.el('#reset').classList.add("show"))
    }

    this.viewer.innerHTML = this.resultNum;
    this.equals.setAttribute("data-result", this.resultNum);
    this.#oldNum = 0;
    this.#theNum = this.resultNum;
  };

  clearAll() {
    this.#oldNum = "";
    this.#theNum = "";
    this.viewer.innerHTML = "0";
    this.equals.setAttribute("data-result", this.resultNum);
  };
}

let calc = new Calculator();
calc.setClick();