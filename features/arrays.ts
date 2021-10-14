/*


lec 29


Typed Arrays - Arrays where each element is some consistent type of value

In general when we work with arrays in typescript we are making use of one specific type of element inside that array.

We can technically put different types of values inside of an array, if we want to do so we have to be very explicit about and add in a special type annotation.

*/

const carMakers: string[] = ['ford','toyato','chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

/*

lec 30

Why do we care about types in array ?

1. TS can do type inference when extracting values from an array.
2. TS can prevent us from adding incompatible values to the array.
3. We can get help with 'map', 'forEach', 'reduce', functions
4. Flexible - arrays can still contain multiple different types

*/


/*

lec 31

*/
// 1. Help with inference when extracting values ////////////////
const car = carMakers[0]; // hover over car and ts knows its a string
const myCar = carMakers.pop(); // myCar is string 

// 2. Prevent incompatible values //////////////////
// carMakers.push(100);
// Argument of type 'number' is not assignable to parameter of type 'string'.

// 3. Help with 'map'////////////////////
carMakers.map((car: string) => {
    return car.toUpperCase();
})

// 4. Flexible types
const importantDates = [new Date(), '2030-10-10']; // inferred (string | Date)[]
const importantDatesX: (Date | string)[] = [new Date(), '2030-10-10']; 

/*

lec 32

Where to use types arrays? 
Any time we need to represent a collection of records with some arbitrary sort order.


*/