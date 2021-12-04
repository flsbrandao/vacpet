import { NextFunction, Request, Response } from "express";

class LoginController {
  public index(req: Request, res: Response, next: NextFunction): void {
    try {
      return res.render("pages/login");
    } catch (err) {
      return next();
    }
  }

  public signIn(req: Request, res: Response, next: NextFunction): void {
    try {
      if (req.user?.tipo == "U") {
        return res.redirect("/users/list-pets");
      } else {
        return res.redirect("/clinic/list-clinics");
      }
    } catch (err) {
      return next(err);
    }
  }

  public logout(req: Request, res: Response, next: NextFunction): void {
    try {
      req.logout();
      return res.redirect("/login");
    } catch (err) {
      return next(err);
    }
  }
}

export default new LoginController();
