import { Request, Response, NextFunction } from "express";
import ClinicsService from "../services/ClinicsService";

class ClinicsController {
  public async renderList(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      return res.render("pages/user/list-clinics");
    } catch (err) {
      return next(err);
    }
  }

  public async renderListClinic(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      return res.render("pages/clinic/list-clinics");
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
      const clinicsService = new ClinicsService();
      const response = await clinicsService.find();

      res.json(response);
    } catch (err) {
      return next(err);
    }
  }

  public selected(
    req: Request,
    res: Response,
    next: NextFunction
  ) : void {
    try {

      if(!req.user){
        return
      }
      req.user.clinicId = req.params.clinic;

      return res.redirect("/clinic/list-users");
    } catch (err) {
      return next(err);
    }
  }
}

export default new ClinicsController();
