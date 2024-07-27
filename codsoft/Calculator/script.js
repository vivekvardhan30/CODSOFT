let display = document.querySelector('.calculator-display');
let memory = 0;

function Operation(operation) {
    if (operation === 'clearMemory') {
        memory = 0;
    } else if (operation === 'recallMemory') {
        display.value = memory;
    } else if (operation === 'addToMemory') {
        memory += parseFloat(display.value) || 0;
    } else if (operation === 'subtractFromMemory') {
        memory -= parseFloat(display.value) || 0;
    } else if (operation === 'storeMemory') {
        memory = parseFloat(display.value) || 0;
    } else if (operation === 'clearEntry') {
        display.value = '';
    } else if (operation === 'clearAll') {
        display.value = '';
        memory = 0;
    } else if (operation === 'backspace') {
        display.value = display.value.slice(0, -1);
    } else if (operation === 'appendCharacter') {
        display.value += arguments[1];
    } else if (operation === 'toggleSign') {
        display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
    } else if (operation === 'calculate') {
        try {
            display.value = eval(display.value.replace('√', 'Math.sqrt').replace('^', '**'));
        } catch {
            display.value = 'Error';
        }
    }
}