import { Router } from 'express';
import SpeciesController from '../controllers/SpeciesController';

const routes = Router();
routes.get("/species", SpeciesController.findAll);

export default routes;