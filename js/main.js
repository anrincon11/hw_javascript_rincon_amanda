//ARRAY

var iceCream = [ 'Rocky Road', 'Chocolate Chip', 'Lemon Sorbet' ];
iceCream.push( 'Vanilla' );

//OBJECTS INSIDE AN ARRAY

var presidents = [
		{ firstName: 'Barack', lastName: 'Obama',
			termLength: 2, party: 'Democratic', yearsOfPresidency: 8 },
		{ firstName: 'George', lastName: 'Bush',
			termLength: 2, party: 'Republican', yearsOfPresidency: 8 },
		{ firstName: 'Bill', lastName: 'Clinton',
			termLength: 2, party: 'Democratic', yearsOfPresidency: 8 },
		{ firstName: 'George', lastName: 'Bush',
			termLength: 1, party: 'Republican', yearsOfPresidency: 4 },
		{ firstName: 'Ronald', lastName: 'Reagan',
			termLength: 2, party: 'Republican', yearsOfPresidency: 8 }
	];

console.log( presidents[ 2 ].firstName, presidents[ 2 ].lastName );

//FUNCTION DECLARATION

function howdy() {
	return 'Amanda Rincon says hello!';
}

howdy();
console.log( howdy() );

//FUNCTION EXPRESSION

var numba = function( string ) {
		if ( string.length < 7 ) {
			console.log( 'What a short little word!' );
		} else if ( string.length > 7 ) {
			console.log( 'I am sorry, but that is too many to count.' );
		} else {
			console.log( '7, what a perfect choice!' );
		}
};

numba( '7' );

//numba( 'seventy' );
//numba( 'university' );

//FUNCTION

function inception( callback, value ) {
    return callback + value;
}

var movie = inception( 'Inception ', 'is a fantastic movie!' );
console.log( movie );
