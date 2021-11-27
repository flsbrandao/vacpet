import { Router } from "express";
import MedicalRecordController from "../controllers/MedicalRecordController";

const routes = Router();

routes.post("/clinic/medicalrecord", MedicalRecordController.createOrUpdate);
export default routes;
