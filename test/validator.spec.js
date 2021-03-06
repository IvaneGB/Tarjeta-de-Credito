// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
    it('debería ser un objeto', () => {
        expect(typeof validator).toBe('object');
    });

    describe('validator.isValid', () => {
        it('debería ser una función', () => {
            expect(typeof validator.isValid).toBe('function');
        });

        it('debería retornar true para "4083952015263"', () => {
            // escribe aquí tu test
            const resultado = validator.isValid("4083952015263");

            expect(resultado).toBe(true);
        });

        it('debería retornar true para "79927398713"', () => {
            const resultado = validator.isValid("79927398713");

            expect(resultado).toBe(true);
        });

        it('debería retornar false para "1234567890"', () => {
            const resultado = validator.isValid("1234567890");

            expect(resultado).toBe(false);
        });
    });

    describe('validator.maskify', () => {
        it('debería ser una función', () => {
            expect(typeof validator.maskify).toBe('function');
        });

        it.skip('Debería retornar "############5616" para "4556364607935616"', () => {
            // escribe aquí tu test
        });

        it.skip('Debería retornar "1" para "1"', () => {
            // escribe aquí tu test
        });

        it.skip('Debería retornar "######orld" para "helloworld"', () => {
            // escribe aquí tu test
        });
    });
});