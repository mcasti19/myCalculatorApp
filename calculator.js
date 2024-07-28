//* DECLARACION DE VARIABLES
const inputResult = document.getElementById( 'result' );
const preResult = document.getElementById( 'preResult' );

//* DECLARACION DE BOTONES DE LA CALCULADORA
const elements = {
    numbers: Array.from( document.querySelectorAll( '.number' ) ),
    operators: {
        suma: document.getElementById( '+' ),
        resta: document.getElementById( '-' ),
        multiplicacion: document.getElementById( '*' ),
        division: document.getElementById( '/' ),
    },
    reset: document.getElementById( 'reset' ),
    igual: document.getElementById( 'equal' ),
};





let valor1 = '';
let valor2 = '';
let operacion = null;
let resultado = null;
let done = false;

//* EVENTO PARA CAPTURAR LO QUE SE INTRODUCE POR EL TECLADO PERMITIENDO SOLO NUMEROS Y OPERADORES

inputResult.addEventListener( 'input', ( e ) => {
    const valor = e.target.value;
    if ( !/^[0-9+*/.-]*$/.test( valor ) ) {
        e.target.value = valor.replace( /[^0-9+*/.-]/g, '' );
    }
    const ultimoCaracter = valor.slice( -1 );
    if ( ['+', '-', '*', '/'].includes( ultimoCaracter ) && valor.length > 1 ) {
        const penultimoCaracter = valor.slice( -2, -1 );
        if ( ['+', '-', '*', '/'].includes( penultimoCaracter ) ) {
            e.target.value = valor.slice( 0, -1 );
        }
    }
} );


//* EVENTO PARA CAPTURAR EL VALOR DE LOS BOTONES AL HACERLE CLICK
elements.numbers.forEach( element => {
    element.addEventListener( 'click', ( e ) => {
       
      
        if ( done ) clearAll();
        if ( !operacion && !done ) {
            valor1 = inputResult.value += e.target.textContent;
        } else {
            valor2 = inputResult.value += e.target.textContent
        }
    } )
} );


// elements.numbers.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         const value = e.target.textContent;
//         if ( done ) clearAll();
//         done = false
//       if (valor1 && operacion) {
//           valor2 += value;
//           inputResult.value += value;
//       } else {
//           valor1 += value;
//           inputResult.value += value
//         }
//     });
//   });


//* EVENTOS DE LOS OPERADORES +-*/

elements.operators.suma.addEventListener( 'click', () => {
    console.log( 'RESULTADO', resultado );
    ( resultado !== null ) ? valor1 = resultado : null
    if ( valor1 ) {
        // console.log( valor1 );
        operacion = '+';
        preResult.textContent = `${ valor1 } + `;
        // console.log( inputResult );
        inputResult.placeholder = inputResult.value;
        inputResult.value = '';
    }
} );

elements.operators.resta.addEventListener( 'click', () => {
    if ( valor1 ) {
        console.log( valor1 );
        operacion = '-';
        preResult.textContent = `${ valor1 } - `;
        console.log( inputResult );
        inputResult.placeholder = inputResult.value;
        inputResult.value = '';
    }
} );

elements.operators.multiplicacion.addEventListener( 'click', () => {
    if ( valor1 ) {
        console.log( valor1 );
        operacion = '*';
        preResult.textContent = `${ valor1 } * `;
        console.log( inputResult );
        inputResult.placeholder = inputResult.value;
        inputResult.value = '';
    }
} );

elements.operators.division.addEventListener( 'click', () => {
    if ( valor1 ) {
        console.log( valor1 );
        operacion = '/';
        preResult.textContent = `${ valor1 } / `;
        console.log( inputResult );
        inputResult.placeholder = inputResult.value;
        inputResult.value = '';
    }
} );

//* EVENTO DEL BOTON IGUAL
elements.igual.addEventListener( 'click', () => {
    console.log({valor1, valor2,operacion});
    if (valor1 && valor2 && operacion) {
      resultado = realizarOperacion(valor1, valor2, operacion);
      preResult.textContent = `${valor1} ${operacion} ${valor2} = ${resultado}`;
        inputResult.value = resultado;
        done = true;
    }
    console.log({valor1, valor2,operacion});
  });


//* EVENTO PARA EL RESET
elements.reset.addEventListener( 'click', clearAll );


//*FUNCION PARA LIMPIAR EL IMPUT DEL RESULTADO Y EL PRE-RESULTADO
function clearAll () {
    valor1 = '';
    valor2 = '';
    done = false;
    operacion = '';
    inputResult.value = '';
    inputResult.placeholder = 0;
    preResult.textContent = '';
}

//* FUNCION PARA LAS OPERACIONES DE +-*/

function realizarOperacion ( a, b, operacion ) {
    switch ( operacion ) {
        case '+':
            return parseFloat( a ) + parseFloat( b );
        case '-':
            return parseFloat( a ) - parseFloat( b );
        case '*':
            return parseFloat( a ) * parseFloat( b );
        case '/':
            return parseFloat( a ) / parseFloat( b );
        default:
            return '';
    }
}


// const operations = {
//     '+': (a, b) => parseFloat(a) + parseFloat(b),
//     '-': (a, b) => parseFloat(a) - parseFloat(b),
//     '*': (a, b) => parseFloat(a) * parseFloat(b),
//     '/': (a, b) => parseFloat(a) / parseFloat(b),
//   };
  
//   function realizarOperacion(a, b, operacion) {
//     return operations[operacion](a, b);
//   }