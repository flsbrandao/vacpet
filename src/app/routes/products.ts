import { Router } from "express";
import ProductsController from "../controllers/ProductsController";
const routes = Router();

routes.get("/users/list-products", ProductsController.renderList);

export default routes;
