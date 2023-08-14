
/*FUNCIONES DE LOS OPERADORES*/
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error Op2 = 0"; /*No es posible calcular la división entre cero*/
    }
}

function modulo(a, b) {
    if (b !== 0) {
        return a % b;
    } else {
        return "Error Op2 = 0"; /*No es posible calcular el módulo entre cero*/
    }
}


/*FUNCION CALCULAR RESULTADO*/
function calcular() {

    /*SELECCION DE LOS INPUTS Y DESPLEGABLE DEL HTML*/
    const operation = document.querySelector("#operador-select").value;
    const num1 = parseFloat(document.querySelector("#op1").value);
    const num2 = parseFloat(document.querySelector("#op2").value);
    let result;

    /*INGRESA NUMEROS VALIDOS*/
    if (isNaN(num1) || isNaN(num2)) {
        document.querySelector("#resultado").innerText = "Error";
        return;
    }

    /*SELECCION DE OPERACIONES MATEMATICAS*/
    if (operation === "suma") {
        result = suma(num1, num2);
    } else if (operation === "resta") {
        result = resta(num1, num2);
    } else if (operation === "multiplicacion") {
        result = multiplicacion(num1, num2);
    } else if (operation === "division") {
        result = division(num1, num2);
    } else if (operation === "modulo") {
        result = modulo(num1, num2);
    } else {
        result = "Seleccionar operador";
    }

    /*RESULTADO DEMASIADO GRANDE O DEMASIADO PEQUEÑO*/
    if(result > 10**10) {
        document.querySelector("#resultado").innerText = "demasiado grande";
    } else if (result < Infinity/-2) {
        document.querySelector("#resultado").innerText = "demasiado pequeño";
    } else {
        document.querySelector("#resultado").innerText = result;
    }
}

/*FUNCION LIMPIAR CAMPOS*/
function limpiar() {
    document.querySelector("#op1").value = "";
    document.querySelector("#op2").value = "";
    document.querySelector("#resultado").innerText = "0";
    document.querySelector("#operador-select").value = "";
}


/*---------------MODO OSCURO---------------*/

const colorSwitch = document.querySelector('#switch input[type="checkbox"]');

/*FUNCION PARA CAMBIAR DE MODO */
function cambiaTema(ev) {
    if(ev.target.checked) {
        document.documentElement.setAttribute('tema', 'light');
    } else {
        document.documentElement.setAttribute('tema', 'dark');
    }
}

colorSwitch.addEventListener('change', cambiaTema);