import validator from './validator.js';

// mostrar Nombre en la tarjeta

let nAme = document.getElementById('name-input')


function mName() {

    let nombre = nAme.value;

    let card = document.getElementById('name-Card');

    card.innerHTML = nombre;

}

function validateName() {
    let nombre = nAme.value;
    // Eliminar caracteres no alfabéticos
    nAme.value = nombre.replace(/[^a-zA-Z\s]/g, '');
}

nAme.addEventListener('keyup', function() {
    validateName();
    mName();
}, true);


// Mostrar la fecha en la tarjeta

let fecha = document.getElementById('input3')

function validateDate() {
    let value = fecha.value;
    // Eliminar cualquier carácter que no sea un número o una barra
    value = value.replace(/[^0-9\/]/g, '');

    // Insertar una barra después de dos dígitos si no está ya presente
    if (value.length === 2 && !value.includes('/')) {
        value = value + '/';
    }

    // Limitar la longitud máxima a 5 caracteres
    if (value.length > 5) {
        value = value.slice(0, 5);
    }

    fecha.value = value;
}


function mDate() {

    let f = fecha.value;

    let card = document.getElementById('date-Card');

    card.innerHTML = f;

}

fecha.addEventListener('keyup', function() {
    validateDate();
    mDate();
}, true);


// Mostrar la clave en la tarjeta

let clave = document.getElementById('input4')

function validateClave() {
    let value = clave.value;
    // Eliminar cualquier carácter que no sea un número
    value = value.replace(/[^0-9]/g, '');

    // Limitar la longitud máxima a 3 caracteres
    if (value.length > 3) {
        value = value.slice(0, 3);
    }

    clave.value = value;
}

function mClave() {

    let c = clave.value;

    let card = document.getElementById('clave');

    card.innerHTML = c;

}

clave.addEventListener('keyup', function() {
    validateClave();
    mClave();
}, true);


// CAPTURAR LOS NÚMEROS Y MOSTRARLOS EN PANTALLA SI ES VALIDA O NO
let botonValidar = document.getElementById('btn-validar');

function showNotification(message, isValid) {
    let notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = 'notification'; // Reset classes

    if (isValid) {
        notification.classList.add('show', 'success');
    } else {
        notification.classList.add('show', 'error');
    }

    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000); // Hide after 3 seconds
}

function show() {
    let n = nUmber.value;
    let checkIsValid = validator.isValid(n);

    if (checkIsValid) {
        showNotification('Tarjeta válida', true);
    } else {
        showNotification('Tarjeta no válida', false);
    }
}

botonValidar.addEventListener('click', function() {
    if (areAllFieldsComplete()) {
        show();
    } else {
        showNotification('Por favor, completa todos los campos.', false);
    }
}, true);


// Mostrar asteriscos en los numeros ,menos en los 4 ultimos

let nUmber = document.getElementById('number');

function mostrarNumber() {

    let n = nUmber.value;

    let card = document.getElementById('number-Card');



    // mostar los dos arrays juntos
    card.innerHTML = validator.maskify(n);

}
nUmber.addEventListener('keyup', mostrarNumber);

// Verificar si todos los campos están completos
function areAllFieldsComplete() {
    return nUmber.value !== '' && nAme.value !== '' && fecha.value !== '' && clave.value !== '';
}
