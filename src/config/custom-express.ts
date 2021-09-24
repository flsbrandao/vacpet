import express from 'express';
import cors from 'cors';
import routes from '../app/routes/index';
import handlebars from 'express-handlebars';

const app: express.Application = express();

app.use(express.json());

app.use('/assets', express.static('views/assets'));
app.use('/node_modules', express.static('views/node_modules'));

routes(app);

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
  defaultLayout: 'main',
  extname: 'hbs'
}));

export default app;