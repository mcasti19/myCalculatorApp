
//! REVISAR AUNQUE ESTA INCOMPLETA: https://www.blackbox.ai/chat/c6456658-55e4-4dc7-95f7-3040b3b344df


const inputResult = document.getElementById( 'result' );
// console.log( inputResult );

const elements = {
    numbers: Array.from( document.querySelectorAll( '.number' ) ),
    operators: {
        suma: document.getElementById( '+' ),
        resta: document.getElementById( '-' ),
        multiplicacion: document.getElementById( '*' ),
        division: document.getElementById( '/' ),
    },
    reset: document.getElementById( 'reset' ),
    igual: document.getElementById( '=' ),
    punto: document.getElementById( '.' ),
    del: document.getElementById( 'del' ),
    preResult: document.getElementById( 'preResult' ),
};

let num1 = 0;
let num2 = 0;

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


elements.numbers.forEach( element => {
    element.addEventListener( 'click', ( e ) => {
        num1 = inputResult.value += e.target.textContent;
        // console.log( num1 );
    } )
} );



//*CLICK EVENTS

elements.operators.suma.addEventListener( 'click', ( e ) => {
    preResult.textContent = `${ inputResult.value } + `;
    inputResult.setAttribute( 'placeholder', `${ inputResult.value }` );
    num2 = inputResult.value += e.target.textContent
    inputResult.value = null;
} );

elements.operators.resta.addEventListener( 'click', ( e ) => {
    preResult.textContent = `${ inputResult.value } - `;
    inputResult.setAttribute( 'placeholder', `${ inputResult.value }` );
    num2 = inputResult.value += e.target.textContent
    inputResult.value = null;
} );

elements.operators.multiplicacion.addEventListener( 'click', ( e ) => {
    preResult.textContent = `${ inputResult.value } * `;
    inputResult.setAttribute( 'placeholder', `${ inputResult.value }` );
    num2 = inputResult.value += e.target.textContent
    inputResult.value = null;
} );

elements.operators.division.addEventListener( 'click', ( e ) => {
    preResult.textContent = `${ inputResult.value } / `;
    inputResult.setAttribute( 'placeholder', `${ inputResult.value }` );
    num2 = inputResult.value += e.target.textContent
    inputResult.value = null;
} );


elements.igual.addEventListener( 'click', () => {
    preResult.textContent += inputResult.value

    let isSuma = preResult.textContent.includes( '+' );
    let isResta = preResult.textContent.includes( '-' );
    let isMultiplicacion = preResult.textContent.includes( '*' );
    let isDivision = preResult.textContent.includes( '/' );

    ( isSuma )
        ? suma( num1, num2 )
        : ( isResta )
            ? resta( num1, num2 )
            : ( isMultiplicacion )
                ? multiplication( num1, num2 )
                : ( isDivision )
                    ? division( num1, num2 )
                    : null

} )




elements.reset.addEventListener( 'click', () => {
    inputResult.value = null;
    preResult.textContent = null;
    inputResult.setAttribute( 'placeholder', 0 );
    inputResult.focus();
} );
//*FUNCIONES


function suma ( a, b ) {return inputResult.value = parseFloat( a ) + parseFloat( b );}
function resta ( a, b ) {return inputResult.value = parseFloat( a ) - parseFloat( b );}
function multiplication ( a, b ) {return inputResult.value = parseFloat( a ) * parseFloat( b );}
function division ( a, b ) {return inputResult.value = parseFloat( a ) / parseFloat( b );}