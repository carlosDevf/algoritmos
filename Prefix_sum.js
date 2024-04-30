//Prefix Sum
/*
El Prefix Sum, también conocido como suma acumulativa o suma prefija, es una técnica comúnmente utilizada en programación para calcular rápidamente la suma de elementos en un rango específico de un array.
*/

//Suma acumulativa
// Función para calcular el array de suma acumulativa
function prefixSum(arr) {
  const n = arr.length;
  const prefixSumArray = new Array(n).fill(0);
  // Calculamos el primer elemento del array de suma acumulativa
  prefixSumArray[0] = arr[0];
  // Calculamos el resto de elementos del array de suma acumulativa
  for (let i = 1; i < n; i++) {
    // dia actual = i
    // dia anteriror = i - 1
    prefixSumArray[i] = prefixSumArray[i - 1] + arr[i];
  }

  return prefixSumArray;
}

// // // Ejemplo de uso
// // const arr = [1, 4, 2, 6, 3, 7, 5];
// // const prefixSumArray = prefixSum(arr);
// // // console.log(prefixSumArray);

const sales = [
  10, 20, 15, 25, 30, 20, 10, 5, 15, 25, 20, 10, 30, 25, 20, 15, 10, 5, 15, 20,
  25, 30, 20, 15, 10, 5, 20, 25, 30, 15,
];
const startDay = 5; // Primer día del rango
const endDay = 15; // Último día del rango
const prefixSumArray = prefixSum(sales);
const sumInRange = prefixSumArray[endDay] - prefixSumArray[startDay - 1];
console.log(
  "La suma de las ventas del día " +
    startDay +
    " al día " +
    endDay +
    " es: " +
    sumInRange
);

/* explicacion de como esta asignando
const cosa = Array(5).fill(0);
cosa[4] = 5 + 10;
console.log(cosa)
*/

