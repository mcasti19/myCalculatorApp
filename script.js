// //? 1. Crea una función que tome dos números como parámetros y devuelva su suma:
// const sumar = ( a, b ) => {
//     return a + b;
// };

// // console.log( sumar( 1, 2 ) ); //! si lo quiero mostrar en consola de una vez, pero si quiero hacer la operacion y guadar la funcion debo hacerlo asi
// const c = sumar( 1, 2 );
// console.log( "Suma: ", c );


// //? 2. Crea una función que tome un número como parámetro y devuelva «par» si es par y «impar» si es impar:
// const parImpar = ( a ) => {
//     return ( a % 2 === 0 ) ? "Par" : "Impar";
// };
// console.log( "Par o Impar:", parImpar( 18 ) );



// //? 3. Crea una función que tome un array como parámetro y devuelva el número de elementos del array:
// const contarArray = ( array ) => {
//     return array.length;
// };
// console.log( "Longitud Array: ", contarArray( ["Moises", "Daniel", "Castillo", "Yelamo"] ) );

// //?  4. Crea una función que tome un objeto como parámetro y devuelva el número de propiedades que tiene el objeto:

// const contarProps = ( objeto = {} ) => {
//     return Object.keys( objeto ).length;
// };

// console.log( "Total de props del objeto:", contarProps( {
//     nombre: "Moises",
//     apellido: "Castillo",
//     edad: 18,
//     direccion: 'Venezuela',
// } ) );


// //? 5. Crea una función que tome un String como parámetro y devuelva el mismo String con todos los  caracteres en mayúsculas:
// const converMayus = ( string = '' ) => {
//     return string.toUpperCase();
// };

// console.log( "String convertido en Mayúsculas: ", converMayus( 'esternocleidomastoideo' ) );

// //? 6. Crea una función que tome un array de números como parámetro y devuelva el número más grande del array:

// function valorMayor ( array ) {
//     let numMayor = array[0];
//     array.forEach( element => {
//         ( element > numMayor ) ? numMayor = element : null
//     } );
//     return numMayor;
// };

// console.log( "Retonar el numero mayor: ", valorMayor( [1, 3, 5, 1, 0, 10, 50, 90] ) );

// //? 7. Crea una función que tome un array de strings como parámetro y devuelva un nuevo array con todos los strings en mayúsculas:
// function arrayString ( array = [''] ) {
//     let newArray = array.map( string => (
//         string.toUpperCase()
//     ) )
//     return newArray
// };
// console.log( "Convertir en Mayusculas un Array de String: ", arrayString( ["vegeta", "goku", "broly", "cell"] ) );

// //? 8.Crea una función que tome dos números como parámetros y devuelva el resultado de elevar el primer número a la potencia del segundo número:

// function elevarNumero ( x, y ) {
//     return x ** y;
// }
// console.log( "Elevando x a la y: ", elevarNumero( 2, 8 ) );

// //! ESTA ES OTRA FORMA USANDO EL METODO Math.pow()
// function elevarAExponente ( base, exponente ) {
//     return Math.pow( base, exponente );
// }
// console.log( "2da Forma de elevar numero a una potencia usando Math.pow(): ", elevarAExponente( 2, 8 ) );



// //? 9 Crea una función que tome un array de números como parámetro y devuelva la suma de todos los números del array:
// //! IMPORTANTE: https://www.blackbox.ai/share/0eb0bcd6-d531-425d-b72b-1e9d79846691
// function sumarTodos ( array = [1, 2] ) {

//     let suma = 0;
//     array.forEach( num => {
//         suma += num

//     } );
//     return suma;
// }
// console.log( "Sumando todos en el array con forEach: ", sumarTodos( [1, 2, 3, 4, 4, 4, 1] ) );

// function sumarNumeros ( array ) {
//     let suma = 0;
//     for ( let i = 0; i < array.length; i++ ) {
//         suma += array[i];
//     }
//     return suma;
// }
// console.log( "Sumando el mismo array anterior pero con ciclo For: ", sumarNumeros( [1, 2, 3, 4, 4, 4, 1] ) );

// //? 10.  Crea una función que tome un objeto como parámetro y devuelva un array con todas las propiedades del objeto:
// function objectToArray ( objeto = {} ) {
//     return Object.keys( objeto );
// }
// console.log( "Extrayendo a un array las props de un objeto: ", objectToArray( {
//     nombre: "Moises",
//     apellido: "Castillo",
//     edad: 18,
//     direccion: 'Venezuela',
// } ) );

// //? 11. Crear un objeto «persona» con las propiedades «nombre» y «edad» y mostrarlas en la consola.

// const persona = { nombre: 'Moises', edad: 36 }
// console.log( "Nombre:", persona.nombre, ", Edad: ", persona.edad );

// //? 12. Crear un array «numeros» con los números del 1 al 5 y mostrarlos en la consola.

// const numeros = [1, 2, 3, 4, 5];
// numeros.forEach( num => {
//     console.log( "Numero de un array mostrado usando el forEach: ", num );
// } );

// //? 13. Agregar una propiedad «direccion» al objeto «persona» con las propiedades «calle» y «numero» y mostrarlas en la consola.
// persona.direccion = { calle: 'Av Roosevelt', numero: 'Edificio Tiuna' }
// console.log( "Agregando la propiedad Direccion que a su vez tiene 2 propiedades mas, calle y numero: ", persona );

// //! EVENTOS:

// //? 1. Cambiar el color de fondo al hacer clic en un botón:

// // () => {
// //     console.log( 'Creando Boton' );
// //     document.createElement( 'button' );
// // }

// const button = document.querySelector( 'button' );
// const title = document.querySelector( 'h1' );

// const changeColor = () => {
//     console.log( 'Cambiando el color de fondo del body con el Evento "click" sobre un boton' );
//     document.body.style.backgroundColor = 'black'
// };
// button.addEventListener( 'click', changeColor );

// //? 2. Mostrar un mensaje de alerta al pasar el mouse por encima de un elemento:
// const showAlert = () => {
//     console.log( 'Mostrando una alerta al pasar el mouse sobre un elemento (hover)' );
//     alert( 'Verga pero de pana asi no mas?' );
// }

// // button.addEventListener( 'mouseover', showAlert );

// //? 3.Cambiar el contenido de un elemento al presionar una tecla
// //! de las 2 formas es válido
// // const changeContent = ( event ) => {
// //     console.log( 'Cambiando un contenido al presionar cualquier tecla(Keypress)' );
// //     title.textContent = 'Contenido cambiado';
// //     title.style.color = 'blue';
// // }
// // addEventListener( 'keypress', changeContent );

// // document.addEventListener( 'keydown', ( evento ) => {
// //     console.log( 'Cambiando algun contenido al presionar alguna tecla (keydown)', evento );
// //     document.querySelector( 'h2' ).textContent = 'Este texto ha cambiado';
// // } );

// //* PROBANDO UN POCO
// // document.addEventListener( 'keydown', ( evento ) => {
// //     if ( evento.key === 's' ) {
// //         console.log( 'Al presionar la tecla S, se cambiara el texto, si se presiona otra, cambia el fondo a gris (keydown)', evento );
// //         document.querySelector( 'h2' ).textContent = 'Este texto ha cambiado';
// //     } else {
// //         document.body.style.backgroundColor = 'gray'
// //     }
// // } )

// //!  PROYECTO CREAR CALCULADORA BASICA





