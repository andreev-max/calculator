const display = document.querySelector("input")!;
const calcElement = document.querySelector(".calc")!;
const numbers = [...document.querySelectorAll(".number")]!;
const plusButton = document.querySelector("#plus")!;
const minusButton = document.querySelector("#minus")!;
const multButton = document.querySelector("#mult")!;
const divideButton = document.querySelector("#divide")!;
const resultButton = document.querySelector("#result")!;
const clearButton = document.querySelector("#clear")!;
const fullClearButton = document.querySelector("#full-clear")!;
const negativeButton = document.querySelector("#negative")!;
const decimalButton = document.querySelector("#decimal")!;
const sqrtButton = document.querySelector("#sqrt")!;
const degreeButton = document.querySelector("#degree")!;
let currentNumberInMemory: number = 0;
let isNumberInMemory: boolean = false;
let operationInMemory: string = "";

numbers.forEach((number) => {
  number.addEventListener("click", (event) => pressNumber(event));
});
plusButton.addEventListener("click", pressPlus);
minusButton.addEventListener("click", pressMinus);
multButton.addEventListener("click", pressMult);
divideButton.addEventListener("click", pressDivide);
resultButton.addEventListener("click", showResult);
clearButton.addEventListener("click", clearEntry);
fullClearButton.addEventListener("click", fullClear);
negativeButton.addEventListener("click", doNegative);
sqrtButton.addEventListener("click", calcSquare);
decimalButton.addEventListener("click", getDecimal);
degreeButton.addEventListener("click", pressDegree);

function getDecimal(): void {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

function calcSquare(): void {
  if (+display.value < 0) {
    display.value = "Error";
    display.style.color = "red";
    calcElement.classList.add("shake");
    setTimeout(() => {
      calcElement.classList.remove("shake");
      display.value = "0";
      display.style.color = "white";
    }, 1300);
  } else {
    display.value = String(Math.sqrt(Number(display.value)));
  }
}

function showResult(): void {
  let localValue = Number(display.value);
  if (!isNumberInMemory) {
    switch (operationInMemory) {
      case "+":
        localValue = currentNumberInMemory + Number(display.value);
        break;
      case "-":
        localValue = currentNumberInMemory - Number(display.value);
        break;
      case "*":
        localValue = currentNumberInMemory * Number(display.value);
        break;
      case "/":
        localValue = currentNumberInMemory / Number(display.value);
        break;
      case "/":
        localValue = currentNumberInMemory / Number(display.value);
        break;
      case "XY":
        localValue = calcDegree(currentNumberInMemory, Number(display.value));
        break;
      default:
        return;
    }
    isNumberInMemory = true;
  }
  operationInMemory = "";
  display.value = String(parseFloat(String(localValue.toFixed(8))));
}

function doNegative(): void {
  display.value = String(-display.value);
}

function pressNumber(event: any): void {
  const number = event.target.value;
  if (isNumberInMemory) {
    display.value = number;
    isNumberInMemory = false;
  } else {
    if (display.value === "0") {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}

function pressDegree(): void {
  if (operationInMemory === "XY" && !isNumberInMemory) {
    if (currentNumberInMemory < 0) {
      display.value = String(
        -Math.pow(currentNumberInMemory * -1, Number(display.value))
      );
    } else {
      display.value = String(
        Math.pow(currentNumberInMemory, Number(display.value))
      );
    }
  } else {
    operationInMemory = "XY";
  }
  isNumberInMemory = true;
  currentNumberInMemory = Number(display.value);
}

function calcDegree(a: number, b: number): number {
  if (a < 0) {
    a *= -1;
    a = Math.pow(a, b);
    a *= -1;
  } else {
    a = Math.pow(a, b);
  }
  return a;
}

function pressPlus(): void {
  if (operationInMemory === "+" && !isNumberInMemory) {
    display.value = String(currentNumberInMemory + Number(display.value));
  } else {
    operationInMemory = "+";
  }
  isNumberInMemory = true;
  currentNumberInMemory = Number(display.value);
}

function pressMinus(): void {
  if (operationInMemory === "-" && !isNumberInMemory) {
    display.value = String(currentNumberInMemory - Number(display.value));
  } else {
    operationInMemory = "-";
  }
  isNumberInMemory = true;
  currentNumberInMemory = Number(display.value);
}

function pressMult(): void {
  if (operationInMemory === "*" && !isNumberInMemory) {
    display.value = String(currentNumberInMemory * Number(display.value));
  } else {
    operationInMemory = "*";
  }
  isNumberInMemory = true;
  currentNumberInMemory = Number(display.value);
}

function pressDivide(): void {
  if (operationInMemory === "/" && !isNumberInMemory) {
    display.value = String(currentNumberInMemory / Number(display.value));
  } else {
    operationInMemory = "/";
  }
  isNumberInMemory = true;
  currentNumberInMemory = Number(display.value);
}

function clearEntry(): void {
  display.value = "0";
}

function fullClear(): void {
  display.value = "0";
  isNumberInMemory = false;
  operationInMemory = "";
  currentNumberInMemory = 0;
}
