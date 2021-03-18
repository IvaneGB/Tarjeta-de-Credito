const validator = {

    isValid: function(cardNumber) {

        let inverter = Array.from(cardNumber).reverse();
        console.log(inverter);

        let counter = 0;

        for (let i = 0; i < inverter.length; i++) {

            if (i % 2 === 1) {

                let impar = parseInt(inverter[i]) * 2;
                if (impar >= 10) {

                    let firstDigit = parseInt(impar.toString()[0]);
                    let seconDigit = parseInt(impar.toString()[1]);
                    let sumaDigits = firstDigit + seconDigit;

                    counter = counter + sumaDigits;

                } else {
                    counter = counter + impar;

                }
            } else {

                let par = parseInt(inverter[i]);
                counter = counter + par;

            }
        }

        if (counter % 10 == 0) {
            return true;
        } else {
            return false;
        }
    },

    maskify: function(cardNum) {


        let arrayFromN = Array.from(cardNum).reverse();



        // separando los ultimos 4 digitos del array

        let arrayUno = arrayFromN.slice(0, 4);

        arrayUno = arrayUno.reverse().toString()
        arrayUno = arrayUno.replace(/,/g, "");


        // Cortar el resto del array 
        let arrayDos = arrayFromN.slice(4);

        arrayDos = arrayDos.reverse().toString();

        arrayDos = arrayDos.replace(/,/g, "");
        arrayDos = arrayDos.replace(/./g, "#");


        let result = arrayDos + arrayUno;

        return result;

    }
};







export default validator;