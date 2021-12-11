import { NextFunction, Request, Response } from "express";

class ProductsController {
  public renderList(req: Request, res: Response, next: NextFunction): void {
    try {
      return res.render("pages/user/list-products");
    } catch (err) {
      return next(err);
    }
  }
}

export default new ProductsController();
