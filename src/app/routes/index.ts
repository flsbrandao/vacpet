import express from "express";

import login from "./login";
import pets from "./pets";
import users from "./users";
import species from "./species";
import breeds from "./breeds";
import vaccination from "./vaccination";
import vaccines from "./vaccines";
import batches from "./batches";
import clinics from "./clinics";
import medicalrecord from "./medicalrecord";
import products from './products';

import isAuthenticated from "../../config/authenticate";

export default (app: express.Application) => {
  app.use(login);
  app.use(isAuthenticated);
  app.use(users);
  app.use(pets);
  app.use(species);
  app.use(breeds);
  app.use(vaccination);
  app.use(vaccines);
  app.use(batches);
  app.use(clinics);
  app.use(medicalrecord);
  app.use(products);
};
