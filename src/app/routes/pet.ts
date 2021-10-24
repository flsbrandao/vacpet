import { Router } from "express";

import PetsController from "../controllers/PetsController";

const routes = Router();

routes.get("/register-pets", PetsController.renderCreate);
routes.get("/list-pets", PetsController.renderList);
routes.post("/pets", PetsController.create);
export default routes;