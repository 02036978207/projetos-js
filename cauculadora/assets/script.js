// Função para adicionar um número ou operador ao visor
function appendToDisplay(value) {
    const display = document.getElementById('resultado');
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Função para limpar o visor
function clearDisplay() {
    document.getElementById('resultado').innerText = '0';
}

// Função para apagar o último caracter do visor
function deleteLast() {
    const display = document.getElementById('resultado');
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
}

// Função para calcular o resultado da expressão
function calculate() {
    const display = document.getElementById('resultado');
    try {
        display.innerText = eval(display.innerText.replace('x', '*'));
    } catch (e) {
        display.innerText = 'Error';
    }
}

// Modificar a função appendToDisplay para lidar com o caso do '='
function appendToDisplay(value) {
    const display = document.getElementById('resultado');
    if (value === '=') {
        calculate();
    } else {
        if (display.innerText === '0' || display.innerText === 'Error') {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }
}