import { NextFunction, Request, Response } from "express";
import { controller, get, use } from "./decorators"

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
}