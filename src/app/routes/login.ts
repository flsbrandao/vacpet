import { Router } from "express";

import LoginController from "../controllers/LoginController";

const routes = Router();

routes.get("/login", LoginController.index);

export default routes;