import { Router } from "express";
import VaccinationController from "../controllers/VaccinationController";

const routes = Router();

routes.post("/clinic/vaccination", VaccinationController.create);
routes.get("/clinic/pet/:id/vaccination", VaccinationController.renderCreate);
routes.get("/clinic/vaccination/:pet", VaccinationController.findForPet);
export default routes;
