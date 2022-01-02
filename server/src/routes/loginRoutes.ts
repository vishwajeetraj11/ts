import { Request, Response, Router } from 'express';

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined }
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
          <div>
            <div>You are logged in</div>
            <a href="/logout">Logout</a>
          </div>
        `);
    } else {
        res.send(`
          <div>
            <div>You are not logged in</div>
            <a href="/login">Login</a>
          </div>
        `);
    }
})

router.get('/login', (req: Request, res: Response) => {
    res.send(`
    <form method="POST">
        <div>
          <label>Email</label>
          <input value='hi@hi.com' name="email" />
        </div>
        <div>
          <label>Password</label>
          <input value='label1278' name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    if (email) {
        if (email === 'hi@hi.com' && password === 'label1278') {
            req.session = { loggedIn: true };
            res.redirect('/');
        } else {
            res.send('Invalid email or password');
        }
    }
    else {
        res.send('Please send email.')
    }
})
router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');
})

export { router };