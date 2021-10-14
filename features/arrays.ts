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