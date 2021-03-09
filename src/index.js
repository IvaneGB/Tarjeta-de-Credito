import validator from './validator.js';

console.log(validator);




// Mostrar numero en la tarjeta


let nUmber = document.getElementById('number')



function mNumber() {

    let n = nUmber.value;






    let card = document.getElementById('numbers');



    card.innerHTML = n;

}

nUmber.addEventListener('keyup', mNumber, true);


// mostrar Nombre en la tarjeta

let nAme = document.getElementById('name')


function mName() {

    let nombre = nAme.value;

    let card = document.getElementById('nombre');

    card.innerHTML = nombre;

}

nAme.addEventListener('keyup', mName, true);


// Mostrar la fecha en la tarjeta

let fecha = document.getElementById('input3')


function mDate() {

    let f = fecha.value;

    let card = document.getElementById('date');

    card.innerHTML = f;

}

fecha.addEventListener('keyup', mDate, true);


// Mostrar la clave en la tarjeta

let clave = document.getElementById('input4')


function mClave() {

    let c = clave.value;

    let card = document.getElementById('clave');

    card.innerHTML = c;

}

clave.addEventListener('keyup', mClave, true);


// CAPTURAR LOS NUMEROS Y MOSTARLOS EN UN CONSOLE LOG 

let boton = document.getElementById('btn');


function show() {

    let n = nUmber.value;




    let checkIsValid = validator.isValid(n);

    if (checkIsValid == true) {

        document.getElementById('validacion-true').style.display = 'block';
    } else {

        document.getElementById('validacion-true').style.display = 'none';
    }

    if (checkIsValid == false) {
        document.getElementById('validacion-false').style.display = 'block';
    } else {
        document.getElementById('validacion-false').style.display = 'none';
    }


}


boton.addEventListener('click', show, true);