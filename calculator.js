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
    temas: {
        theme1: document.getElementById( 'theme-1' ),
        theme2: document.getElementById( 'theme-2' ),
        theme3: document.getElementById( 'theme-3' ),
    },
    reset: document.getElementById( 'reset' ),
    igual: document.getElementById( 'equal' ),
    delete: document.getElementById( 'del' ),
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
    } );

    element.addEventListener( 'mousedown', () => {
        element.style.background = '#f0f0f0';
    } );
    element.addEventListener( 'mouseup', () => {
        element.style.background = '';
    } );



} );

//* EVENTOS DE LOS OPERADORES +-*/

elements.operators.suma.addEventListener( 'click', () => {
    if ( valor1 ) {
        operacion = '+';
        preResult.textContent = `${ valor1 } + `;
        inputResult.placeholder = valor1;
        inputResult.value = '';
    }
} );

elements.operators.resta.addEventListener( 'click', () => {
    if ( valor1 ) {
        console.log( valor1 );
        operacion = '-';
        preResult.textContent = `${ valor1 } - `;
        inputResult.placeholder = inputResult.value;
        inputResult.value = '';
    }
} );

elements.operators.multiplicacion.addEventListener( 'click', () => {
    if ( valor1 ) {
        console.log( valor1 );
        operacion = '*';
        preResult.textContent = `${ valor1 } * `;
        inputResult.placeholder = inputResult.value;
        inputResult.value = '';
    }
} );

elements.operators.division.addEventListener( 'click', () => {
    if ( valor1 ) {
        console.log( valor1 );
        operacion = '/';
        preResult.textContent = `${ valor1 } / `;
        inputResult.placeholder = inputResult.value;
        inputResult.value = '';
    }
} );

//* EVENTO DEL BOTON IGUAL
elements.igual.addEventListener( 'click', () => {
    if ( valor1 && valor2 && operacion ) {
        resultado = realizarOperacion( valor1, valor2, operacion );
        preResult.textContent = `${ valor1 } ${ operacion } ${ valor2 } = ${ resultado }`;
        inputResult.value = resultado;
        done = true;
    }
} );


elements.igual.addEventListener( 'mousedown', () => {
    elements.igual.classList.add( 'clicked' );
} )
elements.igual.addEventListener( 'mouseup', () => {
    elements.igual.classList.remove( 'clicked' );
} )

//* EVENTO PARA EL RESET
elements.reset.addEventListener( 'click', clearAll );

elements.reset.addEventListener( 'mousedown', () => {
    elements.reset.classList.remove( 'white' );
    elements.reset.classList.add( 'clicked' );
} );

elements.reset.addEventListener( 'mouseup', ( e ) => {
    elements.reset.classList.remove( 'clicked' );
    elements.reset.classList.add( 'white' );
} );

//* EVENTO PARA EL BOTON DEL
elements.delete.addEventListener( 'mousedown', () => {
    elements.delete.style.backgroundColor = '#A2B3E1';

    ( resultado && inputResult.value !== null ) ? clearAll() : null
    inputResult.value = inputResult.value.substring( 0, inputResult.value.length - 1 );

    valor1 = inputResult.value;

} );

elements.delete.addEventListener( 'mouseup', () => {
    elements.delete.style.backgroundColor = '';
} );


//*FUNCION PARA LIMPIAR EL IMPUT DEL RESULTADO Y EL PRE-RESULTADO
function clearAll () {
    valor1 = '';
    valor2 = '';
    resultado = '';
    done = false;
    operacion = '';
    inputResult.value = '';
    inputResult.placeholder = 0;
    preResult.textContent = '';
}

//* FUNCION PARA LAS OPERACIONES DE +-*/

function realizarOperacion ( a, b, operacion ) {
    switch ( operacion ) {
        case '+': return parseFloat( a ) + parseFloat( b );
        case '-': return parseFloat( a ) - parseFloat( b );
        case '*': return parseFloat( a ) * parseFloat( b );
        case '/': return parseFloat( a ) / parseFloat( b );
        default: return '';
    }
}

//* Funciones para botones de temas

elements.temas.theme1.addEventListener( 'click', () => {
    document.body.classList.remove( 'tema-2', 'tema-3' );
    document.body.classList.add( 'tema-1' );
} );

elements.temas.theme2.addEventListener( 'click', () => {
    document.body.classList.remove( 'tema-1', 'tema-3' );
    document.body.classList.add( 'tema-2' );
} );

elements.temas.theme3.addEventListener( 'click', () => {
    document.body.classList.remove( 'tema-1', 'tema-2' );
    document.body.classList.add( 'tema-3' );
} );
