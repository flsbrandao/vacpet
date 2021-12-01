import { Request, Response, NextFunction } from "express";
import MedicalRecordDTO from "../dtos/MedicalRecordDTO";
import MedicalRecordService from "../services/MedicalRecordService";

class MedicalRecordController {
  public renderCreate(req: Request, res: Response, next: NextFunction): void {
    try {
      return res.render("pages/clinic/register-medicalrecord");
    } catch (err) {
      return next(err);
    }
  }

  public async createOrUpdate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const medicalRecordDTO = MedicalRecordDTO.withAll(
        req.body.pet,
        req.body.alergia,
        req.body.doenca,
        req.body.peso,
        req.body.medicamentos,
        req.body.pelagem,
        req.body.porte,
        req.body.parasitario_interno,
        req.body.parasitario_externo
      );

      const medicalRecordService = new MedicalRecordService();

      const response = await medicalRecordService.createOrUpdate(
        medicalRecordDTO
      );

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
      const medicalRecordDTO = MedicalRecordDTO.withPet(req.params.pet);
      const medicalRecordService = new MedicalRecordService();
      const response = await medicalRecordService.findForPet(medicalRecordDTO);

      return res.json(response);
    } catch (err) {
      return next(err);
    }
  }
}

export default new MedicalRecordController();
