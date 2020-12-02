import * as Express from 'express';
import {
  setupMiddleware,
  setupDatabase,
  setupRouter,
} from './setup';
import config from './config';


const app = Express();

// set up body parser
setupMiddleware(app);

const start = async () => {
  // set up database connection
  const db = await setupDatabase();

  // // set up router
  setupRouter(app, db)
  
  app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
  })
}

start().catch(console.error);