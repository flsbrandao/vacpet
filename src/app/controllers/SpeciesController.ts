import { Request, Response, NextFunction } from 'express';
import SpeciesService from '../services/SpeciesService';

class SpeciesController {

  public async findAll(req: Request, res: Response, next: NextFunction): Promise<Response | undefined | void> {
    try {

      const speciesService = new SpeciesService();
      const response = await speciesService.find();

      return res.json(response);

    } catch (err) {
      return next(err);
    }
  }
}

export default new SpeciesController();