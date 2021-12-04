import { Request, Response, NextFunction } from "express";
import UsersDTO from "../dtos/UsersDTO";
import UsersService from "../services/UsersService";

class UsersController {
  public renderCreate(req: Request, res: Response, next: NextFunction): void {
    try {
      return res.render("pages/register");
    } catch (err) {
      return next(err);
    }
  }

  public async renderList(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      return res.render("pages/clinic/list-users");
    } catch (err) {
      return next(err);
    }
  }

  public async renderUserAndPets(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      return res.render("pages/clinic/list-user-and-pets");
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
      const userDTO = UsersDTO.withAll(
        req.body.nome,
        req.body.cpf,
        req.body.email,
        req.body.password,
        req.body.endereco,
        req.body.celular,
        req.body.telefone
      );

      const userService = new UsersService();
      const response = await userService.create(userDTO);

      return res.status(201).json(response);
    } catch (err) {
      return next(err);
    }
  }

  public async find(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const userService = new UsersService();
      const response = await userService.find();

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
      const id = req.params.id.toString();
      const usersDTO = UsersDTO.withID(id);
      const userService = new UsersService();

      const response = await userService.findForId(usersDTO);

      return res.json(response);
    } catch (err) {
      return next(err);
    }
  }
}

export default new UsersController();
