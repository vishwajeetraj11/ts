/*

lec 36, 37, 38, 39, 40, 41, 42

Interfaces - Create a new type, describing the property names and value types of an object.

Interfaces + Classes = How we get really strong code reuse in TS
*/

const oldCivic = {
    name: 'civic', year: new Date(), broken: true, summary():string {
        return `Name: ${this.name}`
    }
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}

interface Reportable {
    summary(): string
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary())
};

printSummary(oldCivic)
printSummary(drink)

/*
General Strategy for Reusable Code in TS -

- Create functions that accept arguments that are typed with interfaces
- Objects/classes can decide to 'implement' a given interface to work with a function

*/