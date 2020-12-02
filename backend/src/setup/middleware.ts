import * as Cors from 'cors';
import * as BodyParser from 'body-parser';

// set up the middleware that will be used by th app
const setupMiddleware = (app) => {
  app.use(BodyParser.json());
  app.use(Cors())
}

export default setupMiddleware;