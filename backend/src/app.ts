import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';
import { movieRouter } from './routes';

const API_VERSION = '/api';
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(compression());
app.use(cors());
app.use(API_VERSION, movieRouter)

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'ILike Service is running here'
  });
});
export default app;


