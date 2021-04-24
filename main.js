const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearButtons = document.querySelectorAll('.clear-btn');
const decimalButton = document.getElementById('decimal');
const resultButton = document.getElementById('result');
const display = document.getElementById('display');
const sqrtButton = document.getElementById('sqrt');
const negativeButton = document.getElementById('negative');

let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';

for (let i = 0; i < numbers.length; i++) {
	const number = numbers[i];
	number.addEventListener('click', function(e) {
		numberPress(e.target.textContent);
	});
}

for (let i = 0; i < operators.length; i++) {
	const operator = operators[i];
	operator.addEventListener('click', function(e) {
		operation(e.target.textContent);
	});
}

for (let i = 0; i < clearButtons.length; i++) {
	const clearButton = clearButtons[i];
	clearButton.addEventListener('click', function(e) {
		clear(e.srcElement.id);
	});
}

decimalButton.addEventListener('click', decimal);

resultButton.addEventListener('click', result);

sqrtButton.addEventListener('click', square);

negativeButton.addEventListener('click', negative);

function numberPress(number) {
	if (MemoryNewNumber) {
		display.value = number;
		MemoryNewNumber = false;
	} else {
		if (display.value === '0') {
			display.value = number;
		} else {
			display.value += number;
		}
	}
}

function operation(symbol) {
	let localOperationMemory = display.value;

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
}

function decimal(argument) {
	let localDecimalMemory = display.value;

	if (MemoryNewNumber) {
		localDecimalMemory = '0.';
		MemoryNewNumber = false;
	} else {
		if (localDecimalMemory.indexOf('.') === -1) {
			localDecimalMemory += '.';
		}
		display.value = localDecimalMemory;
	}
}

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
}

function square() {
	let localSquareMemory = display.value;
	if (localSquareMemory < 0) {
		MemoryCurrentNumber = 'Error';
	} else {
		MemoryCurrentNumber = Math.sqrt(parseFloat(localSquareMemory));
	}
	display.value = MemoryCurrentNumber;
}

function negative() {
    var localNegativeMemory = display.value;
    localNegativeMemory = -localNegativeMemory;
    display.value = localNegativeMemory;
};
