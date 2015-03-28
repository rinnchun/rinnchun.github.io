$(function(){

	var currentText = '' ; 
	var textMemory = '';
	var operator = '%';


	$('#btn1').on('click', function(){
	currentText = currentText + '1';
	render();
})
	$('#btn2').on('click', function(){
	currentText = currentText + '2';
	render();
})
	$('#btn3').on('click', function(){
	currentText = currentText + '3';
	render();
})
	$('#btn4').on('click', function(){
	currentText = currentText + '4';
	render();
})
	$('#btn5').on('click', function(){
	currentText = currentText + '5';
	render();
})
	$('#btn6').on('click', function(){
	currentText = currentText + '6';
	render();
})
	$('#btn7').on('click', function(){
	currentText = currentText + '7';
	render();
})
	$('#btn8').on('click', function(){
	currentText = currentText + '8';
	render();
})
	$('#btn9').on('click', function(){
	currentText = currentText + '9';
	render();
})
	$('#btn0').on('click', function(){
	currentText = currentText + '0';
	render();

})
	$('#btnplus').on('click', function(){
	operator = '+';
	saveText();
	
})
	$('#btnminus').on('click', function(){
	operator = '-';
	saveText();
	
})
	$('#btnmultiple').on('click', function(){
	operator = '*';
	saveText();
	
})
	$('#btndivide').on('click', function(){
	operator = '/';
	saveText();
})
	$('#btnequal').on('click', function(){
	if (operator == '+') {
		currentText = parseInt(textMemory) + parseInt(currentText);
		render();
	}
	else if (operator == '-'){
		currentText = parseInt(textMemory) - parseInt(currentText);
		render();
	}
	else if (operator == '*'){
		currentText = parseInt(textMemory) * parseInt(currentText);
		render();
	}
	else if (operator == '/'){
		currentText = parseInt(textMemory) / parseInt(currentText);
		render();
	}
})
	$('#btnclear').on('click', function(){
	currentText = ''
	textMemory = 0;
	operator = '%';
	render()
	
})
	function saveText(){
		textMemory = currentText
		currentText = ''
	}

	function render () {
		$('#screen').text(currentText)
	}
});