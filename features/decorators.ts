@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    @testDecorator
    get formattedColor(): string {
        return `This boats color is ${this.color}`;
    }

    // @logError('Oops boat was sunk in ocean')
    @logError('Something bad!')
    pilot(
        @parameterDecorator speed: string,
        @parameterDecorator generateWake: boolean
    ): void {
        if (speed === 'fast') {
            console.log('swish');
        } else {
            console.log('nothing');
        }
    }
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor); 
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index);
}

function testDecorator(target: any, key: string) {
    // console.log("Target ", target);
    console.log("Key ", key);
    // console.log(target.color);
    // console.log(target[key]);
}

// testDecorator(Boat.prototype, 'pilot')

// function logError(target: any, key: string, desc: PropertyDescriptor): void {
//     const method = desc.value;
//     desc.value = function () {
//         try {
//             method();
//         } catch (e) {
//             console.log('Oops, boat was sunk');
//         }
//     }
// }

// Decorator Factory = A function that returns a decorator.

function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;
        desc.value = function () {
            try {
                method();
            } catch (e) {
                console.log(errorMessage);
            }
        }
    }
}

// new Boat().pilot();