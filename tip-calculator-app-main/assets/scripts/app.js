class Input {
  constructor(inputId) {
    this.inputId = inputId;
    this.inputEl = document.getElementById(`${inputId}`);
    this.inputStyleHandler();
  }

  inputStyleHandler() {
    const inputBox = this.inputEl.closest("div");

    this.inputEl.addEventListener("focus", () => {
      inputBox.classList.add("clicked");
      this.inputEl.value = "";
    });
    this.inputEl.addEventListener("blur", () => {
      this.inputValue = +this.inputEl.value;
      inputBox.classList.remove("clicked");
      if (this.inputId === "bill-input") {
        this.inputEl.value = this.inputValue.toFixed(2);
      }
    });
  }

  clearInput() {
    if (this.inputId === "bill-input") {
      this.inputEl.value = "0.00";
    } else {
      this.inputEl.value = "0";
    }
  }
}

class App {
  constructor() {
    this.init();
    this.tipAmountHandler();
  }

  init() {
    const buttons = document.querySelectorAll("button"); //Initializes all buttons
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.id === "reset") {
          this.billInput.clearInput();
          this.peopleInput.clearInput();
        } else if (btn.id === "custom") {
          console.log("custom value entered");
        } else {
          this.tipPercentage = btn.value;
        }
      });
    });
    //Initializes classes
    this.billInput = new Input("bill-input");
    this.peopleInput = new Input("people-input");
  }

  tipAmountHandler() {
    const body = document.body;
    const billValue = this.billInput.inputValue;
    const peopleValue = this.peopleInput.inputValue;
    body.addEventListener("click", () => {
      if (
        this.billInput.inputValue !== 0 &&
        peopleValue !== 0 &&
        this.tipPercentage !== 0
      ) {
        console.log("Calculating tip");
        let total = billValue / peopleValue;
        let tipPerPerson = (billValue * (this.tipPercentage / 100)) / peopleValue;
        console.log(total, tipPerPerson);
      }
    });
  }
}

const app = new App();
