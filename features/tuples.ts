/*

lec 33, 34, 35

Tuple: Array like structure where each element represents some property of a record.

The order inside of a tuple has a specific meaning. 

[ 'brown', true, 40 ] => [ 'color', 'carbonated', sugar ]

*/

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// Type alias
type Drink = [string, boolean, number]

// The annotation is whats going to change this array into a tuple.
const pepsi: Drink = ['brown', true, 40];

// pepsi[0]=0
// Type 'number' is not assignable to type 'string'

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

/*

*/

// what do those numbers mean ? (not making much sense)
const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower:400, weight: 3354
};

/*
If you use a tuple to represent some meaningful data, it's really hard for us as engineers to look at this value and understand what we are trying to say. However in an object format here: because we are forced to put in a key it is immediately obvious what we are working with.
*/