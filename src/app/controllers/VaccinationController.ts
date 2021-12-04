import { Request, Response, NextFunction } from "express";
import VaccinationDTO from "../dtos/VaccinationDTO";
import MyCustomErrors from "../helpers/MyCustomErrors";
import VaccinationService from "../services/VaccinationService";

class VaccinationController {
  public renderCreate(req: Request, res: Response, next: NextFunction): void {
    try {
      return res.render("pages/clinic/register-vaccination");
    } catch (err) {
      return next(err);
    }
  }

  public renderFindForPet(
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    try {
      return res.render("pages/user/list-vaccination");
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

      if (!req.user.clinicId) {
        throw new MyCustomErrors(
          "Erro interno. Tente novamente mais tarde",
          409
        );
      }
      const vaccinationDTO = VaccinationDTO.withAll(
        req.body.pet,
        req.body.batche,
        req.user.userId,
        req.user.clinicId,
        req.body.data_vacinacao
      );

      const vaccinationService = new VaccinationService();

      const response = await vaccinationService.create(vaccinationDTO);

      return res.status(201).json(response);
    } catch (err) {
      return next(err);
    }
  }

  public async findForPet(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const vaccinationDTO = VaccinationDTO.withPet(req.params.pet);
      const vaccinationService = new VaccinationService();

      const response = await vaccinationService.findForPet(vaccinationDTO);

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
}

export default new VaccinationController();
