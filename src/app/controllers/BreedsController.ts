import { Request, Response, NextFunction } from "express";
import MyCustomErrors from "../helpers/MyCustomErrors";
import BreedsService from "../services/BreedsService";

class BreedsController {
  public async findForSpecie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const breedsService = new BreedsService();
      
      if(!req.query.specie){
        throw new MyCustomErrors("Código da raça não informado", 422);
      }
    
      const response = await breedsService.findForSpecie(req.query.specie);

      return res.json(response);
    } catch (err) {
      return next(err);
    }
  }
}

export default new BreedsController();
