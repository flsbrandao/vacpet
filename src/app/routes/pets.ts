import { Router } from "express";
import multer from "multer";
import storage from "../../config/upload";
import PetsController from "../controllers/PetsController";

const routes = Router();

const upload = multer({ storage });

routes.get("/users/register-pets", PetsController.renderCreate);
routes.get("/users/list-pets", PetsController.renderList);
routes
  .post("/users/pets", upload.single("foto"), PetsController.create)
  .get("/users/pets", PetsController.findForUser);
routes.get("/clinic/pets", PetsController.findForUserClinic);
routes.get("/clinic/list-pet/:id", PetsController.renderPet);
routes.get("/clinic/pets/:id", PetsController.findForId);

export default routes;
