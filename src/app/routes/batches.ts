import { Router } from "express";
import BatchesController from "../controllers/BatchesController";
const routes = Router();
routes.get(
  "/clinic/batches/:vaccine",
  BatchesController.findForVaccinesOnlyValid
);
export default routes;
