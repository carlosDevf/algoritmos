// Crear una funcion que ordene palabras de menor numero de letras a mayor.
const saludos = ["adios", "hola", "maximo", "uno", "despedida"];
//ejemplo ["uno", "hola", "adios", "maximo", "despedida"];

function orderWords(arry) {
  return arry.sort((current, next) => {
    return current.length - next.length;
  });
}

// distribucion de probabilidad continua que es simetrica a su valor medio
//crear un array ramdon
const randomArray = saludos.sort((a, b) => Math.random() - 0.5);

// recupera un item aleatorio del array
const randomIndex = Math.floor(Math.random() * saludos.length);

//5.- Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
const coordenadas = [
  [7, 3],
  [2, 2],
  [1, 0],
  [4, 3],
];
//Salida -> [[1,0],[2,2],[4,3],[7,3]]
function calcularDistancia(coord) {
  // Distancia euclidiana: sqrt(x^2 + y^2)
  return Math.sqrt(coord[0] * coord[0] + coord[1] * coord[1]);
}

function orderCoords(arry) {
  return arry.sort((current, next) => {
    const primerPunto = calcularDistancia(current);
    const segundoPunto = calcularDistancia(next);

    return primerPunto - segundoPunto;
  });
}

//Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/.
const letras = ["b", "h", "w", "e", "a"];
//Salida -> [‘a’,‘b’,‘e’,‘h’,‘w’]
function orderLetters(arreglo) {
  return arreglo.sort((a, b) => {
    return a.charCodeAt(0) - b.charCodeAt(0);
  });
}

orderLetters(letras);
