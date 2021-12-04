import { Router } from "express";
import passport from "passport";

import LoginController from "../controllers/LoginController";
import UsersController from "../controllers/UsersController";

const routes = Router();

routes.get("/register-users", UsersController.renderCreate);

routes.post("/users", UsersController.create);
routes.get("/login", LoginController.index);
routes.get("/logout", LoginController.logout);
routes.post(
  "/signIn",
  passport.authenticate("local", { failureRedirect: "/login" }),
  LoginController.signIn
);

export default routes;
