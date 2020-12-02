import * as express from 'express';
import { moviesHandler } from '../handlers';
import ValidateInput from '../validators';

const router = express.Router();

// endpoint to add a movie
router.post('/add-movie', ValidateInput, (req: express.Request, res: express.Response) => {
  moviesHandler.add(req, res);
});

// endpoint to get all movies with their respective total likes
router.get('/movies', (req: express.Request, res: express.Response) => {
  moviesHandler.get(req, res);
});

// endpoint to add a movie
router.patch('/movie/:movieId', (req: express.Request, res: express.Response) => {
  moviesHandler.update(req, res);
})

export const movieRouter = router;
