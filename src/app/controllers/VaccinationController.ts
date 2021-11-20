import { Request, Response, NextFunction } from "express";
import VaccinationDTO from "../dtos/VaccinationDTO";
import VaccinationService from "../services/VaccinationService";

class VaccinationController {
  public renderCreate(req: Request, res: Response, next: NextFunction): void {
    try{
      return res.render("pages/clinic/vaccination");
    }catch(err){
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
        "0e8debef-e2d2-4744-b1ed-05cef7621457",
        "e136c4b1-3f10-11ec-8edf-d08e79dd7c08",
        "9f5067c8-3f17-11ec-8edf-d08e79dd7c08",
        "ac739294-3999-11ec-bc02-d08e79dd7c08",
        "2021-11-06"
      );

      const vaccinationService = new VaccinationService();

      const response = await vaccinationService.create(vaccinationDTO);

      return res.status(201).json(response);
    } catch (err) {
      return next(err);
    }
  }
}

export default new VaccinationController();
