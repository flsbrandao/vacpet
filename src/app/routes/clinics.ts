import { Router } from "express";
import ClinicsController from "../controllers/ClinicsController";

const routes = Router();

routes.get("/users/list-clinics", ClinicsController.renderList);
routes.get("/users/clinics", ClinicsController.find);
export default routes;
