/*Enunciado.
EJERCICIO 1. El archivo ejercicio.js contiene un array de objetos, añade al archivo la declaración de las siguientes funciones 
y al finalizar envía a consola una llamada a cada una de ellas para comprobar su funcionamiento, es decir console.log(funcion1(array,..))*/

//Array de datos del aula
let articulos = [
  { "codigo": 1, "descripcion": "mouse Inalámbrico", "precio": 25.99, "tipo": "Periféricos" },
  { "codigo": 2, "descripcion": "teclado Mecánico", "precio": 49.99, "tipo": "Periféricos" },
  { "codigo": 3, "descripcion": "Monitor 24 pulgadas", "precio": 179.99, "tipo": "Electrónica" },
  { "codigo": 4, "descripcion": "Disco duro externo 1TB", "precio": 89.99, "tipo": "Electrónica" },
  { "codigo": 5, "descripcion": "Auriculares con micrófono", "precio": 34.99, "tipo": "Periféricos" },
  { "codigo": 6, "descripcion": "Cable HDMI 2m", "precio": 12.99, "tipo": "Accesorios" },
  { "codigo": 7, "descripcion": "Cargador USB-C", "precio": 19.99, "tipo": "Accesorios" },
  { "codigo": 8, "descripcion": "lámpara LED de escritorio", "precio": 29.99, "tipo": "Mobiliario" },
  { "codigo": 9, "descripcion": "Silla ergonómica", "precio": 199.99, "tipo": "Mobiliario" },
  { "codigo": 10, "descripcion": "webcam Full HD", "precio": 69.99, "tipo": "Electrónica" },
  { "codigo": 11, "descripcion": "Tarjeta de memoria 128GB", "precio": 24.99, "tipo": "Accesorios" },
  { "codigo": 12, "descripcion": "Base para laptop ajustable", "precio": 39.99, "tipo": "Mobiliario" },
  { "codigo": 13, "descripcion": "Router WiFi 6", "precio": 129.99, "tipo": "Electrónica" },
  { "codigo": 14, "descripcion": "Impresora multifuncional", "precio": 249.99, "tipo": "Electrónica" },
  { "codigo": 15, "descripcion": "smartwatch deportivo", "precio": 59.99, "tipo": "Electrónica" },
  { "codigo": 16, "descripcion": "Cámara de seguridad inalámbrica", "precio": 99.99, "tipo": "Electrónica" },
  { "codigo": 17, "descripcion": "Micrófono de condensador", "precio": 74.99, "tipo": "Periféricos" },
  { "codigo": 18, "descripcion": "Controlador MIDI", "precio": 119.99, "tipo": "Periféricos" },
  { "codigo": 19, "descripcion": "altavoz Bluetooth Portátil", "precio": 45.99, "tipo": "Electrónica" },
  { "codigo": 20, "descripcion": "Kit de herramientas para PC", "precio": 18.99, "tipo": "Accesorios" }
]

/*(1) Escribe una función que reciba como parámetro el array de artículos, un tipo de artículo (por ejemplo, "Electrónica") y un precio máximo.
La función debe devolver un array con todos los artículos que pertenezcan a ese tipo y tengan un precio menor o igual al especificado. */

function articuloPorTipo(articulos, tipo, precioMaximo) {
  // Filtro el array por tipo Y precio maximo
  let arrayFiltrado = articulos.filter((elemento) => elemento.tipo === tipo && elemento.precio <= precioMaximo);
  return arrayFiltrado;
}

console.log("Ejercicio 1:");
console.log(articuloPorTipo(articulos, "Electrónica", 99));

/*(2) Escribe una función que reciba como parámetro el array de artículos y modifique las descripciones de los artículos para que 
todas las descripciones comiencen con mayúsculas y el resto de las letras estén en minúsculas. La función debe devolver el array modificado.*/

function ajusteDescripcion(articulos) {
  // Uso map para recorrer el array y modificar la primera letra de la descripción a mayúscula y luego vuelvo a coger la cadena y la sumo en minuscula pero quitando el primer valor (primera letra)
  let arrayModificado = articulos.map((elemento) => elemento.descripcion.toUpperCase().charAt(0) + elemento.descripcion.toLowerCase().slice(1));
  return arrayModificado;
}

console.log("Ejercicio 2:");
console.log(ajusteDescripcion(articulos));

/*(3) Escribe una función que reciba como parámetro el array de artículos y una cadena. La función debe devolver un array con los artículos 
que tienen esa cadena en la descripción. */

function filtrarPorDescripcion(articulos, cadena) {
 // Filtro el array comprobando si la descripcion incliye la cadena del parametro
  let arrayModificado = articulos.filter((elemento) => elemento.descripcion.includes(cadena));
  return arrayModificado;
}

console.log("Ejercicio 3:");
console.log(filtrarPorDescripcion(articulos, "herramientas"));

/*(4) Escribe una función que recibe como parámetro el array y un tipo de artículo, y devuelve un objeto con dos atributos; cantidad y preciomedio. 
que contendrán la cantidad y el precio medio de los artículos de ese tipo.

Ejemplo de parámetro: "Electrónica"
Ejemplo de salida: { "cantidad": 8, "preciomedio": 113.74 }*/

function comprobacionPorTipo(articulos, tipo) {

  //Filtro el array por el mismo tipo
  let arrayTipos = articulos.filter((elemento) => elemento.tipo === tipo);
  let cantidad = arrayTipos.length;
  let sumaTotal = 0;
  // Recorro el array filtrado y sumo todos los precios
  arrayTipos.forEach(element => {
    sumaTotal = sumaTotal + element.precio;
  });
  // Hago el precio medio y creo el objeto de salida
  let precioMedio = sumaTotal / cantidad;
  let objetoResuelto = { "cantidad": cantidad, "precio medio": precioMedio };

  return objetoResuelto;
}

console.log("Ejercicio 4:");
console.log(comprobacionPorTipo(articulos, "Electrónica"));


/*(5) Escribe una función que reorganice el array de artículos según el precio, en orden ascendente o descendente (según un parámetro de entrada).*/

function ordenPorPrecio(articulos, orden) {

  // Ordeno el array y compruebo el valor introducido ascendente o descendente
  let arrayOrdenado = articulos.sort((a, b) => {
    if (orden === "ascendente") {
      return a.precio - b.precio;
    } else if (orden === "descendente") {
      return b.precio - a.precio;
    }
  });

  return arrayOrdenado;
}

console.log("Ejercicio 5:");
console.log(ordenPorPrecio(articulos, "descendente"));