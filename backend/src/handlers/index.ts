import { Response, Request } from 'express';
import { v4 } from 'uuid';
import { moviesServices } from '../services';

class MoviesHandler {
  // method that creates a movie
  async add(req: Request, res: Response) {
    try {
      const { title, description, likeCount, image } = req.body;
      // restructure data payload
      const data = {
        title,
        description,
        likeCount,
        image,
        createdAt: new Date()
      };
      // Add movies action
      const addMovie = await moviesServices.add(data);
      res.status(201).json({
        message: 'Movie was successfully added',
        data: addMovie
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal server error'
      });
    }
  }
  // method that handles get all movies
  async get(req: Request, res: Response) {
    try {
      const getAllMovies = await moviesServices.get();
      // if no movie is found return a 404 and message
      if (getAllMovies.length === 0)
        return res
          .status(404)
          .json({ message: 'A movie is yet to be created.' });
      // if successful return a success message and payload
      res.status(200).json({
        message: 'Successfully retrieved all movies',
        data: getAllMovies
      });
    } catch (error) {
      // catch errors
      console.error(error);
      res.status(500).json({
        message: 'Internal server error'
      });
    }
  }
  // Method that handles the like a movie feature
  async update(req: Request, res: Response) {
    try {
      const { movieId } = req.params;
      // validate movieId is provided
      if (!movieId || movieId.trim().length === 0) {
        return res.status(400).json({ message: 'Movie Id is required' });
      }
      // Find and update a movie using an the id provided
      const likeMovie = await moviesServices.update(movieId);
      // if the movie does not exist throw a 404 and message
      if (!likeMovie)
        return res.status(404).json({ message: 'Movie does not exist' });
      // If successful return a payload and success message
      res.status(200).json({
        message: 'Success! You liked this movie',
        data: likeMovie
      });
    } catch (error) {
      // catch errors
      console.error(error);
      res.status(500).json({
        message: 'Internal server error'
      });
    }
  }
}

export const moviesHandler = new MoviesHandler();
