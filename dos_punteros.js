/*

Imagina que estás desarrollando una aplicación de comercio electrónico y quieres implementar una función que te ayude a identificar productos complementarios que puedas ofrecer como sugerencia a los clientes. Para esto, tienes un array de precios de productos ordenados de forma ascendente y conoces el presupuesto máximo que tiene el cliente. Quieres encontrar dos productos que sumen exactamente el presupuesto máximo del cliente.

Ejercicio:
Implementa una función llamada sugerirProductos que tome como argumentos un array de precios de productos precios ordenado de forma ascendente y un presupuesto máximo presupuesto, y devuelva un array con los índices de los dos productos cuya suma sea igual al presupuesto máximo.

*/

// Algoritmo de los dos punteros
function sugerirProductos(precios, presupuesto) {
  // definir los dos extremos
  let left = 0;
  let right = precios.at(-1);

  while (left < right) {
    // mientras left es menor a cero
    const suma = precios[left] + precios[right];
    if (suma === presupuesto) {
      return [left, right];
    } else if (suma < presupuesto) {
      left++;
    } else {
      right--;
    }
  }
}

const precios = [10, 20, 30, 40, 50];
const presupuesto = 70;

console.log(sugerirProductos(precios, presupuesto)); // Salida: [2, 3]

// El algoritmo que estamos utilizando se llama "algoritmo de dos punteros" debido a que hace uso de dos punteros (o índices) para recorrer el array. Estos dos punteros avanzan o retroceden en el array de acuerdo a ciertas condiciones, y su movimiento está determinado por el problema específico que estamos tratando de resolver.

// En el contexto de nuestro problema, utilizamos dos punteros, left y right, que inicialmente apuntan al principio y al final del array, respectivamente. Estos punteros se mueven hacia el centro del array a medida que iteramos sobre él. La idea es explorar el array de forma simultánea desde ambos extremos hacia el centro, lo que nos permite comparar elementos en posiciones opuestas.
