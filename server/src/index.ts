/*
- Typescript has a distinct OOP style.

- Many popular JS libs were written before JS had any solid idea of 'classes'.
- Integrating TS with popular JS libs can be tough.

TS with JS Libraries.
- Use the library normally, adding in basic type annotations where possible.
- Use a TS adapter library that has helpers for using your library with TS.
- Twist your lib to work with TS classes.

Integration Issues:

CONS-
    1. Type definition files alone can't express what is going on in the JS world accurately (example: middleware).
    2. Type definition files provided to us aren't always accurate. ex- req.body has type any, which is incorrect unless a body parser has been used.
    3. Inputs to a server (or any program with external inputs) are not guranteed to exist, or to be of the correct type. (the type definition file makes it even worse)
PROS-
    1. Addressing these type of issues with Typescript can force us to write better code.

Whenever we make use of typescript, the main features of the language is classes and interfaces. So, making typescript work better with some javascript library, the discussion comes down to how can we make this js library work in a class based style.

ES2015 -----------------
                        |
                        | -- Don't really exist in Javascript.
                        |
Typescript Classes -----

Classes in Javascript are 'syntactical sugar' over prototypal inheritance.

Decorators- 
- Functions that can be used to modify/change/anything different properties/methods in the class.
- Not the same as Javascript decorators
- Used inside/on classes only
- Understanding the order in which decorators are ran are the key to understanding them
- Experimental

- First argument is the prototype of the object.
- Second argument is the key of the property/method/accessor on the object.
- Third argument is the property descriptor.
- Decorators are applied when the code for this class is ran (not when an instance is created.)

Property Descriptor for Methods
writable - whether or not this property can be changed.
enumerable - whether or not this property get looped over by a 'for...in'
value - current value
configurable - property definition can be changed and property can be deleted.

When working with decorators.
- Node executes our code
- Class definition read in - decorators are executed
- Decorators associate route configuration info with the method by using metadata
- All method decorators run
- Class decorator of @controller runs last
- Class decorator reads metadata from each method, adds complete route definitions to router

Whats Metadata?
- Proposed feature to be added to Javascript (and thus, TS)
- Snippets of info that can be tied to a method, property, or class definition.
- Can be used for super custom stuff
- Typescript will(optionally) provide type information as metadata
- Read and written using the reflect-metadata package.
*/

import express from 'express';
import { router } from './routes/loginRoutes'
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import { router as controllerRouter } from './controllers/decorators/controller';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({
    keys: ['dsmfkmfieowfmskdlm']
}))

app.use(router);
app.use(controllerRouter)

app.listen(3000, () => {
    console.log('Listening on port: 3000')
})