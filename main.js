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

function negative() {
    var localNegativeMemory = display.value;
    localNegativeMemory = -localNegativeMemory;
    display.value = localNegativeMemory;
};
