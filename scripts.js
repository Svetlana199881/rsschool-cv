let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operator');
let clearBtns = document.querySelectorAll('.clear-btn');
let decimalB = document.getElementById('decimal');
let result = document.getElementById('result');

for (let i = 0; i < numbers.length; i++) {
    let number = numbers [i];
    number.addEventListener('click',  numberPress); 
};

for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations [i];
    operationBtn.addEventListener('click', operation);
};

for (let i = 0; i < clearBtns.length; i++) {
	let clearBtn = clearBtns [i];
	clearBtn.addEventListener('click', function (e) {
		console.log(e.srcElement.id);
		console.log('Клик по кнопке с CE или C!');
	});
};

result.addEventListener('click', function (e) {
    console.log('Клик по кнопке с C!');
});

decimalB.addEventListener('click', function (e) {
    console.log('Клик по кнопке с десятичной дробью!');
});

function numberPress(){
    console.log('Клик по кнопке с номером!');
};

function operation(argument) {
	console.log('Клик по кнопке с операцией!');
};

function clear(argument) {

};

function decimal(argument) {

};



