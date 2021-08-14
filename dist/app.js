"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var display = document.querySelector("input");
var calcElement = document.querySelector('.calc');
var numbers = __spreadArray([], __read(document.querySelectorAll(".number")));
var plusButton = document.querySelector("#plus");
var minusButton = document.querySelector("#minus");
var multButton = document.querySelector("#mult");
var divideButton = document.querySelector("#divide");
var resultButton = document.querySelector("#result");
var clearButton = document.querySelector("#clear");
var fullClearButton = document.querySelector("#full-clear");
var negativeButton = document.querySelector("#negative");
var decimalButton = document.querySelector("#decimal");
var sqrtButton = document.querySelector("#sqrt");
var degreeButton = document.querySelector("#degree");
var currentNumberInMemory = 0;
var isNumberInMemory = false;
var operationInMemory = "";
numbers.forEach(function (number) {
    number.addEventListener("click", function (event) { return pressNumber(event); });
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
function getDecimal() {
    if (!display.value.includes(".")) {
        display.value += ".";
    }
}
function calcSquare() {
    if (+display.value < 0) {
        console.log(calcElement);
        display.value = "Error";
        display.style.color = "red";
        calcElement.classList.add('shake');
        setTimeout(function () {
            calcElement.classList.remove('shake');
            display.value = "0";
            display.style.color = "white";
        }, 1300);
    }
    else {
        display.value = String(Math.sqrt(Number(display.value)));
    }
}
function showResult() {
    var localValue = Number(display.value);
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
function doNegative() {
    display.value = String(-display.value);
}
function pressNumber(event) {
    var number = event.target.value;
    if (isNumberInMemory) {
        display.value = number;
        isNumberInMemory = false;
    }
    else {
        if (display.value === "0") {
            display.value = number;
        }
        else {
            display.value += number;
        }
    }
}
function pressDegree() {
    if (operationInMemory === "XY" && !isNumberInMemory) {
        if (currentNumberInMemory < 0) {
            display.value = String(-Math.pow(currentNumberInMemory * (-1), Number(display.value)));
        }
        else {
            display.value = String(Math.pow(currentNumberInMemory, Number(display.value)));
        }
    }
    else {
        operationInMemory = "XY";
    }
    isNumberInMemory = true;
    currentNumberInMemory = Number(display.value);
}
function calcDegree(a, b) {
    if (a < 0) {
        a *= -1;
        a = Math.pow(a, b);
        a *= -1;
    }
    else {
        a = Math.pow(a, b);
    }
    return a;
}
function pressPlus() {
    if (operationInMemory === "+" && !isNumberInMemory) {
        display.value = String(currentNumberInMemory + Number(display.value));
    }
    else {
        operationInMemory = "+";
    }
    isNumberInMemory = true;
    currentNumberInMemory = Number(display.value);
}
function pressMinus() {
    if (operationInMemory === "-" && !isNumberInMemory) {
        display.value = String(currentNumberInMemory - Number(display.value));
    }
    else {
        operationInMemory = "-";
    }
    isNumberInMemory = true;
    currentNumberInMemory = Number(display.value);
}
function pressMult() {
    if (operationInMemory === "*" && !isNumberInMemory) {
        display.value = String(currentNumberInMemory * Number(display.value));
    }
    else {
        operationInMemory = "*";
    }
    isNumberInMemory = true;
    currentNumberInMemory = Number(display.value);
}
function pressDivide() {
    if (operationInMemory === "/" && !isNumberInMemory) {
        display.value = String(currentNumberInMemory / Number(display.value));
    }
    else {
        operationInMemory = "/";
    }
    isNumberInMemory = true;
    currentNumberInMemory = Number(display.value);
}
function clearEntry() {
    display.value = "0";
}
function fullClear() {
    display.value = "0";
    isNumberInMemory = false;
    operationInMemory = "";
    currentNumberInMemory = 0;
}
window.addEventListener("click", function () {
    console.log("operationInMemory", operationInMemory);
    console.log("isNumberInMemory", isNumberInMemory);
    console.log("currentNumberInMemory", currentNumberInMemory);
    console.log("display.value", display.value);
    console.log("----------");
});
function animateAnswer() {
}
//# sourceMappingURL=app.js.map

