//*¡Por supuesto! El objeto `Set` en JavaScript es una estructura de datos que te permite almacenar colecciones únicas de valores, lo que significa que no puede haber elementos duplicados dentro de un conjunto. Aquí tienes una descripción detallada de `Set`, incluyendo ejemplos, métodos y casos comunes de uso:*/

// ### 1. Creación de un `Set`:
//Puedes crear un nuevo `Set` vacío o inicializarlo con valores:

const mySet = new Set();
// Inicializar un conjunto con valores
const numbers = new Set([1, 2, 3, 4, 5]);
// ### 2. Métodos Comunes de `Set`:
//Agrega un nuevo valor al conjunto. Si el valor ya existe, no se agregará.  
  mySet.add(6);
//- **`delete(value)`:** Elimina un valor del conjunto.  
  mySet.delete(5);  

//- **`has(value)`:** Verifica si un valor está presente en el conjunto.  
  console.log(mySet.has(3)); // Devuelve true  

//- **`size`:** Devuelve el número de elementos en el conjunto.    
  console.log(mySet.size); // Devuelve el tamaño del conjunto  

//- **`clear()`:** Elimina todos los elementos del conjunto.    
  mySet.clear();  

/*- **Iteración sobre un `Set`:**
  Puedes iterar sobre los elementos de un conjunto utilizando un bucle `for...of` o el método `forEach()`. */  
  for (let item of mySet) {
    console.log(item);
  }

  mySet.forEach(item => {
    console.log(item);
  });  

//### 3. Casos Comunes de Uso:

/*- **Eliminación de Duplicados de un Array:**
  Puedes usar un conjunto para eliminar elementos duplicados de un array.*/  
  const duplicates = [1, 2, 2, 3, 4, 4, 5];
  const uniqueNumbers = [...new Set(duplicates)];
  console.log(uniqueNumbers); // Devuelve [1, 2, 3, 4, 5]  

/***Verificación de Unicidad de Valores:**
  Puedes usar un conjunto para verificar si todos los elementos de un array son únicos.*/  
  const arr = [1, 2, 3, 4, 5];
  const isUnique = arr.length === new Set(arr).size;
  console.log(isUnique); // Devuelve true  

/***Almacenamiento de Valores Únicos:**
  Puedes usar un conjunto para almacenar valores únicos y realizar operaciones como intersección, unión o diferencia entre conjuntos. */  
  const set1 = new Set([1, 2, 3]);
  const set2 = new Set([3, 4, 5]);

  // Intersección
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  console.log(intersection); // Devuelve Set {3}

  // Unión
  const union = new Set([...set1, ...set2]);
  console.log(union); // Devuelve Set {1, 2, 3, 4, 5}

  // Diferencia
  const difference = new Set([...set1].filter(x => !set2.has(x)));
  console.log(difference); // Devuelve Set {1, 2}  


/*

- Contar la Cantidad de Elementos Únicos en un Array:
    Escribe una función que tome un array como entrada y devuelva la cantidad de elementos únicos presentes en él.
    
- Combinar Conjuntos:
  - Escribe una función que tome dos conjuntos como entrada y devuelva un nuevo conjunto que contenga la unión de ambos conjuntos.

-  Eliminar Elementos Duplicados de un String:
      Escribe una función que tome un string como entrada y devuelva un nuevo string que contenga solo caracteres únicos en el mismo orden que aparecen en el string original.

- Verificar Anagramas:
    Escribe una función que tome dos strings como entrada y devuelva true si son anagramas (contienen los mismos caracteres en diferentes órdenes) y false en caso contrario.
    
*/

