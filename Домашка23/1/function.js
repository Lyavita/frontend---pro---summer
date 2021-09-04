class Calculator {

  static el = (element) => element.charAt(0) === "#" ? document.querySelector(element) : document.querySelectorAll(element);
  
  static VIEWER = Calculator.el("#viewer");
  static EQUALS = Calculator.el("#equals");
  static NUMS = Calculator.el(".num");
  static OPS = Calculator.el(".ops");
  static #THE_NUM = "";
  static #OLD_NUM = "";
  static RESULT_NUM;
  static OPERATOR;

  constructor() { }
  
  setClick() {
    for (let i = 0, l = Calculator.NUMS.length; i < l; i++) {
        Calculator.NUMS[i].addEventListener("click", this.setNum);
    }
    for (let i = 0, l = Calculator.OPS.length; i < l; i++) {
        Calculator.OPS[i].addEventListener("click", this.moveNum);
    }
    Calculator.EQUALS.addEventListener("click", this.displayNum);
    Calculator.el("#clear").addEventListener("click", this.clearAll);
    Calculator.el("#reset").addEventListener("click", () => window.location = window.location);
  }

  setNum() {
    Calculator.RESULT_NUM ? (Calculator.#THE_NUM = this.getAttribute("data-num"), Calculator.RESULT_NUM = "") : (Calculator.#THE_NUM += this.getAttribute("data-num"));
    Calculator.VIEWER.innerHTML = Calculator.#THE_NUM;
  };

  moveNum() {
    Calculator.#OLD_NUM = Calculator.#THE_NUM;
    Calculator.#THE_NUM = "";
    Calculator.OPERATOR = this.getAttribute("data-ops");
    Calculator.EQUALS.setAttribute("data-result", "");
  };

  displayNum() {
    Calculator.#OLD_NUM = parseFloat(Calculator.#OLD_NUM);
    Calculator.#THE_NUM = parseFloat(Calculator.#THE_NUM);
    switch (Calculator.OPERATOR) {
      case "plus":
          Calculator.RESULT_NUM = Calculator.#OLD_NUM + Calculator.#THE_NUM;
          break;
      case "minus":
          Calculator.RESULT_NUM = Calculator.#OLD_NUM - Calculator.#THE_NUM;
          break;
      case "times":
          Calculator.RESULT_NUM = Calculator.OLD_NUM * Calculator.THE_NUM;
          break;
      case "divided by":
          Calculator.RESULT_NUM = Calculator.#OLD_NUM / Calculator.#THE_NUM;
          break;
      default:
          Calculator.RESULT_NUM = Calculator.#THE_NUM;
    }

    if (!isFinite(Calculator.RESULT_NUM)) {
      isNaN(Calculator.RESULT_NUM) ? Calculator.RESULT_NUM = "You broke it!" : (Calculator.RESULT_NUM = "Look at what you've done", Calculator.el('#calculator').classList.add("broken"), Calculator.el('#reset').classList.add("show"))
    }

    Calculator.VIEWER.innerHTML = Calculator.RESULT_NUM;
    Calculator.EQUALS.setAttribute("data-result", Calculator.RESULT_NUM);
    Calculator.#OLD_NUM = 0;
    Calculator.#THE_NUM = Calculator.RESULT_NUM;
  };

  clearAll() {
    Calculator.#OLD_NUM = "";
    Calculator.#THE_NUM = "";
    Calculator.VIEWER.innerHTML = "0";
    Calculator.EQUALS.setAttribute("data-result", Calculator.RESULT_NUM);
  };
}

let calc = new Calculator();
calc.setClick();