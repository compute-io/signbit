'use strict';

// MODULES //

var getHighWord = require( 'math-float64-get-high-word' );


// SIGNBIT //

/**
* FUNCTION: signbit( x )
*	Returns a boolean indicating if the sign bit is on (true) or off (false).
*
* @param {Number} x - input value
* @returns {Boolean} boolean indicating if sign bit is on or off
*/
function signbit( x ) {
	// Extract from the input value a higher order word (unsigned 32-bit integer) containing the exponent and sign:
	var high = getHighWord( x );

	// Shift off all bits which are not the sign bit and check if the sign bit is on:
	return ( high >>> 31 ) ? true : false;
} // end FUNCTION signbit()


// EXPORTS //

module.exports = signbit;
