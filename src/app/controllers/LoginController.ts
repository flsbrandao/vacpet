import { Request, Response } from 'express';

class LoginController{
  public index(req: Request,res: Response ) : void {
    
    return res.render('pages/login');
  }

}

export default new LoginController();