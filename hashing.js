//Hashing:
/*Contexto: Es una técnica que convierte una cantidad de datos de tamaño variable en una de tamaño fijo. 

Se utiliza comúnmente para crear índices eficientes para bases de datos y para verificar la integridad de los datos.

Ejemplo Práctico: Un sitio web podría utilizar el hashing para almacenar las contraseñas de los usuarios de manera segura. 
En lugar de guardar la contraseña real, se guarda su hash. Cuando un usuario inicia sesión, el hash de la contraseña ingresada se compara con el hash almacenado.
Por qué el Nombre: "Hash" se refiere al proceso de cortar y mezclar, similar a cómo una función hash descompone y transforma los datos de entrada.*/

function simpleHash(password) {
  let has = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    // desplazamiento binario
    has = (has << 5) - has + char;
    has = has & has;
  }
  console.log(has);
  return has;
}
// Simulación de almacenamiento y verificación de contraseña
const password = "userPassword123";
const hashedPassword = simpleHash(password);

//comprobando
// Verificación de la contraseña
function verifyPassword(inputPassword, storedHash) {
  return simpleHash(inputPassword) === storedHash;
}

// Prueba de verificación
const inputPassword = "userPassword123";
console.log(verifyPassword(inputPassword, hashedPassword)); // Debería ser t
