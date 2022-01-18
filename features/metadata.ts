import 'reflect-metadata';

// const plane = {
//     color: 'red'
// }

// Reflect.defineMetadata('note', 'hi there', plane);

// console.log(plane);

// const note = Reflect.getMetadata('note', plane)
// console.log(note)

@controller
class Plane {
    color: string = 'red';

    @get('/login')
    fly(): void {
        console.log('vrrrrrr');
    }

}

// function markFunction(target: Plane, key: string) {
//     Reflect.defineMetadata('secret', 123, target, key);
// }

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')
// console.log(secret);

function get(secretInfo: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata('path', secretInfo, target, key);
    }
}

function controller(target: typeof Plane) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata('path', target.prototype, key);
        console.log(path);
        // router.get(path, target.prototype[key])
    }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')
// console.log(secret);