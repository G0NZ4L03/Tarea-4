/*EJERCICIO 2. Define una clase que permita crear objetos de tipo banco con las siguientes características:
(6) Un atributo nombre que pasaremos como parámetro al crear el objetos.(0.25 pto)
El objeto permitirá gestionar cuentas(de 5 dígitos del 000001 al 599999) y el saldo de las cuentas, para lo que utilizaremos los siguientes métodos:
*/

class banco {

    constructor(nombre) {
        this.nombre = nombre;
        this.cuentas = {};
    }
/*(7) Crear cuenta: Recibe como parámetros el código de cuenta y el saldo inicial(por defecto tomará el valor 0 si no se pasa el parámetro). */

    CrearCuenta(codigoCuenta,saldoInicial) {
        this.cuentas = {[codigoCuenta]: saldoInicial
        }
//TERMINAR
}
}

let miBanco = new banco("Banco personal");
miBanco.CrearCuenta("45567",345);
console.log(miBanco.cuentas);




/*(8) Actualizar cuenta: Recibe como parámetros el código de cuenta y el ingreso(o extracción en negativo) y actualiza el saldo de la cuenta.Mostrará error si la cuenta no existe. */



/*(9) Eliminar cuenta: Recibe como parámetro el código de cuenta y la elimina.Mostrará error si la cuenta no existe o si no tiene saldo 0, indicando cada caso. */



/*(10) Listar cuentas: Escribe en el documento el nombre del banco y la lista de cuentas con sus saldos de forma similar a la mostrada en la imagen siguiente.
    Realiza 3 llamadas al método para crear cuentas, y una llamada a cada uno de los otros métodos para demostrar su funcionamiento..*/


