import { Router } from "express";

import PetController from "../controllers/PetController";

const routes = Router();

routes.get("/pets", PetController.index);

export default routes;