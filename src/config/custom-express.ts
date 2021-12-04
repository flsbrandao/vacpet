import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import routes from "../app/routes/index";
import handlebars from "express-handlebars";
import "../database/connect";
import MyCustomErrors from "../app/helpers/MyCustomErrors";
import auth from "./auth";


declare global {
  namespace Express {
    interface User {
      id: string;
      userId: string;
      email: string;
      password: string;
      tipo: string;
      clinicId?: string;
    }
  }
}

const app: express.Application = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/assets", express.static("views/assets"));
app.use("/node_modules", express.static("views/node_modules"));
app.use("/images", express.static("uploads/"));

auth(app);
routes(app);

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    defaultLayout: "main",
    extname: "hbs",
  })
);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error instanceof MyCustomErrors) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }
  return res.status(500).json({ message: "Internal Error" });
});

export default app;
