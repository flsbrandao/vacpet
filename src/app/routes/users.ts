import { Router } from "express";

import UsersController from "../controllers/UsersController";

const routes = Router();

routes.get("/register-users", UsersController.renderCreate);
routes.post("/users", UsersController.create);
routes.get("/clinic/list-users", UsersController.renderList);
routes.get("/clinic/users", UsersController.find);
routes.get("/clinic/user-and-pets/:userid", UsersController.renderUserAndPets);
routes.get("/clinic/users/:id", UsersController.findForId);
export default routes;
