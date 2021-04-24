var numbers = document.querySelectorAll('.number'),
    operators = document.querySelectorAll('.operator'),
    clearButtons = document.querySelectorAll('.clear-btn'),
    decimalButton = document.getElementById('decimal'),
    resultButton = document.getElementById('result'),
    display = document.getElementById('display'),
    sqrtButton = document.getElementById('sqrt'),
    negativeButton = document.getElementById('negative'),

    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    })
};
for (var i = 0; i < operators.length; i++) {
    var operator = operators[i];
    operator.addEventListener('click', function (e) {
        operation(e.target.textContent);
    })
};

for (var i = 0; i < clearButtons.length; i++) {
    var clearButton = clearButtons[i];
    clearButton.addEventListener('click', function (e) {
        clear(e.srcElement.id);
    })
};

decimalButton.addEventListener('click', decimal);

resultButton.addEventListener('click', result);

sqrtButton.addEventListener('click', square);

negativeButton.addEventListener('click', negative)

function numberPress(number) {
    if (MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        };
    };

};

function operation(symbol) {

    var localOperationMemory = display.value;

    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === 'Xy') {
            if (MemoryCurrentNumber < 0) {
                MemoryCurrentNumber *= -1;
                MemoryCurrentNumber = Math.pow(MemoryCurrentNumber, localOperationMemory);
                MemoryCurrentNumber *= -1;
            } else {
                MemoryCurrentNumber = Math.pow(MemoryCurrentNumber, localOperationMemory);
            }
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }
        display.value = parseFloat(MemoryCurrentNumber.toFixed(10));
        MemoryPendingOperation = symbol;
    }
};

function decimal(argument) {
    var localDecimalMemory = display.value;

    if (MemoryNewNumber) {
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        };
        display.value = localDecimalMemory;

    };
};

function clear(id) {
    if (id === 'ce') {
        display.value = '0';
        MemoryNewNumber = true;
    } else if (id === 'c') {
        display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
    }
};

function square() {
    var localSquareMemory = display.value;
    if (localSquareMemory < 0) {
        MemoryCurrentNumber = 'Error';
    } else {
        MemoryCurrentNumber = Math.sqrt(parseFloat(localSquareMemory));
    }
    display.value = MemoryCurrentNumber;


};

function getFactorial(n) {
    const arr = Array.apply(null, {
        length: n + 1
    }).map(Number.call, Number);
    arr.splice(0, 1);
    return arr.reduce((sum, current) => sum * current, 1);
}

function getIntervalArray(start, end) {
    const arr = [start, ...end];
    return arr;
}

function isInsideCircle(circle, point) {
    const a = circle.center.x - circle.radius;
    const b = circle.center.x + circle.radius;
    const c = circle.center.y - circle.radius;
    const d = circle.center.y + circle.radius;
    if (point.x > a && point.x < b && point.y > c && point.y < d) return true;
    return false;
}

function getDigitalRoot(n) {
    return (n - 1) % 9 + 1
}

const num = BigInt('1233456789098765432');
const num2 = BigInt('1234567876543')
const regexp = 'f';
const str = 'function'

let fruit = 'pipec'
const max = {
    age: 24,
    0: 'programmist',
    [fruit]: 'apple'
}


console.log(t)
function repeat3() {
    console.log(t)
}
const t = 42
repeat3()


//console.log(getDigitalRoot(87354));