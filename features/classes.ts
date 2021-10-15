/*

lec 43, 44,45, 46, 47, 48

Classes - Blueprint to create an object with some fields(values) and methods(functions) to represent a 'thing'
*/

class Vehicle {

    /*
    Either This: 
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    Or this:
    constructor(public color: string) {

    }
    */

    color: string;

    constructor(color: string) {
        this.color = color;
    }

    public drive(): void {
        console.log('starting drive mode...')
    }
    protected honk(): void {
        console.log('beep...')
    }
}

class Car extends Vehicle {
    // overide drive method

    constructor(public wheels: number, color: string) {
        super(color);
    }

    drive(): void {
        console.log('Car is in driving mode.')
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

// const vehicle = new Vehicle('Red');

// vehicle.drive()
// vehicle.honk()
// console.log(vehicle.color)

const car = new Car(12,'red');

// car.startDrivingProcess()
// car.honk()

/*
lec 45

existence of modifiers

public - This method can be called any where, any time.
private - This method can only called by other methods in this class only.
protected - This method can be called by other methods in this class, or by other methods in the child classes.
*/