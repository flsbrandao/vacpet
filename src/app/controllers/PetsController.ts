import { Request, Response, NextFunction } from "express";
import PetsDTO from "../dtos/PetsDTO";
import MyCustomErrors from "../helpers/MyCustomErrors";
import BreedsModel from "../models/BreedsModel";
import PetsModel, { SexoType } from "../models/PetsModel";
import SpeciesModel from "../models/SpeciesModel";
import UsersModel from "../models/UsersModel";
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

  public renderPet(req: Request, res: Response, next: NextFunction): void {
    try {
      return res.render("pages/clinic/list-pet");
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
        UsersModel.withID("20f4d6e9-566e-4a05-8158-31dcb8288aed"),
        req.body.nome,
        SpeciesModel.withID(req.body.specie),
        req.body.sexo == "M" ? SexoType.M : SexoType.F,
        BreedsModel.withID(req.body.breed),
        new Date(req.body.data_nascimento),
        req.file?.filename
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
      const petsDTO = PetsDTO.withUser(
        UsersModel.withID("20f4d6e9-566e-4a05-8158-31dcb8288aed")
      );
      const response = await petsService.findForUser(petsDTO);

      return res.json(response);
    } catch (err) {
      return next(err);
    }
  }

  public async findForUserClinic(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
   
      if (!req.query.user) {
        throw new MyCustomErrors("ID do usuário não informado", 404);
      }
      const petsService = new PetsService();
      const usersModel = UsersModel.withID(req.query.user.toString());
      const petsDTO = PetsDTO.withUser(usersModel);

      const response = await petsService.findForUser(petsDTO);
      const response_for_datatable = {
        draw: req.query.draw,
        recordsTotal: 10,
        recordsFiltered: 10,
        data: response,
      };
      return res.json(response_for_datatable);
    } catch (err) {
      return next(err);
    }
  }

  public async findForId(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try{

      const petsService = new PetsService();
      const petsDTO =  PetsDTO.withId(req.params.id);
      const response = await petsService.findForId(petsDTO);

      return res.json(response);
   
    }catch(err){
      return next(err);
    }
  }
}

export default new PetsController();
