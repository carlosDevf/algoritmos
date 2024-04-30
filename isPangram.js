//function isPangram(sentence) {
// Convertimos la frase a minúsculas para hacer la comparación insensible a mayúsculas
//Un pangrama es una oración o frase que contiene todas las letras del alfabeto al menos una vez. Por ejemplo, en el alfabeto inglés, un pangrama muy conocido es: "The quick brown fox jumps over the lazy dog".

// Creamos un conjunto para almacenar las letras únicas de la frase
function isPangram(sentence) {
  const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
  const lowerSentence = sentence.toLowerCase();

  for (let i = 0; i < lowerSentence.length; i++) {
    alphabet.delete(lowerSentence[i]);
    if (alphabet.size === 0) return true;
  }

  return false;
}

// Un caso de uso común y útil de los pangramas, más allá de su uso en ejercicios educativos y demostraciones de tipografía, es en el desarrollo y prueba de sistemas de reconocimiento de voz y procesamiento de lenguaje natural (NLP).

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Debería imprimir true
console.log(isPangram("Hello, world!")); // Debería imprimir false
