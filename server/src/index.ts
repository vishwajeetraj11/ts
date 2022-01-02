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
*/

import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes'
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)

app.listen(3000, () => {
    console.log('Listening on port: 3000')
})