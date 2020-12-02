import { movies } from '../db/models/movies';

class MoviesServices {
  // method that add to the db
  async add(body) {
    return movies.create(body);
  }
  // methods that get from the db
  async get() {
    return movies.find();
  }
  // method that update the db
  async update(movieId: number) {
    return movies.findOneAndUpdate(
      { _id: movieId },
      {
        $inc: { likeCount: 1 }, // increment likeCount by 1
        $set: { updatedAt: new Date() } // add new updated date
      },
      { new: true }
    );
  }
}

export const moviesServices = new MoviesServices();
