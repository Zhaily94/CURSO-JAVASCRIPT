/* Tipos de datos que podemos guardar en las variables
    string - cadena de Texto
    number - numero
    boolean - booleano (verdadero o falso)
    objet - objeto
    function - funcion

    null - valor nulo
    undefined - valor sin definir
*/

// ✨ Tipo de dato String
const nombre = 'zhai';
const parrafo = "Este es un parrafo";
const parrafo1 = 'Este es un "parrafo"';
const parrafo2 = 'Este es un \'parrafo\'';

// ✨ Tipo de dato Numero
const num = 4;
const num1 = -3;
const num2 = 3.1416;

// ✨ Tipo de dato Boolean
const usuarioConectado = true;
const mayorQue = 10 > 2; // los operadores nos permiten hacer operaciones
console.log(mayorQue)

// ✨ Arrays - Arreglos
const arreglo = ['texto', 10, true, {propiedad: 'valor'}, [1, 2, 3]] // en los arreglos no solo opodemos guardar solo un tipo de dato
// con los arreglos no sabemos que es cada infomacion si queremos consultarla solo sabemos la posicion pero no a que se refiere
console.log(arreglo)

// ✨ Objetos
const persona = {
    nombre: 'zhai',
    edad: 27,
    carro: {
        marca: '...',
        color: 'purpple'
    },
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.carro.color); // accediendo a un objeto dentro de un objeto


// ✨ Function  
function saludar() {  // definicion de la funcion
    console.log('✨ Hola ✨');
}
saludar(); // ejecucion de la funcion

// ✨ Null
 //Normalmente lo usamos cuando queremos especificar que un valor sea nulo
 const miVariable =  null;

 // ✨ undefined
// undefined se usa para indicarnos que un valor no esta definido
const miVariable2  =  undefined;