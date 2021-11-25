import { Request, Response, NextFunction } from "express";
import VaccinationDTO from "../dtos/VaccinationDTO";
import VaccinationService from "../services/VaccinationService";

class VaccinationController {
  public renderCreate(req: Request, res: Response, next: NextFunction): void {
    try {
      return res.render("pages/clinic/vaccination");
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
      const vaccinationDTO = VaccinationDTO.withAll(
        req.body.pet,
        req.body.batche,
        "9f5067c8-3f17-11ec-8edf-d08e79dd7c08",
        "ac739294-3999-11ec-bc02-d08e79dd7c08",
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
