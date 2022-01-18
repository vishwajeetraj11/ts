import { Request, Response } from "express";
import { controller, get } from "./decorators"

@controller('/auth')
class LoginController {
    @get('/login')
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