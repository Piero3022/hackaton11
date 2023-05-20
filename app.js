const calculatorScreen = document.querySelector('.calculator-screen'); // se selecciona todos los elementos que tengan la clase .calculator-screen

const updateScreen = (number) => {
    calculatorScreen.value = number;
};  // se crea la funcion y actualiza el valor en html por el number ingresado

let prevInput = '0'; // alamcenamos el valor previo
let calculationOperator = ''; // variable que almacena el valor del operador
let currentInput = '0'; // variable que almacena el valor post

const inputNumber = (number) => { // esta funcion recibe los numeros para ingresarlos a la calculadora (currentInput)
    if (currentInput === '0') { //
        currentInput = number;  // si es igual a 0, se reemplaza por el number
    } else {
        currentInput += number; // si ya tiene un nro, se agrega otro number al seleccionar
    }
};

const numbers = document.querySelectorAll(".number");  // estas seleccionan todos los elementos HTML de la clase .number
numbers.forEach((number) => {    //se recorre todos los numbers para cada elemento "number"
    number.addEventListener("click", (event) => { //se le asigna el evento click 
        inputNumber(event.target.value); // al click el inputNumber captara el valor del codigo html para almacenarlos en el curretInput
        updateScreen(currentInput); // muesta el valor del current input
    });
});

const operators = document.querySelectorAll(".operator"); // se seleccionan todos los elementos "operator"
const inputOperator = (operator) => {
    prevInput = currentInput; // se guarda el valor que se tiene como current
    calculationOperator = operator; // se almacena en la variable calculationOperator el operador
    updateScreen(operator); // se muestra en pantalla el operador 
    currentInput = '0'; // el valor como currentInput se regresa a 0 
};
operators.forEach((operator) => { // se asigna un evento como el codigo previo 
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value); // se toma el valor del codigo html mostrado 
    });
});

const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener("click", () => { // cuando se haga click en "=" se ejecutaran estos eventos
    calculate(); // calcular 
    updateScreen(currentInput); // mostrar
});

const calculate = () => {
    let result = 0;
    switch (calculationOperator) {
        case '+':
            result = parseInt(prevInput) + parseInt(currentInput);
            break;
        case '-':
            result = parseInt(prevInput) - parseInt(currentInput);
            break;
        case '*':
            result = parseInt(prevInput) * parseInt(currentInput);
            break;
        case '/':
            result = parseInt(prevInput) / parseInt(currentInput);
            break;
        case '%':
            result = (parseInt(prevInput) / 100) * parseInt(currentInput);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    calculationOperator = '';
};

const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => { // este evento es para regresar todos los valores a inicio
    clearAll(); // 
    updateScreen(currentInput);
});

const clearAll = () => { // cuando se presione este evento se tomaran estos valores, que luego seran mostrados 
    prevInput = '0';
    calculationOperator = '';
    currentInput = '0';
};
