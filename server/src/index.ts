/*
- Typescript has a distinct OOP style.

- Many popular JS libs were written before JS had any solid idea of 'classes'.
- Integrating TS with popular JS libs can be tough.

TS with JS Libraries.
- Use the library normally, adding in basic type annotations where possible.
- Use a TS adapter library that has helpers for using your library with TS.
- Twist your lib to work with TS classes.
*/

import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send(
        '<div>hi</div>'
    )
})

app.listen(3000, () => {
    console.log('Listening on port: 3000')
})