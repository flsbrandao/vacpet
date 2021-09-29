import { Router } from "express";

import PetController from "../controllers/PetController";

const routes = Router();

routes.get("/register-pets", PetController.renderCreate);
routes.get("/list-pets", PetController.renderList);

export default routes;