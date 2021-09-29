import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from '../app/routes/index';
import handlebars from 'express-handlebars';
import '../database/connect';
import MyCustomErrors from '../app/helpers/MyCustomErrors';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/assets', express.static('views/assets'));
app.use('/node_modules', express.static('views/node_modules'));

routes(app);

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
  defaultLayout: 'main',
  extname: 'hbs'
}));

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error instanceof MyCustomErrors) {
    return res.status(error.statusCode).json({
      message: error.message,
      success: false
    })
  }
  return res.status(500).json({ message: 'Internal Error', success: false })
});

export default app;