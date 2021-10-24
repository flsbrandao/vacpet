import { Router } from "express";
import BreedsController from "../controllers/BreedsController";
const routes = Router();

routes.get("/breeds", BreedsController.findForSpecie);

export default routes;