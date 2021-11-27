import { Router } from "express";
import MedicalRecordController from "../controllers/MedicalRecordController";

const routes = Router();
routes.get("/clinic/medicalrecord/:pet", MedicalRecordController.renderCreate);
routes.post("/clinic/medicalrecord", MedicalRecordController.createOrUpdate);
export default routes;
