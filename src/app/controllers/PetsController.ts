import { Request, Response, NextFunction } from "express";
import PetsDTO from "../dtos/PetsDTO";
import BreedsModel from "../models/BreedsModel";
import { SexoType } from "../models/PetsModel";
import SpeciesModel from "../models/SpeciesModel";
import UserModel from "../models/UserModel";
import PetsService from "../services/PetsService";
class PetsController {
  public renderCreate(req: Request, res: Response, next: NextFunction): void {
    try {
      return res.render("pages/user/register-pets");
    } catch (err) {
      return next(err);
    }
  }

  public renderList(req: Request, res: Response, next: NextFunction): void {
    try {
      return res.render("pages/user/list-pets");
    } catch (err) {
      return next(err);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const petsDTO = PetsDTO.withAll(
        UserModel.withID("20f4d6e9-566e-4a05-8158-31dcb8288aed"),
        req.body.nome,
        SpeciesModel.withID(req.body.specie),
        req.body.sexo == "M" ? SexoType.M : SexoType.F,
        BreedsModel.withID(req.body.breed),
        new Date(req.body.data_nascimento)
      );

      const petsService = new PetsService();
      const response = await petsService.create(petsDTO);

      return res.status(201).json(response);
    } catch (err) {
      return next(err);
    }
  }

  public async findForUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const petsService = new PetsService();
      const petsDTO = PetsDTO.withID(
        UserModel.withID("20f4d6e9-566e-4a05-8158-31dcb8288aed")
      );
      const response = await petsService.findForUser(petsDTO);

      return res.json(response);
    } catch (err) {
      return next(err);
    }
  }
}

export default new PetsController();
