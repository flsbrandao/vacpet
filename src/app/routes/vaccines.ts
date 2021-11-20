import { Router } from "express";
import VaccinesController from "../controllers/VaccinesController";
const routes = Router();

routes.get("/clinic/vaccines/:pet", VaccinesController.vaccinesForSpecie);
export default routes;
