// Problema Contextualizado:
// Imagina que tienes un array que representa la temperatura diaria durante un período de tiempo. Quieres encontrar el promedio de temperatura más alto durante un período de días consecutivos. Para ello, puedes utilizar el algoritmo de "Sliding Window" para mover una ventana a lo largo del array y calcular el promedio de temperatura dentro de esa ventana en cada posición.

// Ejemplo:
// Supongamos que tenemos el siguiente array que representa la temperatura diaria durante una semana:

const temperaturas = [23, 25, 27, 29, 24, 26, 28];

// Queremos encontrar el promedio de temperatura más alto durante un período de 3 días consecutivos.

// Algoritmo de Sliding Window:
// Vamos a definir una ventana de tamaño 3 que se deslizará a lo largo del array. En cada posición de la ventana, calcularemos el promedio de las temperaturas dentro de esa ventana y nos quedaremos con el máximo.

function promedioTemperatura(temp, ventana) {
  // caso especial
  if (temp.length < ventana) return null;

  let maxSum = 0;

  // guardando las sumas temporalmente
  let temporalSum = 0;

  // primera iteracion de los primeros elementos del arrelgo
  for (i = 0; i < ventana; ++i) {
    maxSum += temp[i];
  }

  console.log(maxSum);
  temporalSum = maxSum;

  for (let i = ventana; i < temp.length; i++) {
    console.log(i);
    temporalSum = temporalSum - temp[i - ventana] + temp[i];
    
    console.log({ temporalSum }, "prom: " + temporalSum / ventana);
    maxSum = Math.max(maxSum, temporalSum);
  }

  return maxSum / ventana;
}

promedioTemperatura(temperaturas, 3);


// Justificación del Nombre "Sliding Window":
// El nombre "Sliding Window" se debe a que la ventana, que es un intervalo de elementos del array, "se desliza" a lo largo del array en cada iteración del algoritmo. En cada paso, la ventana se mueve hacia la derecha (o izquierda, dependiendo del problema) y "desplaza" su posición. Esto nos permite analizar diferentes subconjuntos de elementos del array de manera eficiente sin necesidad de recorrer todo el array en cada iteración.
