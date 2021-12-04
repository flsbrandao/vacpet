import { Router } from "express";
import ClinicsController from "../controllers/ClinicsController";

const routes = Router();

routes.get("/users/list-clinics", ClinicsController.renderList);
routes.get("/users/clinics", ClinicsController.find);
routes.get("/clinic/list-clinics", ClinicsController.renderListClinic);
routes.get("/clinic/selected/:clinic", ClinicsController.selected);
export default routes;
