import{ Request, Response, NextFunction} from 'express';
class PetController{
  public renderCreate(req: Request, res: Response, next: NextFunction) : void{
    try{
      return res.render("pages/user/register-pets");
    }catch(err){
      return next(err);
    }
  }

  public renderList(req: Request, res: Response, next: NextFunction) : void{
    try{
      return res.render("pages/user/list-pets");
    }catch(err){
      return next(err);
    }
  }

}

export default new PetController();