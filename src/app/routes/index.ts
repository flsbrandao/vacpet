import express from "express";

import login from "./login";
import pet from "./pet";
import user from "./user";
import species from "./species";
import breeds from "./breeds";

export default (app: express.Application) => {
  app.use(login);
  app.use(user);
  app.use("/users", pet);
  app.use(species);
  app.use(breeds);
};
