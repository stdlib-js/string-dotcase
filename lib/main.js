/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var format = require( '@stdlib/error-tools-fmtprodmsg' );
var base = require( '@stdlib/string-base-dotcase' );


// MAIN //

/**
* Converts a string to dot case.
*
* @param {string} str - string to convert
* @throws {TypeError} must provide a string
* @returns {string} dot-cased string
*
* @example
* var out = dotcase( 'foo bar' );
* // returns 'foo.bar'
*
* @example
* var out = dotcase( 'IS_MOBILE' );
* // returns 'is.mobile'
*
* @example
* var out = dotcase( 'Hello World!' );
* // returns 'hello.world'
*
* @example
* var out = dotcase( '--foo-bar--' );
* // returns 'foo.bar'
*/
function dotcase( str ) {
	if ( !isString( str ) ) {
		throw new TypeError( format( "1gn3F,Ex", str ) );
	}
	return base( str );
}


// EXPORTS //

module.exports = dotcase;