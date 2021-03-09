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

    }

};

export default validator;