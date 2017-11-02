var operador1, operador2, operacao, estado;
var visor;

function reset() {
	operador1 = "0";
	operador2 = "0";
	operacao = null;
	estado = 1;
	visor.value = "0";
}

function btnClick(objeto) {
	var valor = objeto.value;

	if (valor == 'Limpar') {
		reset();
		return;
	}

	if (valor == '=') {
		var resultado;

		switch (operacao) {
			case '+':
				resultado = parseFloat(operador1) + parseFloat(operador2);
				break;
			case '-':
				resultado = parseFloat(operador1) - parseFloat(operador2);
				break;
			case '*':
				resultado = parseFloat(operador1) * parseFloat(operador2);
				break;
			case '/':
				resultado = parseFloat(operador1) / parseFloat(operador2);
				break;
		}

		visor.value = resultado.toString();
		estado = 1;
		return;
	}

	if ((valor == '+') || (valor == '-') || (valor == '*') || (valor == '/')) {
		operacao = valor;
		estado = 2;
		return;
	}

	if ((valor == '.') || (valor >= '0') && (valor <= '9')) {
		
		if(estado == 1) {
			operador1 += valor;
			visor.value = parseFloat(operador1).toString();
		}

		else if(estado == 2) {
			operador2 += valor;
			visor.value = parseFloat(operador2).toString();
		}
	}
}

function inicializa_pagina() {
	visor = document.getElementById("visor");
	reset();
}