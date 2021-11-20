import { Request, Response, NextFunction } from "express";
import PetsDTO from "../dtos/PetsDTO";
import VaccinesService from "../services/VaccinesService";

class VaccinesController {
  public async vaccinesForSpecie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const petsDTO = PetsDTO.withId(req.params.pet);
      const vaccinesService = new VaccinesService();
      const response = await vaccinesService.vaccinesForSpecie(petsDTO);

      return res.json(response);
    } catch (err) {
      return next(err);
    }
  }
}

export default new VaccinesController();
