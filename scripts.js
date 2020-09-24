let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operator');
let clearBtns = document.querySelectorAll('.clear-btn');
let decimalB = document.getElementById('decimal');
let resultBtn = document.getElementById('result');

for (let i = 0; i < numbers.length; i++) {
    let number = numbers [i];
		number.addEventListener('click',  function (e) {
			numberPress(e.target.textContent);
		}); 
};

for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations [i];
    operationBtn.addEventListener('click', function (e) {
			console.log(e.target.textContent);
			operation();
		});
};

for (let i = 0; i < clearBtns.length; i++) {
	let clearBtn = clearBtns [i];
	clearBtn.addEventListener('click', function (e) {
		clear(e.srcElement.id)
	});
};

resultBtn.addEventListener('click', result);

decimalB.addEventListener('click', decimal);

function numberPress(number){
    console.log('Клик по кнопке с номером ' + number + '!');
};

function operation(argument) {
	console.log('Клик по кнопке с операцией!');
};

function clear(id) {
	console.log('Клик по кнопке ' + id + '!');
};

function decimal(argument) {
	console.log('Клик по кнопке с десятичной дробью!');
};

function result(argument) {
	console.log('Клик по кнопке с результатом!');
}

