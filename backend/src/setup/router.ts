import * as express from 'express';

const setupRouter = (app, db) => {
  const router = express.Router();

  // base endpoint to welcome user to the application
router.get('/', (req: any, res: any) => {
  res.status(200).json({
    message: 'Welcome to ILike Application.'
  });
});
}

export default setupRouter;