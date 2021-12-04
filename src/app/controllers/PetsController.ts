import { Request, Response, NextFunction } from "express";
import PetsDTO from "../dtos/PetsDTO";
import MyCustomErrors from "../helpers/MyCustomErrors";
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
      if (!req.user) {
        throw new MyCustomErrors(
          "Erro interno. Tente novamente mais tarde",
          409
        );
      }
      const petsDTO = PetsDTO.withAll(
        req.user.userId,
        req.body.nome,
        req.body.specie,
        req.body.sexo,
        req.body.breed,
        req.body.data_nascimento,
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
      if (!req.user) {
        throw new MyCustomErrors(
          "Erro interno. Tente novamente mais tarde",
          409
        );
      }
      const petsService = new PetsService();
      const petsDTO = PetsDTO.withUser(req.user?.userId);
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

      const petsDTO = PetsDTO.withUser(req.query.user.toString());

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
    try {
      const petsService = new PetsService();
      const petsDTO = PetsDTO.withId(req.params.id);
      const response = await petsService.findForId(petsDTO);

      return res.json(response);
    } catch (err) {
      return next(err);
    }
  }
}

export default new PetsController();
