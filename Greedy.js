/*
 Greedy es el problema de encontrar la cantidad mínima de monedas necesarias para dar cambio. Aquí tienes una descripción del problema y cómo se puede resolver utilizando el enfoque Greedy:
 
 */

/*Dado un conjunto de monedas de diferentes valores y una cantidad específica de dinero, ¿cuál es la cantidad mínima de monedas necesarias para dar el cambio?

Ejemplo:
Supongamos que tenemos las siguientes monedas disponibles: 1, 5, 10, 25 centavos, y queremos dar cambio por 47 centavos.
*/

function minCoins(monedas, cantidad) {
  monedas.sort((a, b) => b - a); // Ordenar monedas en orden descendente
  let cambio = 0;
  let cambioMoneda = {};

  for (const moneda of monedas) {
    cambioMoneda[moneda] = 0;
    console.log({ moneda, cantidad });
    while (cantidad >= moneda) {
      cantidad -= moneda;
      cambio++;
      cambioMoneda[moneda]++;
    }
  }

  return {
    cambio,
    cambioMoneda,
  };
}

// Ejemplo de uso
const coins = [1, 5, 10];
const amount = 47;
console.log("Cantidad mínima de monedas necesarias:", minCoins(coins, amount)); // Devuelve 5

/*
Tomamos Decisiones Locales:
Comenzamos con la moneda de mayor valor, 25 centavos. Tomamos 1 moneda de 25 centavos.
Nos queda un cambio de 47 - 25 = 22 centavos.
La siguiente moneda disponible es de 10 centavos. Tomamos 2 monedas de 10 centavos.
Nos queda un cambio de 22 - 20 = 2 centavos.
La siguiente moneda disponible es de 1 centavo. Tomamos 2 monedas de 1 centavo.
*/
