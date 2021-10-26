import { Request, Response, NextFunction } from "express";
import SpecieDTO from "../dtos/SpecieDTO";
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

      if (!req.query.specie) {
        throw new MyCustomErrors("Código da raça não informado", 422);
      }

      const specie = req.query.specie.toString();
      const speciesModel = SpecieDTO.withID(parseInt(specie));
      const response = await breedsService.findForSpecie(speciesModel);

      return res.json(response);
    } catch (err) {
      return next(err);
    }
  }
}

export default new BreedsController();
