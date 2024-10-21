function clearScreen() {
    document.getElementById('screen').innerText = '';
}

function deleteLast() {
    let screen = document.getElementById('screen');
    screen.innerText = screen.innerText.slice(0, -1);
}

function inputNumber(number) {
    document.getElementById('screen').innerText += number;
}

function inputOperator(operator) {
    let screen = document.getElementById('screen');
    let lastChar = screen.innerText.slice(-1);
    if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
        screen.innerText += operator;
    }
}

function calculateResult() {
    let screen = document.getElementById('screen');
    try {
        screen.innerText = eval(screen.innerText);
    } catch {
        screen.innerText = 'Error';
    }
}
