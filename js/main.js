var iceCream = [ 'Rocky Road', 'Chocolate Chip', 'Lemon Sorbet',
	'Vanilla' ];

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

function howdy ( person, message ) {
	return person + 'says' + message;
}

var greeting = combiner( 'Amanda Rincon', 'Hi!' );
console.log( message );
