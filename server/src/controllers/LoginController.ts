import { NextFunction, Request, Response } from "express";
import { bodyValidator, controller, get, post, use } from "./decorators"

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request was made!!!');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
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
  }


  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'hi@hi.com' && password === 'password') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}