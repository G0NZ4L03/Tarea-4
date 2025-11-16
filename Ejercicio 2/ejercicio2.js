/*EJERCICIO 2. Define una clase que permita crear objetos de tipo banco con las siguientes características:
(6) Un atributo nombre que pasaremos como parámetro al crear el objetos.(0.25 pto)
El objeto permitirá gestionar cuentas(de 5 dígitos del 000001 al 599999) y el saldo de las cuentas, para lo que utilizaremos los siguientes métodos:
*/

class banco {

    constructor(nombre) {
        this.nombre = nombre;
        this.cuentas = {};
    }

    // Creo esta funcion usando padStart para añadir 0 y cumplir la nomenclatura del enunciado 000001 al 599999 (lo hago con 6 digitos)
    añadirDigitos(cod) {
        return String(cod).padStart(6, "0");
    }

    /*(7) Crear cuenta: Recibe como parámetros el código de cuenta y el saldo inicial(por defecto tomará el valor 0 si no se pasa el parámetro). */

    crearCuenta(codigoCuenta, saldoInicial) {
        //le aplico la anterior funcion al numero recibido
        codigoCuenta = this.añadirDigitos(codigoCuenta);
        //hago la comprobacion del rango antes que nada y mando el error terminando la ejecucion
        if (codigoCuenta < "000001" || codigoCuenta > "599999") {
            return console.log("Error: El código de cuenta debe estar entre 000001 y 599999");
        }
        //si no intruducen saldo inicial, por defecto sera 0
        if (!saldoInicial) {
            saldoInicial = 0;
        }
        this.cuentas[codigoCuenta] = saldoInicial;
    }

    /*(8) Actualizar cuenta: Recibe como parámetros el código de cuenta y el ingreso(o extracción en negativo) y actualiza el saldo de la cuenta.Mostrará error si la cuenta no existe. */

    actualizarCuenta(codCuenta, modificacionSaldo) {
        if (!(codCuenta in this.cuentas)) {
            return console.log("Error: La cuenta no existe");
        }
        this.cuentas[codCuenta] =  this.cuentas[codCuenta] + modificacionSaldo;
    }
}

let miBanco = new banco("Banco regional");
//valido con saldo 0
miBanco.crearCuenta("000123");
//saldo inicial pero codigo fuera de rango
miBanco.crearCuenta("600000", 200);
//valido con saldo inicial
miBanco.crearCuenta("599999", 1500);
//añadiendo ceros al codigo
miBanco.crearCuenta("45", 500);

console.log("Ejercicios 6-7", miBanco.cuentas);

//añado ingreso
miBanco.actualizarCuenta("000123", 700);
//quito saldo
miBanco.actualizarCuenta("599999", -200);
//codigo no existente
miBanco.actualizarCuenta("123456", 200);

console.log("Ejercicio 8", miBanco.cuentas);



/*(9) Eliminar cuenta: Recibe como parámetro el código de cuenta y la elimina.Mostrará error si la cuenta no existe o si no tiene saldo 0, indicando cada caso. */



/*(10) Listar cuentas: Escribe en el documento el nombre del banco y la lista de cuentas con sus saldos de forma similar a la mostrada en la imagen siguiente.
    Realiza 3 llamadas al método para crear cuentas, y una llamada a cada uno de los otros métodos para demostrar su funcionamiento..*/
