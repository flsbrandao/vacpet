import { Router } from "express";
import VaccinationController from "../controllers/VaccinationController";

const routes = Router();

routes.post("/clinic/vaccination", VaccinationController.create);
routes.get("/clinic/register-vaccination/:pet", VaccinationController.renderCreate);
routes.get("/clinic/vaccination/:pet", VaccinationController.findForPet);
routes.get(
  "/users/list-vaccination/:pet",
  VaccinationController.renderFindForPet
);
export default routes;
