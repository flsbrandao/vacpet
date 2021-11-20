import { Request, Response, NextFunction } from "express";
import BatchesDTO from "../dtos/BatchesDTO";
import BatchesService from "../services/BatchesService";
class BatchesController {
  public async findForVaccinesOnlyValid(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const batchesDTO = BatchesDTO.withVaccine(parseInt(req.params.vaccine));
      const batchesService = new BatchesService();
      const response = await batchesService.findForVaccineOnlyValid(batchesDTO);

      return res.json(response);
    } catch (err) {
      return next(err);
    }
  }
}

export default new BatchesController();
